import Table from "react-bootstrap/Table";
import { AttendeeRowStatic } from "./AttendeeRowStatic";
import { AttendeeRowEditable } from "./AttendeeRowEditable";

export function AttendeeList(props) {
  return (
    <div className="attendeesList">
      <h4 className="attendeesList__title">Event Guest List</h4>
      <form onSubmit={(e) => props.handleEditSubmit(e)}>
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
                <>
                  {props.editedAttendee === attendee.id ? (
                    <AttendeeRowEditable
                      editFormData={props.editFormData}
                      handleEditInputChange={props.handleEditInputChange}
                    />
                  ) : (
                    <AttendeeRowStatic
                      key={attendee.id}
                      attendee={attendee}
                      i={i}
                      handleDeleteBtn={props.handleDeleteBtn}
                      handleEditBtn={props.handleEditBtn}
                    />
                  )}
                </>
              );
            })}
          </tbody>
        </Table>
      </form>
    </div>
  );
}
