import { connect } from 'react-redux';
import Home from '../components/Home.jsx';
import { searchGithub } from '../actions/searchAction';

// two functions need to be implemented here
// mapStateToProps
// mapDispatchToProps

const mapStateToProps = (state) => {
  return {
    name: state.home.name,
    projects: state.projects
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    componentMounting: () => {
      let mountingAction = {
        type: "MOUNTING"
      }
      dispatch(mountingAction);
    },
    componentMounted: () => {
      let mountedAction = {
        type: "MOUNTED"
      }
      dispatch(mountedAction);
    },
    searchProjects: (topic) => {
      searchGithub(topic, dispatch);
    }
  }
}

const HomeView = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeView;
