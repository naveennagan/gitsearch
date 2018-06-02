import { combineReducers } from 'redux';
import home from './home';
import projects from './projects';


const rootReducer = combineReducers({
  home,
  projects
});

export default rootReducer;


