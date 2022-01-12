import React from "react";
import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Welcome to the bio-dome",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic assumenda omnis fugit sint ullam iusto consectetur officia similique, maxime quis! ",
      author: "frank",
      id: 1,
    },
    {
      title: "Big baby dont cry",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic assumenda omnis fugit sint ullam iusto consectetur officia similique, maxime quis!",
      author: "jack",
      id: 2,
    },
    {
      title: "my man can do anyhting",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic assumenda omnis fugit sint ullam iusto consectetur officia similique, maxime quis!",
      author: "jack",
      id: 3,
    },
    {
      title: "Why my love life is amazing",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic assumenda omnis fugit sint ullam iusto consectetur officia similique, maxime quis!",
      author: "benny",
      id: 4,
    },
  ]);

  const handleDelete = (id) =>{
    setBlogs(blogs.filter(blog => blog.id !== id ))
  }

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
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
      <hr/>
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
