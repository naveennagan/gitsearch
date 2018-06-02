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
    console.log("Component Mounted ! ");
    //this.props.componentMounted();
  }

  render() {
    return (
      <div class="col-6 col-sm-3 placeholder">
        <img src="data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs="
          width="200" height="200" class="img-fluid rounded-circle"
          alt="Generic placeholder thumbnail" />
        <h4>{this.props.project["full_name"]}</h4>
        <div class="text-muted">{this.props.project["full_name"]}</div>
      </div>
    )
  }
}

export default ProjectComponent;