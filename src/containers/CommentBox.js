import React, {Component} from 'react';
import CommentList from '../components/CommentList'
import CommentForm from '../components/CommentForm'


class CommentBox extends Component{

  constructor(props){
    super(props)
    this.state = {
      comments: [
        {
          id: 1,
          author: "Jen",
          quote: "Hiya y'alright?"
        },
        {
          id: 2,
          author: "Ali",
          quote: "Yeah are you?"
        }
      ]
    }

    this.handleCommentAddition = this.handleCommentAddition.bind(this)
  }

  handleCommentAddition(commentToAdd){
    commentToAdd.id = Date.now()
    const updatedComments = [...this.state.comments, commentToAdd]
    this.setState({comments: updatedComments})
  }

  render(){
    return (
      <article className="comment-box">
        <h1>Comments</h1>
        <CommentForm onCommentSubmit={this.handleCommentAddition} />
        <CommentList comments={this.state.comments} />
      </article>
    )

  }
}

export default CommentBox;
