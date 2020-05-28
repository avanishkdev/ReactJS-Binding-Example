import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput/UserInput.component';
import UserOutput from './components/UserOutput/UserOutput.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {userName: "Avanish"};
  }

  handleuserNameChange(event) {   
    this.setState({
      userName: event.target.value
    });
  } 

  render() {return (    <div className="App">
      <UserInput changed={this.handleuserNameChange.bind(this)} name={this.state.userName}/>
      <UserOutput  username={this.state.userName}/>
      <UserOutput  username={this.state.userName} />
    </div>
  )};
}

export default App;
