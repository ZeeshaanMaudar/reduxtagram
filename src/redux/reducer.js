import posts from '../data/posts';
import { combineReducers } from 'redux';

const commentReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      if (!state[action.postId]) {
        return {...state, [action.postId]: [action.comment]};
      } else {
        return {...state, [action.postId]: [...state[action.postId], action.comment]}
      }
    case 'LOAD_COMMENTS': return action.comments
    default: return state;
  }
}

const postReducer = (state = posts, action) => {
  switch (action.type) {
    case 'REMOVE_POST': return [...state.filter(post => action.id !== post.id)]
    case 'ADD_POST': return [...state, action.post]
    case 'LOAD_POSTS': return action.posts
    default: return state
  }
}

const rootReducer = combineReducers({postReducer, commentReducer});

export default rootReducer;
