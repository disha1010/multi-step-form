import '../scss/select-plan.scss';
import ArcadeIcon from '../images/icon-arcade.svg';
import AdvancedIcon from '../images/icon-advanced.svg';
import ProIcon from '../images/icon-pro.svg';

const PLAN_TYPE = [{
    id: 1,
    name: "Arcade",
    cost: "9",
    icon: ArcadeIcon,
  }, {
    id: 2,
    name: "Advanced",
    cost: "12",
    icon: AdvancedIcon,
  }, {
    id: 3,
    name: "Pro",
    cost: "15",
    icon: ProIcon,
  },
]

function SelectPlan(props) {
  const title = props.title;
  const subtitle = props.subtitle;

  return (
    <>
      <h2 className="title">{title}</h2>
      <p className="subtitle">{subtitle}</p>
      <ul className="plans">
        {PLAN_TYPE.map((plan) => 
          <li key={plan.id} className={`plan ,plan-${plan.id}`}>
            <img src={plan.icon} className="plan-icon" />
            <div className="plan-info">
              <div className="plan-name">{plan.name}</div>
              <div className="plan-cost">${plan.cost}/mo</div>
            </div>
          </li>
        )}
      </ul>
      <div className="plan-type">
        <span className="switch-label">Monthly</span>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
        <span className="switch-label">Yearly</span>
      </div>
    </>
  );
}

export default SelectPlan;
