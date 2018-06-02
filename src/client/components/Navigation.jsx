import React, { Component, Fragment } from 'react';

import ProjectDashboardComponent from './ProjectDashboard.jsx';

import ImportedProjectDashboardComponent from './ImportedProjectDashboard.jsx';

class NavigationComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'VsGoldenAvenues',
      currentComponent: "projects"
    }
  }

  componentWillMount() {
    console.log("Component about to Mount ! ");
    //this.props.componentMounting();
  }

  componentDidMount() {
    console.log("Component Mounted ! ");
    //this.props.componentMounted();
  }

  overview = (component) => {
    console.log("Component Changed ! ");
  }

  changeComponent = (componentName) => {
    return () => {
      this.setState({ currentComponent: componentName })
    }
  }

  getComponent = () => {
    switch (this.state.currentComponent) {
      case 'projects': {
        return (<ProjectDashboardComponent onimport={this.props.onimport}
          importedprojects={this.props.importedprojects}
          projects={this.props.projects} />)
      }
      case 'importedprojects': {
        return (<ImportedProjectDashboardComponent onimport={this.props.onimport}
          importedprojects={this.props.importedprojects}
          projects={this.props.importedprojects} />)
      }
      default: {
        return (<ImportedProjectDashboardComponent onimport={this.props.onimport}
          projects={this.props.importedprojects} />)
      }
    }
  }

  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <nav class="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
            <ul class="nav nav-pills flex-column">
              <li class="nav-item">
                <a class="nav-link" onClick={this.changeComponent('projects')}>
                  Overview <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={this.changeComponent('importedprojects')}>Imports</a>
              </li>
            </ul>
          </nav>
          {this.getComponent()}
        </div>
      </div>
    )
  }
}

export default NavigationComponent;