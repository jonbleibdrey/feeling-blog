import React, { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("jack");

  const handleSubmit = (e) =>{
    e.preventDefault()
    const blog = {title, body, author}

    console.log("blog", blog)
    }

  return (
    <div className="create">
      <h2>Add new blog</h2>
      <form onSubmit={handleSubmit}>
        <label> Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label> Blog body:</label>
        <textarea
          type="text"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label> Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        >
          <option value="henry"> Henry</option>
          <option value="jack"> Jack</option>
        </select>
        <button>Add blog</button>
      </form>
      <h3>{title}</h3>
      <p>Print: {body}</p>
      <p>By: {author}</p>
    </div>
  );
};

export default Create;
