import React, { useState } from "react";
const AddBlog = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  const add = (e) => {
    e.preventDefault();
    if (title === "" || body === "" || author === "") {
      alert("all the fields are Mandatory!");
      return;
    }
    props.addBlogHandler({ title, body, author });
    setTitle("");
    setBody("");
    setAuthor("");
  };

  return (
    <div className="Blog">
      <div className="ui main">
        <h2 style={{ color: "black" }}> Add Blog</h2>
        <form className="ui form" onSubmit={add}>
          <div className="field">
            <label style={{ color: "#1e19b1" }}>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="field">
            <label style={{ color: "#1e19b1" }}>Content</label>
            <input
              type="text"
              name="body"
              placeholder="Blog content"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <div className="field">
            <label style={{ color: "#1e19b1" }}>Author</label>
            <input
              type="text"
              name="author"
              placeholder="Blog Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
