module.exports = {
  addComment: require('./api_functions/addComment').default,
  addPost: require('./api_functions/addPost').default,
  deleteComment: require('./api_functions/deleteComment').default,
  deletePost: require('./api_functions/deletePost').default,
  downvoteComment: require('./api_functions/downvoteComment').default,
  downvotePost: require('./api_functions/downvotePost').default,
  editComment: require('./api_functions/editComment').default,
  editPost: require('./api_functions/editPost').default,
  fetchAllPosts: require('./api_functions/fetchAllPosts').default,
  fetchCategories: require('./api_functions/fetchCategories').default,
  fetchCategoryPosts: require('./api_functions/fetchCategoryPosts').default,
  fetchComment: require('./api_functions/fetchComment').default,
  fetchPost: require('./api_functions/fetchPost').default,
  fetchPostComments: require('./api_functions/fetchPostComments').default,
  upvoteComment: require('./api_functions/upvoteComment').default,
  upvotePost: require('./api_functions/upvotePost').default,
}