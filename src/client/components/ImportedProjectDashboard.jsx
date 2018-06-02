import React, { Component, Fragment } from 'react';
import Project from './Project';
var projects = [
  { name: "Project 1" },
  { name: "Project 2" }
];

class ImportedProjectDashboardComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'VsGoldenAvenues'
    }
  }

  getProjectSection = () => {
    return <section class="row text-center placeholders">
      {
        (this.props.projects["data"] || []).map((project) => {
          return <Project imported={true} importproject={this.props.onimport} project={project}></Project>
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
        <h1>Imported Projects - TopicPack {this.props.projects["message"]}</h1>
        {this.getProjectSection()}
      </main>
    )
  }
}

export default ImportedProjectDashboardComponent;