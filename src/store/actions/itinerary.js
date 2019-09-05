import { setTokenHeader, apiCall } from '../../services/api';
import { addError, removeError } from './errors';
import { ADD_TRIP, REMOVE_TRIP, LOAD_TRIPS } from '../actionTypes';

export const loadItineraries = itineraries => ({
  type: LOAD_TRIPS,
  itineraries
});

export const addNewItinerary = itinerary => ({
  type: ADD_TRIP,
  itinerary
});

export const removeItinerary = (tripId) => {

}

export const fetchItineraries = () => {
  const itineraries = [{      
      destination: 'London',
      arrive: '9/1/2019',
      depart: '9/3/2019'
    }, {
      destination: 'Paris',
      arrive: '9/4/2019',
      depart: '9/7/2019'
    }, {
      destination: 'Dubai',
      arrive: '9/8/2019',
      depart: '9/9/2019'
    }, {
      destination: 'Bangkok',
      arrive: '9/10/2019',
      depart: '9/13/2019'
    }, {
      destination: 'Singapore',
      arrive: '9/15/2019',
      depart: '9/17/2019'
    }, {
      destination: 'Hanoi',
      arrive: '9/18/2019',
      depart: '9/21/2019'
    }, {
      destination: 'Shanghai',
      arrive: '9/22/2019',
      depart: '9/25/2019'
    }, {
      destination: 'Tokyo',
      arrive: '9/26/2019',
      depart: '9/29/2019'
    }];

  return dispatch => {
    dispatch( loadItineraries(itineraries) );
  }
}

/*
export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  }
}

export function setAuthorizationToken(token) {
  setTokenHeader(token);
}

export function logout() {
  return dispatch => {
    localStorage.clear();
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}
*/