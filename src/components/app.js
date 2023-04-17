import React from "react";

import '../scss/app.scss';
import Steps from './steps';
import Form from './form';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeStepNumber: 1,
    }
  }

  nextStep = () => {
    let currentStep = this.state.activeStepNumber
    currentStep += 1;
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
