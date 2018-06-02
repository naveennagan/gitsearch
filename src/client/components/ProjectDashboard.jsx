import React, { Component, Fragment } from 'react';
import Project from './Project';
var projects = [
  { name: "Project 1" },
  { name: "Project 2" }
];

class ProjectDashboardComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'VsGoldenAvenues'
    }
  }

  getProjectSection = () => {
    return <section class="row text-center placeholders">
      {
        projects.map((project) => {
          return <Project project={project}></Project>
        })
      }
    </section>
  }

  componentWillMount() {
    console.log("Component about to Mount ! ");
    //this.props.componentMounting();
  }

  componentDidMount() {
    console.log("Component Mounted ! ");
    //this.props.componentMounted();
  }

  render() {
    return (
      <main class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
        <h1>TopicPack</h1>
        {this.getProjectSection()}
      </main>
    )
  }
}

export default ProjectDashboardComponent;