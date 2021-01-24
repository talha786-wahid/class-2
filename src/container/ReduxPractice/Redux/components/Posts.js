import React, { Component } from "react";

class Posts extends Component {
  state = {
    posts: [],
  };
  componentWillMount = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          posts: data,
        })
      );
  };
  render() {
    const postItems = this.state.posts.map((post) => (
      <div id={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        Posts
        {postItems}
      </div>
    );
  }
}

export default Posts;
