import React, { useState } from "react";
import Table from "react-bootstrap/Table";
// import Button from "react-bootstrap/Button";
import { AttendeeRowStatic } from "./AttendeeRowStatic";
import { AttendeeRowEditable } from "./AttendeeRowEditable";
// import uuid from "react-uuid";

export function AttendeeList(props) {
  return (
    <div className="attendeesList">
      <h4 className="attendeesList__title">Event Guest List</h4>
      <form action="">
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
                    <AttendeeRowEditable />
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
