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

  const handleDeleteBtn = (attendeeID) => {
    const filteredAttendees = attendees.filter(
      (attendee) => attendee.id !== attendeeID
    );
    setAttendees(filteredAttendees);
  };

  const onInputChange = (firstName, lastName, age, email) => {
    console.log(attendee);
    setAttendee({
      id: uuid(),
      firstName: firstName,
      lastName: lastName,
      age: age,
      email: email,
    });
  };

  return (
    <>
      <Header />
      <AttendeeCreator attendee={attendee} onInputChange={onInputChange} />
      <AttendeeList attendees={attendees} handleDeleteBtn={handleDeleteBtn} />
    </>
  );
}
