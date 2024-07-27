import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Login.css'; // Assuming you have a Login.css stylesheet

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [token, setToken] = useState(null);   
 // Initialize token as null

  // Store token in local storage after successful login
  useEffect(() => {
    if (token) {
      localStorage.setItem('authToken', token);
    }
  }, [token]);

  const userLogin = async (email, password) => {
    try {
      const response = await axios({
        url: 'https://hip-garfish-presently.ngrok-free.app/graphql/login',
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        data: {
          query: `mutation {
            loginUser(
              email: "${email}",
              password: "${password}"
            ) {
              user {
                email
              }
              token
            }
          }`,
        },
      });

      if (response.data.errors) {
        setErrorMessage('Login failed. Please check your email and password.');
      } else {
        setToken(response.data.data.loginUser.token); // Store token in state
        setErrorMessage(''); // Clear any previous error message
      }
    } catch (error) {
      console.error('Login error occurred:', error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear any previous error message

    await userLogin(email, password);
  };

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

        {errorMessage && <h2>{errorMessage}</h2>}
      </div>
    </>
  );
};

export default Login;