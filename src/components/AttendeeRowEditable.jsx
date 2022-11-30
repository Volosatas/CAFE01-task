import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export function AttendeeRowEditable() {
  return (
      <tr>
        <td></td>
        <td>
          <Form.Control
            type="text"
            name="firstName"
            placeholder="Edit name"
            required
          />
          <Form.Control
            type="text"
            name="lastName"
            placeholder="Edit last name"
            required
          />
        </td>
        <td>
          <Form.Control
            type="number"
            name="age"
            placeholder="Edit age"
            required
          />
        </td>
        <td>
          <Form.Control
            type="text"
            name="email"
            placeholder="Edit email"
            required
          />
        </td>
        <td>
          <Button variant="warning">Save</Button>
          <Button variant="danger">Cancel</Button>
        </td>
      </tr>
  );
}
