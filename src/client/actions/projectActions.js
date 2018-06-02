import request from 'superagent';

export function importProject(project, dispatch) {
  let options = {
    url: `/api/project`,
    type: "POST",
    data: project
  };
  let action = {
    type: "IMPORTING_PROJECTS"
  }
  dispatch(action);
  request
    .post(options.url)
    .send(options.data)
    .retry(4)
    .end((err, res) => {
      if (err) {
        let action = {
          type: "PROJECT_IMPORT_FAILURE",
          result: []
        }
        dispatch(action)
      } else {
        var action = {
          type: "PROJECT_IMPORT_SUCCESS",
          result: res.body["results"]
        }
        dispatch(action);
      }
    })
}

export function getProjects(dispatch) {
  let options = {
    url: `/api/projects`,
    type: "GET"
  };
  let action = {
    type: "FETCHING_PROJECTS"
  }
  dispatch(action);
  request
    .get(options.url)
    .retry(4)
    .end((err, res) => {
      if (err) {
        let action = {
          type: "PROJECT_FETCH_FAILURE",
          result: []
        }
        dispatch(action)
      } else {
        var action = {
          type: "PROJECT_FETCH_SUCCESS",
          result: res.body["results"]
        }
        dispatch(action);
      }
    })
}

