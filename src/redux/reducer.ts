

const initialState = {
  currentSearch: [],
  results:[[],[],[]],
  searches: [],
  user: {},
};

const GET_USER_INFO = 'GET_USER_INFO';
const RUN_SEARCH = 'RUN_SEARCH';
const SAVE_SEARCH = 'SAVE_SEARCH';
const UPDATE_SEARCH = 'UPDATE_SEARCH';
const GET_SEARCHES = 'GET_SEARCHES';
const GET_SEARCH = 'GET_SEARCH';
const DELETE_SEARCH = 'DELETE_SEARCH';
const UPDATE_CURRENT_SEARCH = 'UPDATE_CURRENT_SEARCH';

// export function getUserInfo() {
//   const userInfo = axios.get('/api/userData').then( res => {
//     return res.data;
//   });
//   return {
//     type: GET_USER_INFO,
//     payload: userInfo
//   };
// }

// export function saveSearch( search ){
//   const saved = axios.post('/api/saveSearch', search).then( res => {
//     return res.data;
//   });
//   return {
//     type: SAVE_SEARCH,
//     payload: saved
//   };
// }

// export function updateSearch( search ){
//   const saved = axios.put('/api/updateSearch', search).then( res => {
//     return res.data;
//   });
//   return {
//     type: UPDATE_SEARCH,
//     payload: saved
//   };
// }

// export function getSearches( user_id ){
//   const saved = axios.post('/api/getSearches', user_id).then( res => {
//     return res.data;
//   });
//   return {
//     type: GET_SEARCHES,
//     payload: saved
//   };
// }

// export function getSearch( search_id ){
//   const saved = axios.post('/api/getSearch', search_id).then( res => {
//     return res.data;
//   });
//   return {
//     type: GET_SEARCH,
//     payload: saved
//   };
// }

// export function deleteSearch( search_id ){
//   const saved = axios.delete('/api/deleteSearch', {data: search_id}).then( res => {
//     return res.data;
//   });
//   return {
//     type: DELETE_SEARCH,
//     payload: saved
//   };
// }

// export function runSearch(current) {
//   const data = axios.put('/search', current); // This needs to have current search passed as a prop to the component and then passed in as current
//   return {
//     type: RUN_SEARCH,
//     payload: data
//   };
// }

// export function currentSearchUpdater(current){
//   return {
//     type: UPDATE_CURRENT_SEARCH,
//     payload: [current]
//   };
// }

export const reducer = ( state = initialState, action: any ) => {
  switch ( action.type ) {
    case GET_USER_INFO + "_FULFILLED":
      return {...state, user: action.payload};
    case SAVE_SEARCH + "_FULFILLED":
      return {...state, currentSearch: action.payload};
    case UPDATE_SEARCH + "_FULFILLED":
      return {...state, searches: action.payload, currentSearch: []};
    case GET_SEARCHES + "_FULFILLED":
      return {...state, searches: action.payload};
    case DELETE_SEARCH + "_FULFILLED":
      return {...state, searches: action.payload};
    case GET_SEARCH + "_FULFILLED":
      return {...state, currentSearch: action.payload};
    case RUN_SEARCH + "_FULFILLED":
      return {...state, results: action.payload};
    case UPDATE_CURRENT_SEARCH:
      return {...state, currentSearch: action.payload};
    default:
      return state;
  }
};
