import Table from "react-bootstrap/Table";
import { AttendeeRowStatic } from "./AttendeeRowStatic";
import { AttendeeRowEditable } from "./AttendeeRowEditable";
import { Fragment } from "react";

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
                <Fragment key={attendee.id}>
                  {props.editedAttendee === attendee.id ? (
                    <AttendeeRowEditable
                      editFormData={props.editFormData}
                      handleEditInputChange={props.handleEditInputChange}
                      handleCancelBtn={props.handleCancelBtn}
                    />
                  ) : (
                    <AttendeeRowStatic
                      attendee={attendee}
                      i={i}
                      handleDeleteBtn={props.handleDeleteBtn}
                      handleEditBtn={props.handleEditBtn}
                    />
                  )}
                </Fragment>
              );
            })}
          </tbody>
        </Table>
      </form>
    </div>
  );
}
