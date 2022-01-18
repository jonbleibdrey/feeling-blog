import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("jack");
  const [isPending, setIsPending] = useState(false)
  const history = useHistory()

  const handleSubmit = (e) =>{
    e.preventDefault()
    const blog = {title, body, author}

    setIsPending(true)

    fetch("http://localhost:8000/blogs", {
      method: 'POST',
      headers:{"Content-Type": "application/json"},
      body:JSON.stringify(blog)
    }).then(() => {
      console.log("new blog added")
      setIsPending(false)
      // history.go(-1)
      history.push('/')
    })
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
        {!isPending && <button>Add blog</button>}
        {isPending && <button disabled>Adding blog...</button>}
        
      </form>
      <h3>{title}</h3>
      <p>Print: {body}</p>
      <p>By: {author}</p>
    </div>
  );
};

export default Create;
