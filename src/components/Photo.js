import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Photo = ({ post, startRemovingPost, history, comments }) => (
  <figure className='figure'>
    <Link to={`/single/${post.id}`}>
      <img className='photo' src={post.imageLink} alt={post.description}/>
    </Link>
    <figcaption>
      <p>{post.description}</p>
    </figcaption>
    <div className='button-container'>
      <button
        className='button'
        onClick={() => {
          startRemovingPost(post.id);
          // removePost(post.id);
          history.push('/');
        }}>Remove</button>
      <Link className='button' to={`/single/${post.id}`}>
        <div className='comment-count'>
          <div className='speech-bubble'></div>
          {comments[post.id] ? comments[post.id].length : 0}
        </div>
      </Link>
    </div>
  </figure>
);

Photo.propTypes = {
  post: PropTypes.object.isRequired
}

export default Photo;
