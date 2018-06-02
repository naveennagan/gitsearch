import { combineReducers } from 'redux';
import home from './home';
import projects from './projects';
import importedprojects from './importedprojects';


const rootReducer = combineReducers({
  home,
  projects,
  importedprojects
});

export default rootReducer;


