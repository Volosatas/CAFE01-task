import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export function AttendeeList(props) {
  return (
    <div className="attendeesList">
      <h4 className="attendeesList__title">Event Guest List</h4>
      <Table className="attendeesList__table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.attendees.map((attendee, i) => {
            return (
              <tr key={attendee.id}>
                <td>{i + 1}.</td>
                <td>
                  {attendee.firstName} {attendee.lastName}
                </td>
                <td>{attendee.age}</td>
                <td>{attendee.email}</td>
                <td>
                  <Button variant="primary">Edit</Button>
                  <Button
                    variant="danger"
                    onClick={() => props.handleDeleteBtn(attendee.id)}
                  >
                    Del
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
