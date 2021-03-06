import { combineReducers } from 'redux'

import {
  RECIEVE_CATEGORIES,
  RECIEVE_POSTS,
  DELETE_POSTS,
  RECIEVE_COMMENTS
} from '../actions'

/* STORE STRUCTURE
  { 
    categories: {
      <categoryname>: {
        name: <name>,
        path: <path>
      }
    },
    posts: {
      <id>: {
        id: <id>,
        timestamp: <timestamp>,
        title: <title>,
        body: <body>,
        author: <author>,
        category: <category>,
        votescore: <votescore>,
        deleted: <deleted>
      }
    },
    comments: {
      <id>: {
        id: <id>,
        parentId: <parentId>,
        timestamp: <timestamp>,
        body: <body>,
        author: <author>,
        votescore: <voteScore>,
        deleted: <deleted>,
        parentDeleted: <parentDeleted>
      }
    }
  }
*/

function categories (state = {}, action) {
  switch (action.type) {
    case RECIEVE_CATEGORIES:
      let newState = {
        ...state
      }
      for (let i = 0; i < action.categories.length; i++) {
        const category = action.categories[i]
        newState[category.name] = category
      }
      return newState
    default:
      return state
  }
}

function posts (state = {}, action) {
  let newState = {
    ...state
  }
  switch (action.type) {
    case RECIEVE_POSTS:
      for (let i = 0; i < action.posts.length; i++) {
        const post = action.posts[i]
        newState[post.id] = post
      }
      return newState
    case DELETE_POSTS:
      for (let i = 0; i < action.posts.length; i++) {
        const post = action.posts[i]
        delete newState[post.id]
      }
      return newState
    default:
      return state
  }
  
}

function comments (state = {}, action) {
  switch (action.type) {
    case RECIEVE_COMMENTS:
      let newState = {
        ...state
      }
      for (let i = 0; i < action.comments.length; i++) {
        const comment = action.comments[i]
        newState[comment.id] = comment
      }
      return newState
    default:
      return state
  }
}

export default combineReducers({
  categories,
  posts,
  comments
})