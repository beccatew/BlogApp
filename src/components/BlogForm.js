import React from 'react';
import { connect } from 'react-redux';
import { incId } from '../actions/nextId';
import { addBlog } from '../actions/blogs';

class BlogForm extends React.Component {
  state = { post: {name: '', text: '' }}

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch, id } = this.props
    const { name, post } = this.state
    const blog = { name, id, complete: false }
    dispatch(addBlog(blog))
    dispatch(incId())
    this.setState( post: { name: '', text: '' })
  }

  handleChange = (e ) => {
    const { id, value } = e.target
    this.setState({ post: {...this.state.post, [id]: value}})
  }

  render() {
    const { name, text } = this.state

    return (
      <div>
        <h3>Add a Blog Post</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input id='name' value={name} onChange={this.handleChange} />
          <br />
          <label>Blog Post</label>
          <textarea id='text' value={text} onChange={this.handleChange} />
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId}
}

export default connect(mapStateToProps)(BlogForm);
