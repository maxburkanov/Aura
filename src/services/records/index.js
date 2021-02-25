import { data } from "../../components/Record/data";
import {mockFetch} from "../../util/mockFetch/index"

// action types
const FETCH_RECORDS = "FETCH_RECORDS";
const FETCH_PENDING = "FETCH_PENDING";
const FAILED_FETCH = "FAILED_FETCH";


//initial state
const initState = {
  myData: [],
  failed: false,
  loading: false
}

// reducer
export const records = (state = initState, action) => {
  switch(action.type) {
  
    case FETCH_PENDING: 
      return {...state, loading: true};
  
    case FETCH_RECORDS:
      return { myData: action.payload, loading: false, failed: false};
  
    case FAILED_FETCH: 
      return {myData: action.payload, failed: true, loading: false}
  
    default: 
      return state;
  }
}


// pure actions
const fetchSucces = (data) => {
  return { type: FETCH_RECORDS, payload: data }
}

const fetchError = (err) => {
  return { type: FAILED_FETCH, payload: err }
}

const fetchPending = () => {
  return { type: FETCH_PENDING }
}


export const fetchRecords = () => (dispatch) => {
  dispatch(fetchPending());

  (mockFetch())()
    .then(data => dispatch(fetchSucces(data)))
    .catch(err => dispatch(fetchError(err)))
}


