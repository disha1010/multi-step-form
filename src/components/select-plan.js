import '../scss/select-plan.scss';
import ArcadeIcon from '../images/icon-arcade.svg';
import AdvancedIcon from '../images/icon-advanced.svg';
import ProIcon from '../images/icon-pro.svg';

const PLAN_TYPE = {
  arcade: {
    id: 1,
    name: "Arcade",
    cost: "9",
    icon: ArcadeIcon,
  }, 
  advanced: {
    id: 2,
    name: "Advanced",
    cost: "12",
    icon: AdvancedIcon,
  }, 
  pro: {
    id: 3,
    name: "Pro",
    cost: "15",
    icon: ProIcon,
  },
}

function SelectPlan(props) {
  const title = props.title;
  const subtitle = props.subtitle;
  const currentPlan = props.model.currentPlan;
  const currentPlanType = props.model.currentPlanType;

  const handleSelectPlan = (name, cost) => {
    props.onSelectPlan('plan', name, cost);
  }

  const handleSelectPlanType = (planType) => {
    props.onSelectPlanType('plan', planType);
  }

  return (
    <>
      <h2 className="title">{title}</h2>
      <p className="subtitle">{subtitle}</p>
      <ul className="plans">
        {Object.keys(PLAN_TYPE).map((plan) => 
          <li key={PLAN_TYPE[plan].id} className={`plan plan-${PLAN_TYPE[plan].id} ${currentPlan === PLAN_TYPE[plan].name ? 'selected' : ''}`} onClick={() => handleSelectPlan(PLAN_TYPE[plan].name, PLAN_TYPE[plan].cost)}>
            <img src={PLAN_TYPE[plan].icon} className="plan-icon" />
            <div className="plan-info">
              <div className="plan-name">{PLAN_TYPE[plan].name}</div>
              <div className="plan-cost">${PLAN_TYPE[plan].cost}/mo</div>
            </div>
          </li>
        )}
      </ul>
      <div className="plan-type">
        <span className={`switch-label ${currentPlanType === 'Monthly' && 'selected'}`}>Monthly</span>
        <label className="switch">
          <input type="checkbox" onChange={e => handleSelectPlanType(e.target.checked)} />
          <span className="slider"></span>
        </label>
        <span className={`switch-label ${currentPlanType === 'Yearly' && 'selected'}`}>Yearly</span>
      </div>
    </>
  );
}

export default SelectPlan;
