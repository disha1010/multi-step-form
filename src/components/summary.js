import '../scss/summary.scss';

function Summary(props) {
  const plan = props.planState.planName;
  const planCost = props.planState.cost;
  const planType = props.planState.currentPlanType;
  const addons = props.addonsState;
  const activeStepNumber = props.activeStepNumber

  const totalCost = () => {
    const addonsTotalCost = Object.keys(addons)
                                  .map(item => addons[item].isAddonChecked && Number(addons[item].cost))
                                  .reduce((a, b) => a + b, 0);
    return Number(planCost) + addonsTotalCost;
  }

  const jumpToSecondStep = () => {
    props.onJumpToSecondStep();
  }

  return (
    <>
      <h2 className="title">Finishing up</h2>
      <p className="subtitle">Double-check everything looks OK before confirming.</p>
      <div className="summary">
        <ul className="price-list">
          <li className="price-list-item main-cost">
            <div className="main-cost-info">
              <div className="cost-type">{plan} ({planType})</div>
              <button className="button link" onClick={() => jumpToSecondStep()}>Change</button>
            </div>
            <span className="cost">${planCost}/mo</span>
          </li>
          {Object.keys(addons).map(item => 
            (addons[item].isAddonChecked) &&
            <li key={addons[item].name}  className="price-list-item additional-cost">
              <span className="cost-type">{addons[item].name}</span>
              <span className="cost">+${addons[item].cost}/mo</span>
            </li>
          )}
        </ul>
        <div className="total-cost">
          <span className="cost-type">Total (per month)</span>
          <span className="cost">+${totalCost()}/mo</span>
        </div>
      </div>
    </>
  );
}

export default Summary;
