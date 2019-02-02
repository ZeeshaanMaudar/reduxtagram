import React, { Component } from 'react';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import Single from './Single';
import { Route, Link } from 'react-router-dom';
// import Title from './Title';
// import { removePost } from '../redux/actions';

class Main extends Component {

  state = {
    loading: true
  }

  componentDidMount() {
    this.props.startLoadingPost().then(() => {
      this.setState({loading: false})
    });
    this.props.startLoadingComments();
  }

  render() {
    return (
      <div>
        <h1>
          <Link to='/'>Reduxtagram</Link>
        </h1>
        <Route path='/' exact render={() => (
          <div>
            <PhotoWall {...this.props} />
          </div>
        )} />
        <Route path='/addPhoto' render={() => (
          <AddPhoto {...this.props} />
        )} />
        <Route path='/single/:id' render={params => (
          <Single loading={this.state.loading} {...this.props} {...params} />
        )} />
      </div>
    );
  }
}

export default Main;
