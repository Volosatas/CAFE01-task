import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const attendees = [
  {
    id: 1,
    firstName: "Vilius",
    lastName: "Garba",
    age: 28,
    email: "vilius.garba@gmail.com",
  },
  {
    id: 2,
    firstName: "Neda",
    lastName: "Pukytė",
    age: 26,
    email: "neda.pukyte@gmail.com",
  },
  {
    id: 3,
    firstName: "Lars",
    lastName: "Ulrich",
    age: 666,
    email: "lars@gmail.com",
  },
];

export function AttendeeList() {
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
              <tr>
                <td>{i + 1}.</td>
                <td>
                  {attendee.firstName} {attendee.lastName}
                </td>
                <td>{attendee.age}</td>
                <td>{attendee.email}</td>
                <td>
                  <Button variant="primary">Edit</Button>
                  <Button variant="danger">Del</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
