// import { useState } from "react";
// import { useCallback } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import uuid from "react-uuid";

export function AttendeeCreator(props) {
  return (
    <div className="creator">
      <div className="creator__tittle">
        <h2>Create Attendee</h2>
      </div>
      <form className="creator__form" onSubmit={props.handleCreateFormSubmit}>
        <Form.Control
          type="text"
          name="firstName"
          placeholder="First Name"
          required
          value={props.newAttendee.firstName}
          onChange={(e) => props.handleInputChange(e)}
        />
        <Form.Control
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
          value={props.newAttendee.lastName}
          onChange={(e) => props.handleInputChange(e)}
        />
        <Form.Control
          type="number"
          name="age"
          placeholder="Age"
          required
          value={props.newAttendee.age}
          onChange={(e) => props.handleInputChange(e)}
        />
        <Form.Control
          type="email"
          name="email"
          placeholder="Email"
          required
          value={props.newAttendee.email}
          onChange={(e) => props.handleInputChange(e)}
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
