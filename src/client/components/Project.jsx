import React, { Component } from 'react';

class ProjectComponent extends Component {

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
    this.setState({
      project: this.props.project,
      importProject: this.props.importProject
    })
    console.log("Component Mounted ! ");
    //this.props.componentMounted();
  }

  importProject = (proj, cb) => {
    return () => {
      cb(proj);
    }
  }

  render() {
    return (
      <div class="col-6 col-sm-3 placeholder">
        <img src="data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs="
          width="200" height="200" class="img-fluid rounded-circle"
          alt="Generic placeholder thumbnail" />
        <h4>{this.props.project["full_name"]}</h4>
        {
          this.props.imported ? <div>You Have it !</div> :
            <div class="btn btn-outline-success my-2 my-sm-0"
              onClick={this.importProject(this.props.project, this.props.importproject)}
            >Import</div>
        }
        <div class="text-muted">{this.props.project["description"]}</div>
        <div class="text-muted">Score {this.props.project["score"]}</div>
        <div class="text-muted">Watchers {this.props.project["watchers"]}</div>
      </div>
    )
  }
}

export default ProjectComponent;