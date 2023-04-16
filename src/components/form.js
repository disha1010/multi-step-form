import '../scss/form.scss';
import PersonalInfo from './personal-info';
import SelectPlan from './select-plan';
import AddOns from './add-ons';
import Summary from './summary';


function Form() {
  return (
    <div className="form-container">
      <PersonalInfo />
      {/* <SelectPlan /> */}
      {/* <AddOns /> */}
      {/* <Summary /> */}
    </div>
  );
}

export default Form;
