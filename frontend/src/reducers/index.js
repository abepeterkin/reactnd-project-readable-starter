import _ from 'lodash'
import { combineReducers } from 'redux'

import {
  RECIEVE_CATEGORIES,
  RECIEVE_POSTS,
  RECIEVE_COMMENTS
} from '../actions'

/* STORE STRUCTURE
  { 
    categories: {
      <categoryname>: {
        name: <name>,
        path: <path>,
        posts: [array of post ids]
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
        deleted: <deleted>,
        comments: [array of comment ids]
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

const initialState = {
  categories: {},
  posts: {},
  comments: {}
}

function categories (state = initialState, action) {
  switch (action.type) {
    case RECIEVE_CATEGORIES:
      let newState = {
        ...state
      }
      for (let category in action.categories) {
        if (!newState.categories.hasOwnProperty(category.name)) {
          newState.categories[category.name] = {
            name: category.name,
            path: category.path,
            posts: []
          }
        }
      }
      return newState
    default:
      return state
  }
}

function posts (state = initialState, action) {
  switch (action.state) {
    case RECIEVE_POSTS:
      let newState = {
          ...state
      }
      for (let post in action.posts) {
        let comments = []
        if (state.posts[post.id]) {
          comments = state.posts[post.id].comments
        }
        newState.posts[post.id] = {
          ...post,
          comments
        }
        const categoryPosts = newState.categories[post.category].posts
        if (categoryPosts && _.includes(categoryPosts, post.id)) {
          categoryPosts.push(post.id)
        }
      }
      return newState
    default:
      return state
  }
  
}

function comments (state = initialState, action) {
  switch (action.state) {
    case RECIEVE_COMMENTS:
      let newState = {
      ...state
      }
      for (let comment in action.comments) {
        newState.comments[comment.id] = comment
        const parentPost = newState.posts[comment.parentId]
        if (parentPost && _.includes(parentPost.comments, comment.id)) {
          parentPost.comments.push(comment.id)
        }
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