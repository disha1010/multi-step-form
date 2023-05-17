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
          fullName: '',
          email: '',
          phone: '',
        },
        plan: {},
        addons: {},
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

  handleValidation = () =>  {
    let fields = this.state.model.personal;
    let errors = {};
    let formIsValid = true;

    if (!fields["fullName"]) {
      formIsValid = false;
      errors["fullName"] = "Cannot be empty";
    }

    if (typeof fields["fullName"] !== "undefined") {
      if (!fields["fullName"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["fullName"] = "Only letters";
      }
    }

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
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
    }

    if (!fields["phone"]) {
      formIsValid = false;
      errors["phone"] = "Cannot be empty";
    }
    
    if (typeof fields["phone"] !== "undefined") {
      if (!fields["phone"].match(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i)) {
        formIsValid = false;
        errors["phone"] = "Only numbers";
      } else if (fields["phone"].length != 10) {
        formIsValid = false;
        errors["phone"] = "Phone number must be least 10 numbers";
      }
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  nextStep = () => {
    let currentStep = this.state.activeStepNumber;
    if (this.handleValidation()) {
      currentStep += 1;
    }
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
          appState={this.state.model}
          onNextStep = {this.nextStep}
          onPreviousStep = {this.previousStep}
          onUpdateInputValue = {this.onUpdateInputValue}
          errorMessage = {this.state.errors}
        />
      </main>
    );
  }
}

export default App;
