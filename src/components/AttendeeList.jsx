import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import uuid from "react-uuid";

const guests = [
  {
    id: uuid(),
    firstName: "Vilius",
    lastName: "Garba",
    age: 28,
    email: "vilius.garba@gmail.com",
  },
  {
    id: uuid(),
    firstName: "Neda",
    lastName: "Pukytė",
    age: 26,
    email: "neda.pukyte@gmail.com",
  },
  {
    id: uuid(),
    firstName: "Lars",
    lastName: "Ulrich",
    age: 666,
    email: "lars@gmail.com",
  },
];

export function AttendeeList() {
  const [attendees, setAttendees] = useState(guests);

  const handleOnDelete = (attendeeID) => {
    const filteredAtendees = attendees.filter(
      (attendee) => attendee.id !== attendeeID
    );
    setAttendees(filteredAtendees);
  };

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
          {attendees.map((attendee, i) => {
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
                    onClick={() => handleOnDelete(attendee.id)}
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
