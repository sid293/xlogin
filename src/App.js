import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import * as e from 'express';

function App() {
  let [user, setUser] = useState({
    username: "",
    password: ""
  })
  let [error, setError] = useState(false);
  let [success, setSuccess] = useState(false);


  let handleChange = (e) => {
    setUser((prev=>{
      return{
        ...prev,
        username: e.target.value
      }
    }))
  }

  let changePassword = (e)=>{
    setUser((prev)=>{
      return{
        ...prev,
        password: e.target.value
      }
    })
  }

  //handle submit
  let handleSubmit = (e)=>{
    e.preventDefault();
    if(user.username === "admin" && user.password === "admin"){
      setSuccess(true);
      setError(false);
    }else{
      setError(true);
    }
  }
  return (
    <div className="App">
      <h1>Login Page</h1>
      {error && <p>Invalid username or password</p>}

      {success? <p>Welcome, user</p>:
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input type="text" name="username" required onChange={handleChange} />
        <br />
        <label>Password: </label>
        <input type="password" name="password" required onChange={changePassword} />
        <br/>
        <input type="submit" value="Login" />
      </form>
      }
    </div>
  );
}

export default App;
