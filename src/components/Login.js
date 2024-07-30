import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(''); 
  // const navigate = useNavigate();

  // Store token in local storage after successful login
  // useEffect(() => {
  //   if (token) {
  //     localStorage.setItem('authToken', token);
  //   } 
  // }, [token]);

  const userLogin = async (email, password) => {
    
      const response = await axios({
        url: 'https://hip-garfish-presently.ngrok-free.app/graphql/login',
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          // 'Accept': 'application/json',
        },
        data: {
          query: `mutation {
            loginUser(
              email:"roger.rice@blanda.biz",
              password: "secret"
            ) {
              user {
                email,
              }
              token
            }
               }`
        },
      
      }).then((result)=>{
        if(result.data.error){
          console.log('Login Failed')
        }else{
          setToken(response.data.data.loginUser.token);
          console.log(token);
          localStorage.setItem('bearer', token)
          localStorage.getItem('bearer', token)
        }
      }).catch((error)=>{
        console.error('Login error occurred:',error)
      });
    }

    //   if (response.data.errors) {
    //     setErrorMessage('Login failed. Please check your email and password.');
    //   } else {
    //     setToken(response.data.data.loginUser.token);
    //     console.log(token);
    //     localStorage.setItem('bearer', token)
    //     localStorage.getItem('bearer', token)
    //   }
    // } 
    //   catch (error) {
    //     console.error('Login error occurred:', error);
    // };
  
    const handleLogin = async (e) => {
      e.preventDefault();
      setTimeout(()=>{
        userLogin(email, password)
      },3000)
  }

  return (
    <>
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;