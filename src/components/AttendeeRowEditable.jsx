import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export function AttendeeRowEditable(props) {
  return (
    <tr>
      <td></td>
      <td>
        <Form.Control
          type="text"
          name="firstName"
          required
          value={props.editFormData.firstName}
          onChange={(e) => props.handleEditInputChange(e)}
        />
        <Form.Control
          type="text"
          name="lastName"
          required
          value={props.editFormData.lastName}
          onChange={(e) => props.handleEditInputChange(e)}
        />
      </td>
      <td>
        <Form.Control
          type="number"
          name="age"
          required
          value={props.editFormData.age}
          onChange={(e) => props.handleEditInputChange(e)}
        />
      </td>
      <td>
        <Form.Control
          type="text"
          name="email"
          required
          value={props.editFormData.email}
          onChange={(e) => props.handleEditInputChange(e)}
        />
      </td>
      <td>
        <Button type="submit" variant="warning">
          Save
        </Button>
        <Button variant="danger" onClick={props.handleCancelBtn}>
          Cancel
        </Button>
      </td>
    </tr>
  );
}
