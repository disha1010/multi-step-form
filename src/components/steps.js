import '../scss/steps.scss';

const STEPS_INFO = [{
    id: 1,
    name: 'Your info',
  }, {
    id: 2,
    name: 'Select plan',
  }, {
    id: 3,
    name: 'Add-ons',
  }, {
    id: 4,
    name: 'Summary',
  },
];


function Steps(props) {
  let activeStepNumber = props.activeStepNumber;

  return (
    <ul className="steps-list">
      {STEPS_INFO.map((step) => 
        <li key={step.id} className={`step step-${step.id} ${activeStepNumber === step.id ? 'active' : ''}`}>
          <span className="step-number">{step.id}</span>
          <div className="step-info">
            <div className="step-title">Step {step.id}</div>
            <div className="step-name">{step.name}</div>
          </div>
        </li>
      )}
    </ul>
  );
}

export default Steps;
