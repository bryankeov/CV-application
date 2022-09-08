import React, { useState } from "react";
import Header from "./components/Header";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Work from "./components/Work";
import Overview from "./components/Overview";
import "./App.css"

const App = () => {
  const [info, setInfo] = useState({
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
  });

  const handleInput = (e) => {
    setInfo({...info,
      [e.target.id]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setInfo({...info,
      isFormSubmit: true,
    });
  }

  const handleEdit = (e) => {
    setInfo({...info,
      isFormSubmit: false,
    });
  }

  if(!info.isFormSubmit) {
    return (
      <div>
        <Header/>
        <div className="App">
          
          <form onSubmit={handleSubmit}>
            
            <Personal
              onChange = {handleInput}
              info = {info}
            />
            
            <Education
              onChange = {handleInput}
              info = {info}
            />

            <Work
              onChange = {handleInput}
              info = {info}
            />

            <button type="submit" onClick={handleSubmit}>Submit</button>
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
          handleEdit={handleEdit}
          info={info}
          />
        </div>
      </div>
    )
  }
}

export default App;
