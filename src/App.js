import './App.css';

function App() {

  const title = "welcome to the new blog"
  const like = 50
  const link = "http://google.com"
  //const person = {name: "yoshi", age:30}

  return (
    <div className='App'>
      <div className="content">
        <h1>{title}</h1>
        <p>
          liked {like} times
        </p>
        <p>{10}</p>
        <p>{"hello"}</p>
        <p>{[1,2,3,4,5,6]}</p>
        <a href={link}>google site</a>
      </div>
    </div>
  );
}

export default App;
