import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export function AttendeeCreator(props) {
  return (
    <div className="creator">
      <h2 className="creator__title">Add Attendee</h2>
      <form className="creator__form" onSubmit={props.handleCreateFormSubmit}>
        <Form.Control
          className="creator__form--input"
          type="text"
          name="firstName"
          placeholder="First Name"
          required
          value={props.newAttendee.firstName}
          onChange={(e) => props.handleCreateFormInputChange(e)}
        />
        <Form.Control
          className="creator__form--input"
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
          value={props.newAttendee.lastName}
          onChange={(e) => props.handleCreateFormInputChange(e)}
        />
        <Form.Control
          className="creator__form--input"
          type="number"
          name="age"
          placeholder="Age"
          required
          value={props.newAttendee.age}
          onChange={(e) => props.handleCreateFormInputChange(e)}
        />
        <Form.Control
          className="creator__form--input"
          type="email"
          name="email"
          placeholder="Email"
          required
          value={props.newAttendee.email}
          onChange={(e) => props.handleCreateFormInputChange(e)}
        />
        <Button
          className="creator__form--button"
          variant="primary"
          type="submit"
        >
          Add
        </Button>
      </form>
    </div>
  );
}
