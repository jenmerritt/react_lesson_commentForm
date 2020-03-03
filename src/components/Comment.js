import React from 'react';

function Comment({author, children}){
  return(
    <li>
      <h4>"{children}"</h4>
      <p>Submitted by: {author}</p>
      <hr/>
    </li>
  )
}

export default Comment;
