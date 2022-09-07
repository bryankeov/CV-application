import React from "react";

const Education = (props) => {
  return (
    <div>
      <h3>Education</h3>
      <label>
        School:
        <input 
          id="school" 
          type="text" 
          info={props.info.school}
          placeholder={props.info.school}
          onChange={props.onChange}
        />
      </label>
      <br/>
      <label>
        Certificate:
        <input 
          id="certificate" 
          type="text"
          info={props.info.certificate}
          placeholder={props.info.certificate}
          onChange={props.onChange}
        />
      </label>
      <br/>
      <label>
        Date Completed:
        <input 
          id="dateEnd" 
          type="text"
          info={props.info.dateEnd}
          placeholder={props.info.dateEnd}
          onChange={props.onChange}
        />
      </label>
    </div>
  )
}

export default Education;