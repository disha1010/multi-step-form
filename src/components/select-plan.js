import '../scss/app.scss';

function SelectPlan() {
  return (
    <>
      <h2 className="title">Select your plan</h2>
      <p className="subtitle">You have the option of monthly or yearly billing.</p>
      <div className="plans">
        <div className="plan-1">
          <i className="plan-icon"></i>
          <div className="plan-info">
            <span className="plan-name"></span>
            <span className="plan-cost"></span>
          </div>
        </div>
      </div>
      <div className="plan-type">
        <input type="radio" />
      </div>
      <button className="button primary">Next step</button>
      <button className="button">Go back</button>
    </>
  );
}

export default SelectPlan;
