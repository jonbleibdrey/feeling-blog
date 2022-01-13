import React from "react";

const blogList = ({ blogs, title, handleDelete }) => {
  console.log(blogs);

  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
        </div>
       
      ))}
    </div>
  );
};

export default blogList;
// run json like this(dont forget to cd into feeling folder first):  npx json-server --watch data/db.json --port 8000