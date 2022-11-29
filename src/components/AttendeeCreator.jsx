import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export function AttendeeCreator() {
  return (
    <div className="creator">
      <div className="creator__tittle">
        <h2>Create Attendee</h2>
      </div>
      <div className="creator__form">
        <Form.Control type="text" placeholder="First Name" />
        <Form.Control type="text" placeholder="Last Name" />
        <Form.Control type="number" placeholder="Age" />
        <Form.Control type="email" placeholder="Email" />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </div>
  );
}
