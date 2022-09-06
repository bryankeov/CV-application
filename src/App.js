import React, { Component } from "react";
import Header from "./components/Header";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Work from "./components/Work";
import Overview from "./components/Overview";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);

    this.state = {
      //Personal Info
      name: '',
      email: '',
      phone: '',

      //Education
      school: '',
      certificate: '',
      dateEnd: new Date().toLocaleDateString('en-US'),

      //Work Experience
      company: '',
      title: '',
      tasks: '',
      dateFrom: new Date().toLocaleDateString('en-US'),
      dateUntil: new Date().toLocaleDateString('en-US'),


      isFormSubmit: false,
      //buttonText: 'Submit'
    }
  }

  handleInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      isFormSubmit: true,
    });
  }

  handleEdit = (e) => {
    this.setState({
      isFormSubmit: false,
    })
  }

  render() {
    if(!this.state.isFormSubmit) {
      return (
        <div className="App">
          <Header/>
          <form onSubmit={this.handleSubmit}>
            
            <Personal
              onChange = {this.handleInput}
              info = {this.state}
            />
            
            <Education
              onChange = {this.handleInput}
              info = {this.state}
            />

            <Work
              onChange = {this.handleInput}
              info = {this.state}
            />

            <button type="submit" onClick={this.handleSubmit}>Submit</button>
          </form>
        </div>
      );
    } else {
      return (
        <Overview
        handleEdit={this.handleEdit}
        info={this.state}/>
      )
    }
  }
}

export default App;
