import '../scss/app.scss';
import PersonalInfo from './personal-info';
import SelectPlan from './select-plan'
import AddOns from './add-ons'


function Form() {
  return (
    <div className="form-container">
      <PersonalInfo />
      <SelectPlan />
      <AddOns />
    </div>
  );
}

export default Form;
