import React, { useState } from "react";
import { Header } from "./Header";
import { AttendeeCreator } from "./AttendeeCreator";
import { AttendeeList } from "./AttendeeList";
import uuid from "react-uuid";

export function Dashboard() {
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
    {
      id: 1,
      firstName: "sudoku",
      lastName: "pie",
      age: 78,
      email: "myman@hotline.com",
    },
  ];

  const [attendees, setAttendees] = useState(guests);
  const [attendee, setAttendee] = useState({
    id: uuid(),
    firstName: "",
    lastName: "",
    age: "",
    email: "",
  });
  const [editedAttendee, setEditedAttendee] = useState(null);

  const handleEditBtn = (editedAttendeeID) => {
    setEditedAttendee(editedAttendeeID);
  };

  const handleDeleteBtn = (attendeeID) => {
    const filteredAttendees = attendees.filter(
      (attendee) => attendee.id !== attendeeID
    );
    setAttendees(filteredAttendees);
  };

  const handleInputChange = (e) => {
    const inputID = e.target.name;
    const inputValue = e.target.value;

    setAttendee({ ...attendee, [inputID]: inputValue });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setAttendees([...attendees, attendee]);
    setAttendee({
      id: uuid(),
      firstName: "",
      lastName: "",
      age: "",
      email: "",
    });
  };

  return (
    <>
      <Header />
      <AttendeeCreator
        attendee={attendee}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />
      <AttendeeList
        attendees={attendees}
        handleDeleteBtn={handleDeleteBtn}
        editedAttendee={editedAttendee}
        handleEditBtn={handleEditBtn}
      />
    </>
  );
}
