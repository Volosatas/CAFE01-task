import Table from "react-bootstrap/Table";
// import Button from "react-bootstrap/Button";
import { AttendeeRowStatic } from "./AttendeeRowStatic";

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
              <AttendeeRowStatic
                key={attendee.id}
                attendee={attendee}
                i={i}
                handleDeleteBtn={props.handleDeleteBtn}
              />
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
