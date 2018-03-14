const blogs = ( state = [], action ) => {
  switch(action.type) {
    case 'BLOGS':
      return action.blogs
    case 'ADD_BLOGS':
      return [action.blogs, ...state];
    case 'TOGGLE_BLOGS':
      return state.map( blog => {
        if (blog.id === action.id)
          return {...blog, complete: !blog.complete}
        return blog
      })
    default:
      return state
  }
}

export default blogs;
