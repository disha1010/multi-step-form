import '../scss/app.scss';

function Summary() {
  return (
    <>
      <h2 className="title">Finishing up</h2>
      <p className="subtitle">Double-check everything looks OK before confirming.</p>
      <div className="summary">
        <ul className="price-list">
          <li className="price-list-item main-cost">
            <div className="main-cost-info">
              <span className="cost-type"></span>
              <button className="button link"></button>
            </div>
            <span className="cost"></span>
          </li>
          <li className="price-list-item additional-cost">
            <span className="cost-type"></span>
            <span className="cost"></span>
          </li>
          <li className="price-list-item additional-cost">
            <span className="cost-type"></span>
            <span className="cost"></span>
          </li>
        </ul>
        <div className="total-cost">
          <span className="cost-type"></span>
          <span className="cost"></span>
        </div>
      </div>
      <button className="button">Go back</button>
      <button className="button primary">Confirm</button>
    </>
  );
}

export default Summary;
