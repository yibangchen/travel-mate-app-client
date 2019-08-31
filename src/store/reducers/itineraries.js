import { ADD_TRIP, REMOVE_TRIP, LOAD_TRIPS } from '../actionTypes';

const itineraries = (state=[], action) => {
  switch (action.type) {
    case LOAD_TRIPS:
      return [...action.itineraries];
    case ADD_TRIP:
      return [...state, action.itinerary];
    case REMOVE_TRIP:
      return state.filter(trip => trip.id !== action.tripId);
    default:
      return state;
  }
}

export default itineraries;