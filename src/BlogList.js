import React from "react";

const BlogList = ({ blogs, title, getBlogId }) => {
  const deleteBlogHandler = (id) => {
    getBlogId(id); // Use getBlogId instead of getContactId
  };

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div
            className=""
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
          >
            <button>Read More</button>
            <i
              className="trash alternate outline icon"
              style={{ color: "red" }}
              onClick={() => deleteBlogHandler(blog.id)} // Use deleteBlogHandler instead of props.clickHandler
            ></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
