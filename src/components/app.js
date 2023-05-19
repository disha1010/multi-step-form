import React from "react";

import '../scss/app.scss';
import Steps from './steps';
import Form from './form';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      model: {
        personal:{
          fullName: 'wadfa',
          email: 'longbow_06lunch@icloud.com',
          phone: '1234567890',
        },
        plan: {
          planName: '',
          cost: '',
          currentPlan: '',
          currentPlanType: 'Monthly',
        },
        addons: {
          'Online service': {
            name: '', 
            cost: '', 
            isAddonChecked: false,
          }, 
          'Large storage': {
            name: '', 
            cost: '', 
            isAddonChecked: false,
          },
          'Customizable Profile': {
            name: '', 
            cost: '', 
            isAddonChecked: false,
          },
        }
      },
      errors: {},
      activeStepNumber: 1,
    };
  }

  onUpdateInputValue = (modelKey, key, value) => {
    this.setState((prevState) => ({
      ...prevState,
      model: {
        ...prevState.model,
        [modelKey]: {
          ...prevState.model[modelKey],
          [key]: value,
        }
      }
    }))
  }

  onSelectPlan = (modelKey, name, cost) => {
    this.setState((prevState) => ({
      ...prevState,
      model: {
        ...prevState.model,
        [modelKey]: {
          ...prevState.model[modelKey],
          planName: name,
          cost: cost,
          currentPlan: name,
        }
      }
    }))
  }

  onSelectPlanType = (modelKey, planType) => {
    let selectedPlanType = '';
    
    if (planType) {
      selectedPlanType = 'Yearly'
    } else {
      selectedPlanType = 'Monthly'
    }

    this.setState((prevState) => ({
      ...prevState,
      model: {
        ...prevState.model,
        [modelKey]: {
          ...prevState.model[modelKey],
          currentPlanType: selectedPlanType,
        }
      }
    }))
  }

  onSelectAddon = (modelKey, isAddonChecked, addonName, addonCost) => {
    this.setState((prevState) => ({
      ...prevState,
      model: {
        ...prevState.model,
        [modelKey]:{
          ...prevState.model[modelKey],
          [addonName]: {
            name: addonName, 
            cost: addonCost, 
            isAddonChecked: isAddonChecked,
          }
        },
      }
    }))

    console.log(this.state.model.addons);
  }

  handleValidation = () =>  {
    let fields = this.state.model.personal;
    let errors = {};
    let formIsValid = true;

    if (!fields["fullName"]) {
      formIsValid = false;
      errors["fullName"] = "Cannot be empty";
    } else if (!fields["fullName"].match(/^[a-zA-Z]+$/)) {
      formIsValid = false;
      errors["fullName"] = "Only letters";
    }

    let lastAtPos = fields["email"].lastIndexOf("@");
    let lastDotPos = fields["email"].lastIndexOf(".");
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    } else if (
      !(
        lastAtPos < lastDotPos &&
        lastAtPos > 0 &&
        fields["email"].indexOf("@@") == -1 &&
        lastDotPos > 2 &&
        fields["email"].length - lastDotPos > 2
      )
    ) {
      formIsValid = false;
      errors["email"] = "Email is not valid";
    }

    if (!fields["phone"]) {
      formIsValid = false;
      errors["phone"] = "Cannot be empty";
    } else if (!fields["phone"].match(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i)) {
      formIsValid = false;
      errors["phone"] = "Only numbers";
    } else if (fields["phone"].length != 10) {
      formIsValid = false;
      errors["phone"] = "Phone number must be least 10 numbers";
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  nextStep1 = () => {
    let currentStep = this.state.activeStepNumber;
    if (this.handleValidation()) {
      currentStep += 1;
    }
    this.setState({activeStepNumber: currentStep});
  }

  nextStep2 = () => {
    let currentStep = this.state.activeStepNumber;
    let fields = this.state.model.plan;

    if (!!fields['planName'] && !!fields['cost'] && !!fields['currentPlanType']) {
      currentStep += 1;
    }

    this.setState({activeStepNumber: currentStep});
  }

  nextStep3 = () => {
    let currentStep = this.state.activeStepNumber;
    currentStep += 1;
    this.setState({activeStepNumber: currentStep});
  }

  previousStep = () => {
    let currentStep = this.state.activeStepNumber;
    currentStep -= 1;
    this.setState({activeStepNumber: currentStep});
  }
  

  render() {
    return (
      <main className="app">
        <Steps activeStepNumber = {this.state.activeStepNumber} />
        <Form 
          activeStepNumber = {this.state.activeStepNumber}  
          appState = {this.state.model}
          onNextStep1 = {this.nextStep1}
          onNextStep2 = {this.nextStep2}
          onNextStep3 = {this.nextStep3}
          onPreviousStep = {this.previousStep}
          onUpdateInputValue = {this.onUpdateInputValue}
          errorMessage = {this.state.errors}
          onSelectPlan = {this.onSelectPlan}
          onSelectPlanType = {this.onSelectPlanType}
          onSelectAddon = {this.onSelectAddon}
        />
      </main>
    );
  }
}

export default App;
