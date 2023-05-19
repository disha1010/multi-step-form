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
      <h2 className="title">Select your plan</h2>
      <p className="subtitle">You have the option of monthly or yearly billing.</p>
      <ul className="plans">
        {PLAN_TYPE.map((plan) => 
          <li 
            key={plan.id} 
            className={`plan plan-${plan.id} ${currentPlan === plan.name ? 'selected' : ''}`} 
            onClick={() => handleSelectPlan(plan.name, plan.cost)}
          >
            <img src={plan.icon} alt={`icon for ${plan.name} plan`} className="plan-icon" />
            <div className="plan-info">
              <div className="plan-name">{plan.name}</div>
              <div className="plan-cost">${plan.cost}/mo</div>
            </div>
          </li>
        )}
      </ul>
      <div className="plan-type">
        <span className={`switch-label ${currentPlanType === 'Monthly' && 'selected'}`}>Monthly</span>
        <label className="switch">
          <input type="checkbox" onChange={e => handleSelectPlanType(e.target.checked)} checked={currentPlanType === 'Yearly'} />
          <span className="slider"></span>
        </label>
        <span className={`switch-label ${currentPlanType === 'Yearly' && 'selected'}`}>Yearly</span>
      </div>
    </>
  );
}

export default SelectPlan;
