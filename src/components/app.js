import React from "react";

import '../scss/app.scss';
import Steps from './steps';
import Form from './form';

// const validate = () => {
//   const nameField = document.getElementById("name");
//   let valid = true;

//   console.log(nameField)
//   if (!nameField.value) {
//     const nameError = document.getElementById("name-error");
//     nameError.classList.add("visible");
//     nameField.classList.add("error");
//   } 

//   return valid;
// }

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeStepNumber: 1,
    }
  }

  nextStep = () => {
    let currentStep = this.state.activeStepNumber;
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const phoneField = document.getElementById("phone");
    let valid = true;
  
    console.log(nameField);
    if (!nameField.value) {
      const nameError = document.getElementById("name-error");
      nameError.classList.add("visible");
      nameField.classList.add("error");
      valid = false;
    } else if (!emailField.value) {
      const emailError = document.getElementById("email-error");
      emailError.classList.add("visible");
      emailField.classList.add("error");
      valid = false;
    } else if (!phoneField.value) {
      const phoneError = document.getElementById("phone-error");
      phoneError.classList.add("visible");
      phoneField.classList.add("error");
      valid = false;
    }

    valid && currentStep++;
    this.setState({activeStepNumber: currentStep});
  }

  previousStep = () => {
    let currentStep = this.state.activeStepNumber
    currentStep -= 1;
    this.setState({activeStepNumber: currentStep});
  }
  

  render() {
    return (
      <main className="app">
        <Steps activeStepNumber = {this.state.activeStepNumber} />
        <Form 
          activeStepNumber = {this.state.activeStepNumber}  
          onNextStep = {this.nextStep}
          onPreviousStep = {this.previousStep}
        />
      </main>
    );
  }
}

export default App;
