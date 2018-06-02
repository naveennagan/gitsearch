// Reducers are nothing but just pure functions

export default (state = {}, action = { type: "" }) => {
  switch (action.type) {
    case 'FETCHING_PROJECTS': {
      return { data: state.data || [], message: "FETCHING PROJECTS !" }
    }
    case 'PROJECT_FETCH_FAILURE': {
      return { data: state.data || [], message: "Error , Sorry it's not you it's us  :( !" }
    }
    case 'PROJECT_FETCH_SUCCESS': {
      var data = action.result;
      return { data: data, message: "All Projects ! " }
    }
    case 'IMPORTING_PROJECTS':
      return { data: state.data || [], message: `Currently a project import in progress please wait ! ` }
    case 'PROJECT_IMPORT_FAILURE':
      return { data: state.data || [], message: "Error , Sorry it's not you it's us  :( !" }
    case 'PROJECT_IMPORT_SUCCESS': {
      var data = action.result;
      var newProjectsData = (state.data || []).concat(data);
      return { data: newProjectsData, message: " Project Import Done ! " }
    }
    default:
      return state
  }
}