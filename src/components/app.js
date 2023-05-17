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
          fullName: '33',
          email: '44',
          phone: '555',
        },
        plan: {},
        addons: {},
      },
      activeStepNumber: 1,
    };
    this.onUpdateInputValue = this.onUpdateInputValue.bind(this);
  }

  onUpdateInputValue = (modelKey, key, value) => {
    this.setState((prevState) => ({  //toDo
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

  nextStep = () => {
    let currentStep = this.state.activeStepNumber;
    currentStep += 1;
    this.setState({
      activeStepNumber: currentStep,
    });
  }

  previousStep = () => {
    let currentStep = this.state.activeStepNumber;
    currentStep -= 1;
    this.setState({
      activeStepNumber: currentStep,
    });
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
        />
      </main>
    );
  }
}

export default App;
