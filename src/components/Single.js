import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends Component {
  render() {
    const { match, posts, startAddingComment } = this.props;
    const id = Number(match.params.id);
    const post = posts.find(post => post.id === id);
    const comments = this.props.comments[id] || [];
    if (this.props.loading) {
      return <div className='loader'> ...loading </div>
    } else if (post) {
      return (
        <div className='single-photo'>
          <Photo post={post} {...this.props} id={post.id} />
          <Comments startAddingComment={startAddingComment} comments={comments} id={id} />
        </div>
      );
    } else {
      return <h1>No Posts Found...</h1>
    }
  }
}

export default Single;
