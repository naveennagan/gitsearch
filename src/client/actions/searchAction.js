import request from 'superagent';

export function searchGithub(topic, dispatch) {
  console.log("Params are ", topic);
  let options = {
    url: `/api/github/search?topic=${topic}`,
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
          type: "PROJECTS_SEARCH_FAILURE",
          result: []
        }
        dispatch(action)
      } else {
        var action = {
          type: "PROJECTS_SEARCH_SUCCESS",
          result: res.body["results"]
        }
        dispatch(action);
      }
    })

}
