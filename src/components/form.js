import '../scss/form.scss';
import PersonalInfo from './personal-info';
import SelectPlan from './select-plan';
import AddOns from './add-ons';
import Summary from './summary';

function Form(props) {
  let activeStepNumber = props.activeStepNumber;
  let errorMessage = props.errorMessage;
  let appState = props.appState;
  let onUpdateInputValue = props.onUpdateInputValue;
  let onSelectPlan = props.onSelectPlan;
  let onSelectPlanType = props.onSelectPlanType;
  let onSelectAddon = props.onSelectAddon;

  const activeStepForm = (currentStepNumber, appState, onUpdateInputValue, errorMessage, onSelectPlan, onSelectPlanType, onSelectAddon) => {
    switch (currentStepNumber) {
      case 1:
        return <PersonalInfo 
        model={appState.personal}
        title="Personal Info" 
        subtitle="Please provide your name, email address and phone number." 
        onUpdateInputValue={onUpdateInputValue}
        errorMessage={errorMessage} />
      case 2:
        return <SelectPlan title="Select your plan" 
        model={appState.plan}
        subtitle="You have the option of monthly or yearly billing." 
        onSelectPlan={onSelectPlan}
        onSelectPlanType={onSelectPlanType}
        />
      case 3:
        return <AddOns title="Pick add-ons" 
        model={appState.addons}
        subtitle="Add-ons help enhance your gaming experience."
        onSelectAddon={onSelectAddon} />
      case 4:
        return <Summary 
        title="Finishing up" 
        subtitle="Double-check everything looks OK before confirming." />    
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
      {activeStepForm(activeStepNumber, appState, onUpdateInputValue, errorMessage, onSelectPlan, onSelectPlanType, onSelectAddon)}

      <div className="buttons-bar">
        {activeStepNumber !== 1 && <button className="button" onClick={() => handlePreviousStep()}>Go back</button>}
        {activeStepNumber === 1 && <button className="button primary" onClick={() => handleNextStep1()}>Next step 1</button>}
        {activeStepNumber === 2 && <button className="button primary" onClick={() => handleNextStep2()}>Next step 2</button>}
        {activeStepNumber === 3 && <button className="button primary" onClick={() => handleNextStep3()}>Next step 3</button>}
        {activeStepNumber === 4 && <button className="button success">Confirm</button>}
      </div>      
    </div>
  );
}

export default Form;
