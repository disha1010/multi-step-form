import '../scss/form.scss';
import PersonalInfo from './personal-info';
import SelectPlan from './select-plan';
import AddOns from './add-ons';
import Summary from './summary';

function Form(props) {
  let activeStepNumber = props.activeStepNumber;

  const activeStepForm = (currentStepNumber) => {


    switch (currentStepNumber) {
      case 1:
        return <PersonalInfo title="Personal Info" subtitle="Please provide your name, email address and phone number." />
      case 2:
        return <SelectPlan title="Select your plan" subtitle="You have the option of monthly or yearly billing." />
      case 3:
        return <AddOns title="Pick add-ons" subtitle="Add-ons help enhance your gaming experience." />
      case 4:
        return <Summary title="Finishing up" subtitle="Double-check everything looks OK before confirming." />    
      default:
        break;
    }
  }

  const handleNextStep = () => {
    props.onNextStep();
  }
  const handlePreviousStep = () => {
    props.onPreviousStep();
  }

  return (
    <div className="form-container">
      {activeStepForm(activeStepNumber)}

      <div className="buttons-bar">
        {activeStepNumber !== 1 && <button className="button" onClick={() => handlePreviousStep()}>Go back</button>}
        {
          activeStepNumber !== 4 
          ? <button className="button primary" onClick={() => handleNextStep()}>Next step</button>
          : <button className="button success">Confirm</button>
        }
      </div>      
    </div>
  );
}

export default Form;
