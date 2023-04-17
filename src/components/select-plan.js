import '../scss/select-plan.scss';
import ArcadeIcon from '../images/icon-arcade.svg';

function SelectPlan(props) {
  const title = props.title;
  const subtitle = props.subtitle;

  return (
    <>
      <h2 className="title">{title}</h2>
      <p className="subtitle">{subtitle}</p>
      <ul className="plans">
        <li className="plan plan-1">
          <img src={ArcadeIcon} className="plan-icon" />
          <div className="plan-info">
            <div className="plan-name">Arcade</div>
            <div className="plan-cost">$9/mo</div>
          </div>
        </li>
      </ul>
      <div className="plan-type">
        <input type="radio" />
      </div>
    </>
  );
}

export default SelectPlan;
