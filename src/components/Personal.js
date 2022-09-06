import React from "react";

const Personal = (props) => {
  return (
    <div>
      <h3>Personal Information</h3>
      <label>
        Name:
        <input 
          id="name" 
          type="text"
          info={props.info.name}
          onChange={props.onChange}
        />
      </label>
      <br/>
      <label>
        Email:
        <input 
          id="email" 
          type="text"
          info={props.info.email}
          onChange={props.onChange}
        />
      </label>
      <br/>
      <label>
        Phone:
        <input 
          id="phone" 
          type="text"
          info={props.info.phone}
          onChange={props.onChange}
        />
      </label>
    </div>
  )
}

export default Personal;