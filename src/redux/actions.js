import { database } from '../database/config';

export const startAddingPost = post => {
  return dispatch => {
    return database.ref('posts').update({[post.id]: post}).then(() => {
      dispatch(addPost(post))
    }).catch(error => console.log(error))
  }
}

export const startLoadingPost = () => {
  return dispatch => {
    return database.ref('posts').once('value').then(snapshot => {
      let posts = [];
      snapshot.forEach(childSnapshot => {
        posts.push(childSnapshot.val());
      })
      dispatch(loadPosts(posts))
    }).catch(error => console.log(error))
  }
}

export const startRemovingPost = id => {
  const updates = {
    [`posts/${id}`]: null,
    [`comments/${id}`]: null
   };   
  return dispatch => {
    return database.ref().update(updates).then(() => {
      dispatch(removePost(id))
    }).catch(error => console.log(error))
  }
}

// Comments Section state now

export const startAddingComment = (comment, postId) => {
  return dispatch => {
    return database.ref(`comments/${postId}`).push(comment).then(() => {
      dispatch(addComment(comment, postId))
    }).catch(error => console.log(error))
  }
}

export const startLoadingComments = () => {
  return dispatch => {
    return database.ref('comments').once('value').then(snapshot => {
      let comments = {};
      snapshot.forEach(childSnapshot => {
        comments[childSnapshot.key] = Object.values(childSnapshot.val());
      })
      dispatch(loadComments(comments))
    }).catch(error => console.log(error))
  }
}

export const startRemovingComment = id => {
  return dispatch => {
    return database.ref(`posts/${id}`).remove().then(() => {
      dispatch(removePost(id))
    }).catch(error => console.log(error))
  }
}

export const removePost = id => {
  return {
    type: 'REMOVE_POST',
    id
  }
}

export const addPost = post => {
  return {
    type: 'ADD_POST',
    post
  }
}

export const addComment = (comment, postId) => {
  return {
    type: 'ADD_COMMENT',
    comment,
    postId
  }
}

export const loadPosts = posts => {
  return {
    type: 'LOAD_POSTS',
    posts
  }
}

export const loadComments = comments => {
  return {
    type: 'LOAD_COMMENTS',
    comments
  }
}
