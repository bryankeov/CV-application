import React from "react";

const Work = (props) => {
  return (
    <div>
      <h3>Work Experience</h3>
      <label>
        Company:
        <input 
          id="company" 
          type="text"
          info={props.info.company}
          placeholder={props.info.company}
          onChange={props.onChange}
        />
      </label>
      <br/>
      <label>
        Title:
        <input 
          id="title" 
          type="text"
          info={props.info.title}
          placeholder={props.info.title}
          onChange={props.onChange}
        />
      </label>
      <br/>
      <label>
        Tasks:
        <input 
          id="tasks" 
          type="text"
          info={props.info.tasks}
          placeholder={props.info.tasks}
          onChange={props.onChange}
        />
      </label>
      <br/>
      <label>
        Duration:
        <input 
          id="dateFrom" 
          type="text"
          info={props.info.dateFrom}
          placeholder={props.info.dateFrom}
          onChange={props.onChange}
          />-
        <input 
          id="dateUntil" 
          type="text"
          info={props.info.dateUntil}
          placeholder={props.info.dateUntil}
          onChange={props.onChange}
          />
      </label>
    </div>
  )
}

export default Work;