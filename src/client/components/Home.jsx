import React, { Component, Fragment } from 'react';
import SearchComponent from './Search.jsx';
import NavigationComponent from './Navigation.jsx';
class HomeComponent extends Component {

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
      <Fragment>
        <SearchComponent
          onsearch={this.props.searchProjects} />
        <NavigationComponent
          projects={this.props.projects} />
      </Fragment>
    )
  }
}

export default HomeComponent;