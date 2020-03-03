import React, { Component, Fragment } from 'react';
import './CommentForm.css';

class CommentForm extends Component {

  constructor(props){
    super(props)
    this.state = {
      author: '',
      quote: ''
    }
    this.handleAuthorChange = this.handleAuthorChange.bind(this)
    this.handleQuoteChange = this.handleQuoteChange.bind(this)
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this)
  }

  handleAuthorChange(event){
    this.setState({author: event.target.value})
  }

  handleQuoteChange(event){
    this.setState({quote: event.target.value})
  }

  handleCommentSubmit(event){
    console.log(event)
    event.preventDefault();
    const newComment = {
      author: this.state.author,
      quote: this.state.quote
    }
    this.props.onCommentSubmit(newComment)
    this.setState({
      author: '',
      quote: ''
    })
  }

  render(){
    return(
    <section className="comment-form">
      <h2>Add New Comment</h2>
      <form  onSubmit={this.handleCommentSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Your Quote"
          value={this.state.quote}
          onChange={this.handleQuoteChange}
        />
        <input
          type="submit"
          value="Submit"
          className="submit-button"
         />
      </form>
    </section>
  )
  }
}

export default CommentForm;
