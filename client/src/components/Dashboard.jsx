import React, { useState } from "react";
import { Header } from "./Header";
import { AttendeeCreator } from "./AttendeeCreator";
import { AttendeeList } from "./AttendeeList";
import { NoAttendees } from "./NoAttendees";
import { useEffect } from "react";
import uuid from "react-uuid";

export function Dashboard() {
  const [attendees, setAttendees] = useState([]);
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

  useEffect(() => {
    const fetchAttendees = async () => {
      const response = await fetch("http://localhost:3005/attendees");
      const attendees = await response.json();
      setAttendees([...attendees]);
    };
    fetchAttendees();
  }, []);

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
      {attendees.length > 0 ? (
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
      ) : (
        <NoAttendees />
      )}
    </>
  );
}
