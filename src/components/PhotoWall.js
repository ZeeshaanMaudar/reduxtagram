import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';
import { Link } from 'react-router-dom';

const PhotoWall = props => (
  <div>
    <Link className='add-icon' to='/AddPhoto'></Link>
    <div className='photo-grid'>
      {props.posts.sort((a, b) => b.id - a.id).map(post => <Photo key={post.id} post={post} {...props} />)}
    </div>
  </div>
);

PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired
}

export default PhotoWall;
