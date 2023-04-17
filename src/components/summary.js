import '../scss/app.scss';

function Summary(props) {
  const title = props.title;
  const subtitle = props.subtitle;

  return (
    <>
      <h2 className="title">{title}</h2>
      <p className="subtitle">{subtitle}</p>
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
    </>
  );
}

export default Summary;
