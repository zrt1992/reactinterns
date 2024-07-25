import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => { 

    const [email, setEmail] = useState('');    
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');  
    
    useEffect(() => {
        userLogin('','')
     });
      const userLogin = async (email, password) => {
        await axios({
            url: 'https://hip-garfish-presently.ngrok-free.app/graphql/login/',
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                query: `mutation {
              loginUser(
                  email: "roger.rice@blanda.biz",
                  password: "secret"
              )
              {
                user {
                      email,
                  }
                  token
              }
              }`
            }
        }).then((result) => {

            if (result.data.errors) { //tells it is not looged in
                console.log('Login failed');
            } else { //tells it is logged in
                let token = result.data.data.loginUser.token;
              localStorage.setItem('userToken',token)
              localStorage.getItem('userToken',token)
              console.log(token);
            }
    
        }).catch((error) => {
            console.error('Login error occurred:', error);
            setErrorMessage('Login error occurred. Please try again.');
        });

    }
        const handleLogin = async (e) => {
            e.preventDefault();
            setErrorMessage('');

            await userLogin(email, password);
        }

    return(
        <>
        <div className='container'>
            <h1>login</h1>
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
    )
  };

export default Login;