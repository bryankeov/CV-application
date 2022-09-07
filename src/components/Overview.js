import React from "react";

const Overview = (props) => {
  return (
    <div>
      <section>
        <h4>Personal Information</h4>
        <p>Name: {props.info.name}</p>
        <p>Email: {props.info.email}</p>
        <p>Phone: {props.info.phone}</p>
      </section>
      <section>
        <h4>Education</h4>
        <p>School: {props.info.school}</p>
        <p>Certificate: {props.info.certificate}</p>
        <p>Date Complete: {props.info.dateEnd}</p>
      </section>
      <section>
        <h4>Work</h4>
        <p>Company: {props.info.company}</p>
        <p>Title: {props.info.title}</p>
        <p>Tasks: {props.info.tasks}</p>
        <p>Duration: {props.info.dateFrom} to {props.info.dateUntil}</p>
      </section>
      <button id="editButton" onClick={props.handleEdit}>Edit</button>
    </div>
  )
}

export default Overview;