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
  const [newAttendee, setNewAttendee] = useState({
    id: uuid(),
    firstName: "",
    lastName: "",
    age: "",
    email: "",
  });
  const [editedAttendee, setEditedAttendee] = useState(null);
  const [editFormData, setEditFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    age: "",
    email: "",
  });

  const handleCreateInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setNewAttendee({ ...newAttendee, [inputName]: inputValue });
  };

  const handleCreateFormSubmit = (e) => {
    e.preventDefault();
    setAttendees([...attendees, newAttendee]);
    setNewAttendee({
      id: uuid(),
      firstName: "",
      lastName: "",
      age: "",
      email: "",
    });
  };

  const handleEditBtn = (editedAttendee) => {
    setEditedAttendee(editedAttendee.id);
    setEditFormData({ ...editedAttendee });
  };

  const handleEditInputChange = (e) => {
    const editInputName = e.target.name;
    const editInputValue = e.target.value;

    setEditFormData({ ...editFormData, [editInputName]: editInputValue });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    const newAttendees = [...attendees];
    const index = attendees.findIndex(
      (attendee) => attendee.id === editFormData.id
    );

    newAttendees[index] = { ...editFormData };

    setAttendees(newAttendees);
    setEditedAttendee(null);
  };

  const handleDeleteBtn = (attendeeId) => {
    const filteredAttendees = attendees.filter(
      (attendee) => attendee.id !== attendeeId
    );
    setAttendees(filteredAttendees);
  };
  const handleCancelBtn = () => {
    setEditedAttendee(null);
  };

  return (
    <>
      <Header />
      <AttendeeCreator
        newAttendee={newAttendee}
        handleCreateInputChange={handleCreateInputChange}
        handleCreateFormSubmit={handleCreateFormSubmit}
      />
      <AttendeeList
        attendees={attendees}
        editedAttendee={editedAttendee}
        editFormData={editFormData}
        handleDeleteBtn={handleDeleteBtn}
        handleCancelBtn={handleCancelBtn}
        handleEditBtn={handleEditBtn}
        handleEditInputChange={handleEditInputChange}
        handleEditSubmit={handleEditSubmit}
      />
    </>
  );
}
