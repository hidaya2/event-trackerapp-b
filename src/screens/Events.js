// import { useContext, useEffect } from "react"; 
import { Table } from "react-bootstrap";
// import { EventsContext } from "../contexts/EventsContext";
import { FiEdit, FiDelete, FiEye } from "react-icons/fi";
import { CircleSpinner } from "react-spinners-kit";
import useEvents from "../hooks/useEvents";

function Events() {
  const { loading, events, error } = useEvents("https://event-tracker-b.herokuapp.com/api/v2/event");

  return (
    <section>
      {loading && <CircleSpinner size={30} color="#686769" />}
      {error && <h1>OOPS !!! error occured</h1>}
      {events ? (
        <Table className="table-hover table-striped">
          <thead>
            <tr>
              <th>EVENT</th>
              <th>LOCATION</th>
              <th>DAY</th>
              <th>NOTE</th>
              <th>EDIT</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event._id}>
                <td>{event.event}</td>
                <td>{event.location}</td>
                <td>{event.day}</td>
                <td>{event.note}</td>
                <td>
                  <FiDelete />
                  <FiEdit />
                  <FiEye />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        !loading && <h1>NO RECORDS</h1>
      )}
    </section>
  );
}

export default Events;
