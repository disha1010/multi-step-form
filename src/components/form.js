import '../scss/form.scss';
import PersonalInfo from './personal-info';
import SelectPlan from './select-plan';
import AddOns from './add-ons';
import Summary from './summary';
import ThankYouStep from './thank-you';

function Form(props) {
  let activeStepNumber = props.activeStepNumber;
  let errorMessage = props.errorMessage;
  let appState = props.appState;
  let onUpdateInputValue = props.onUpdateInputValue;
  let onSelectPlan = props.onSelectPlan;
  let onSelectPlanType = props.onSelectPlanType;
  let onSelectAddon = props.onSelectAddon;
  let onJumpToSecondStep = props.onJumpToSecondStep;

  const activeStepForm = (currentStepNumber, appState, onUpdateInputValue, errorMessage, onSelectPlan, onSelectPlanType, onSelectAddon, onJumpToSecondStep) => {
    switch (currentStepNumber) {
      case 1:
        return <PersonalInfo 
          model={appState.personal}
          onUpdateInputValue={onUpdateInputValue}
          errorMessage={errorMessage} 
        />
      case 2:
        return <SelectPlan
          model={appState.plan}
          onSelectPlan={onSelectPlan}
          onSelectPlanType={onSelectPlanType}
        />
      case 3:
        return <AddOns
          model={appState.addons}
          onSelectAddon={onSelectAddon} 
        />
      case 4:
        return <Summary
          planState={appState.plan}
          addonsState={appState.addons}
          onJumpToSecondStep={onJumpToSecondStep}
        />
      case 5:
        return <ThankYouStep />     
      default:
        break;
    }
  }

  const handleNextStep1 = () => {
    props.onNextStep1();
  }

  const handleNextStep2 = () => {
    props.onNextStep2();
  }

  const handleNextStep3 = () => {
    props.onNextStep3();
  }

  const handlePreviousStep = () => {
    props.onPreviousStep();
  }

  return (
    <div className="form-container">
      {activeStepForm(activeStepNumber, 
                      appState, 
                      onUpdateInputValue, 
                      errorMessage, 
                      onSelectPlan, 
                      onSelectPlanType, 
                      onSelectAddon, 
                      onJumpToSecondStep)}

      <div className="buttons-bar">
        <p className="plan-error-label">{errorMessage.plan}</p>
        {activeStepNumber === 1 && <button className="button primary" onClick={() => handleNextStep1()}>Next step</button>}
        {activeStepNumber === 2 && <button className="button primary" onClick={() => handleNextStep2()}>Next step</button>}
        {activeStepNumber === 3 && <button className="button primary" onClick={() => handleNextStep3()}>Next step</button>}
        {activeStepNumber === 4 && <button className="button success" onClick={() => handleNextStep3()}>Confirm</button>}
        {(activeStepNumber !== 1 && activeStepNumber !== 5) && <button className="button" onClick={() => handlePreviousStep()}>Go back</button>}
      </div>      
    </div>
  );
}

export default Form;
