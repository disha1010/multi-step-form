import '../scss/app.scss';

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

function Steps() {
  return (
    <div className="steps-container">
      {STEPS_INFO.map((step) => 
        <div key={step.id} className={`step-${step.id}`}>
          <span className="step-number">{step.id}</span>
          <div className="step-info">
            <span className="step-title">Step {step.id}</span>
            <span className="step-name">{step.name}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Steps;
