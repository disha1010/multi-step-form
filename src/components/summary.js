import '../scss/summary.scss';

function Summary(props) {
  const title = props.title;
  const subtitle = props.subtitle;

  return (
    <>
      <h2 className="title">Finishing up</h2>
      <p className="subtitle">Double-check everything looks OK before confirming.</p>
      <div className="summary">
        <ul className="price-list">
          <li className="price-list-item main-cost">
            <div className="main-cost-info">
              <div className="cost-type">Arcade (Yearly)</div>
              <button className="button link">Change</button>
            </div>
            <span className="cost">$9/mo</span>
          </li>
          <li className="price-list-item additional-cost">
            <span className="cost-type">Online service</span>
            <span className="cost">+$1/mo</span>
          </li>
          <li className="price-list-item additional-cost">
            <span className="cost-type">Large storage</span>
            <span className="cost">+$2/mo</span>
          </li>
        </ul>
        <div className="total-cost">
          <span className="cost-type">Total (per month)</span>
          <span className="cost">+$12/mo</span>
        </div>
      </div>
    </>
  );
}

export default Summary;
