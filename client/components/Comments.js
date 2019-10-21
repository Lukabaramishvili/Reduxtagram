import React, { Component } from 'react';

class Comments extends Component {

  renderComment(comment, i) {
    return (
      <div className = "comment" key={i}>
        <p>
          <strong>{comment.user} </strong>
          {comment.text}
          <button className="remove-comment">&times;</button>
        </p>
      </div>
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("submitting");
    const { postId } = this.props.params
    const author = this.props.refs.author.value
    const comment = this.props.refs.comment.value
    this.props.addComment(postId, author, comment);
  }

  render() {
    console.log(this.props.postComments);
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
        <form onSubmit={this.handleSubmit} ref="commentForm" className="comment-form">
          <input type="text" ref="author" placeholder="author"/>
          <input type="text" ref="comment" placeholder="author"/>
          <input type="submit" hidden/>
          </form>
      </div>
    );
  }

}

export default Comments;
