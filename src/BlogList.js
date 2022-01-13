import React from "react";

const blogList = ({ blogs, title}) => {
  console.log(blogs);

  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <h4>Written by: {blog.author}</h4>
          <hr/>
          <p>{blog.body}</p>
        </div>
       
      ))}
    </div>
  );
};

export default blogList;
// run json like this(dont forget to cd into feeling folder first):  npx json-server --watch data/db.json --port 8000