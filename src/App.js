import React, { Component } from "react";
import Header from "./components/Header";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Work from "./components/Work";
import Overview from "./components/Overview";
import "./App.css"

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
      dateEnd: new Date().toLocaleDateString('en-AU'),

      //Work Experience
      company: '',
      title: '',
      tasks: '',
      dateFrom: new Date().toLocaleDateString('en-AU'),
      dateUntil: new Date().toLocaleDateString('en-AU'),


      isFormSubmit: false,
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
        <div>
          <Header/>
          <div className="App">
            
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
        </div>
      );
    } else {
      return (
        <div>
          <Header/>
          <div className="cv">
            <Overview
            handleEdit={this.handleEdit}
            info={this.state}
            />
          </div>
        </div>
      )
    }
  }
}

export default App;
