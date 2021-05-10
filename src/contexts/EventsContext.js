import { createContext, useReducer } from "react";
import eventsReducer from "../reducers/eventsReducer";
import axios from "axios";

const initialState = {
  loading: true,
  events: [],
  error: null,
};

export const EventsContext = createContext();

const EventsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(eventsReducer, initialState);
  // get all events
  async function getEvents() {
    const res = await axios.get(
      "https://event-tracker-b.herokuapp.com/api/v2/event"
    );
    try {
      dispatch({
        type: "GET_ALL_EVENTS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <EventsContext.Provider
      value={{ getEvents, events: state.events, loading: state.loading }}
    >
      {children}
    </EventsContext.Provider>
  );
};

export default EventsContextProvider;
