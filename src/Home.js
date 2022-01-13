import React from "react";
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true)

  // const [name, setName] = useState("mario")

  // const handleDelete = (id) =>{
  //   setBlogs(blogs.filter(blog => blog.id !== id ))
  // }

  useEffect(()=>{
    // runs in every rerender, even deletes
    fetch("http://localhost:8000/blogs")
    .then(res => {
      return res.json()
    })
    .then((data) => {
      console.log("data", data)
      setBlogs(data)
      setIsPending(false)
    })
    console.log("useEffect ran")
    
  },[]);

  // const [updateName, setUpdateName] = useState("mario")
  // const [updateAge, setAge] = useState(25)

  // const handleClick = () => {
  // setUpdateName("luigi")
  // setAge(35)
  // }

  // const handleClickAgain = (name, e) =>{
  //   console.log("hello" + name, e.target)

  // }

  return (
    <div className="home">
      {/* {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>} */}
      {isPending && <div> Loading... </div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
      <hr/>
      {/* <button onClick={()=>setName("luigi")}>change name</button>
      <p>{name}</p> */}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "jack")}
        title="Jack Blogs"
      /> */}
      {/* <p>{updateName} is {updateAge} years old</p>
      <button onClick={handleClick}>Click Me</button> */}
      {/* <button onClick={(e)=>handleClickAgain(" mario", e)}>Click on me again</button> */}
    </div>
  );
};

export default Home;
