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
      <form className="creator__form">
        <Form.Control
          type="text"
          name="firstName"
          placeholder="First Name"
          required
          value={props.attendee.firstName}
          onChange={(e) => props.handleInputChange(e)}
        />
        <Form.Control
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
          value={props.attendee.lastName}
          onChange={(e) => props.handleInputChange(e)}
        />
        <Form.Control
          type="number"
          name="age"
          placeholder="Age"
          required
          value={props.attendee.age}
          onChange={(e) => props.handleInputChange(e)}
        />
        <Form.Control
          type="email"
          name="email"
          placeholder="Email"
          required
          value={props.attendee.email}
          onChange={(e) => props.handleInputChange(e)}
        />
        <Button
          variant="primary"
          type="submit"
          onClick={props.handleSubmitBtn}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
