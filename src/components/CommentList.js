import React, { Component } from "react";
import { connect } from "react-redux";

class CommentList extends Component {
  constructor(props) {
    super(props);

    this.renderComments = this.renderComments.bind(this);
  }

  renderComments() {
    return this.props.comments.map(comment => {
      return <li key={comment}>{comment}</li>;
    });
  }

  render() {
    return (
      <div>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments
});

export default connect(mapStateToProps)(CommentList);
