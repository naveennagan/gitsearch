// Reducers are nothing but just pure functions

export default (state = {}, action = { type: "" }) => {
  switch (action.type) {
    case 'FETCHING_PROJECTS':
      return { data: [], message: "" }
    case 'PROJECTS_SEARCH_FAILURE':
      return { data: [], message: "Error , Sorry it's not you it's us  :( !" }
    case 'PROJECTS_SEARCH_SUCCESS': {
      var data = action.result;
      return { data: data, message: "Done ! " }
    }
    default:
      return state
  }
}