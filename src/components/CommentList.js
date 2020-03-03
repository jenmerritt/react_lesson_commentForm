import React, { Fragment } from 'react';
import Comment from './Comment';
import './CommentList.css';

function CommentList({comments}){

  const commentComponents  = comments.map( comment => {
    return (
      <Comment
        author={comment.author}
        key={comment.id}
      >
        {comment.quote}
      </Comment>
    )
  })

  return(
    <Fragment>
      <h2>Submitted Comments</h2>
      <ul className="comment-list" >
        {commentComponents}
      </ul>
    </Fragment>
  )
}

export default CommentList;
