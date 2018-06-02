import React, { Component, Fragment } from 'react';

import ProjectDashboardComponent from './ProjectDashboard.jsx';

class NavigationComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'VsGoldenAvenues'
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

  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <nav class="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
            <ul class="nav nav-pills flex-column">
              <li class="nav-item">
                <a class="nav-link active" onClick={this.changeComponent}>Overview <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={this.changeComponent}>Reports</a>
              </li>
            </ul>
          </nav>
          <ProjectDashboardComponent projects={this.props.projects} />
        </div>
      </div>
    )
  }
}

export default NavigationComponent;