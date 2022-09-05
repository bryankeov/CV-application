import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <form>
          <h3>Details</h3>
          <label htmlFor="taskInput">Name</label>
          <input type="text" className="userInput"></input>
          <label htmlFor="taskInput">Email</label>
          <input type="text" className="userInput"></input>
          <label htmlFor="taskInput">Phone Number</label>
          <input type="text" className="userInput"></input>
          
          <h3>Education</h3>
          <label htmlFor="taskInput">School Name</label>
          <input type="text" className="userInput"></input>
          <label htmlFor="taskInput">Certificate</label>
          <input type="text" className="userInput"></input>
          <label htmlFor="taskInput">Date of study</label>
          <input type="text" className="userInput"></input>

          <h3>Work Experience</h3>
          <label htmlFor="taskInput">Company name</label>
          <input type="text" className="userInput"></input>
          <label htmlFor="taskInput">Position</label>
          <input type="text" className="userInput"></input>
          <label htmlFor="taskInput">Title</label>
          <input type="text" className="userInput"></input>
          <label htmlFor="taskInput">Main tasks</label>
          <input type="text" className="userInput"></input>
          <label htmlFor="taskInput">date worked</label>
          <input type="text" className="userInput"></input>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
