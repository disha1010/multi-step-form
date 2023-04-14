import '../scss/app.scss';

function AddOns() {
  return (
    <>
      <h2 className="title">Pick add-ons</h2>
      <p className="subtitle">Add-ons help enhance your gaming experience.</p>
      <div className="add-ons">
        <div className="add-ons-1">
          <div className="add-ons-info">
            <span className="add-ons-name"></span>
            <span className="add-ons-desc"></span>
          </div>
          <div className="add-ons-cost"></div>
        </div>
      </div>
      <button className="button">Go back</button>
      <button className="button primary">Next step</button>
    </>
  );
}

export default AddOns;
