import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export function AttendeeCreator() {
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
        />
        <Form.Control
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
        />
        <Form.Control type="number" name="age" placeholder="Age" required />
        <Form.Control type="email" name="email" placeholder="Email" required />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
