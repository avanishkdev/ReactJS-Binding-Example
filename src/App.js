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
    console.log("handle change");
    this.setState({
      userName: event.target.value
    });
  } 

  render() {return (    <div className="App">
      <UserInput change={this.handleuserNameChange.bind(this)} />
      <UserOutput text1="user1" text2 = "user1" username={this.state.userName}/>
      <UserOutput text1="user2" text2 = "user2" username={this.state.userName} />
    </div>
  )};
}

export default App;
