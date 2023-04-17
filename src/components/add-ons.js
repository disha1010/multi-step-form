import '../scss/app.scss';

function AddOns(props) {
  const title = props.title;
  const subtitle = props.subtitle;

  return (
    <>
      <h2 className="title">{title}</h2>
      <p className="subtitle">{subtitle}</p>
      <div className="add-ons">
        <div className="add-ons-1">
          <div className="add-ons-info">
            <span className="add-ons-name"></span>
            <span className="add-ons-desc"></span>
          </div>
          <div className="add-ons-cost"></div>
        </div>
      </div>
    </>
  );
}

export default AddOns;
