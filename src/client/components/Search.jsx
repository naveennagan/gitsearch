import React, { Component } from 'react';

class SearchComponent extends Component {


  constructor(props) {
    super(props);
    this.state = {
      name: 'VsGoldenAvenues',
      search: ""
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

  searchProjects = () => {
    this.props.onsearch(this.state.search);
  }

  onChange = (e) => {
    let value = e.target.value;
    console.log("Searching for the value ", value);
    this.setState({ search: value });
  }

  render() {
    return (
      <nav class="navbar navbar-toggleable-md navbar-inverse fixed-top navbar-dark bg-dark">
        <form class="form-inline mt-2 mt-md-0">
          <input onChange={this.onChange} class="form-control mr-sm-2" type="text" placeholder="Search" />
          <div class="btn btn-outline-success my-2 my-sm-0"
            onClick={this.searchProjects}
          >Search</div>
        </form>
      </nav>
    )
  }
}

export default SearchComponent;