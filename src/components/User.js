import React,{ useState, useEffect } from 'react';
import Userinfo from './components/Userinfo';
import axios from 'axios';
const User = () => { 

    // const [email, setEmail] = useState('');    
    // const [password, setPassword] = useState('');
    // const [errorMessage, setErrorMessage] = useState(''); 
    const [token, setToken]=useState(); 
     useEffect(() => {
        userLogin('','')
     });
      const userLogin = async (email, password) => {
        await axios({
            url: 'https://hip-garfish-presently.ngrok-free.app/graphql/login',
            method: 'post',
            headers: {
                'Content-Type' : 'application/json'
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

            // query :`MyQuery {
            //     users(id: 10) {
            //       email:"roger.rice@blanda.biz",
            //       name: "secret"
            //       articles{
            //           title
            //       }
            //     }
            //   }`
            }
            // headers: {
            //     'Content-Type' : 'application/json',
            //     'Accept': 'application/json',
            //     'Authorization' : `bearer ${token}`
            // }
        }).then((result) => {
            //  console.log(result)
            if (result.data.errors) { //tells it is not looged in
                console.log('Login failed');
            } else { //tells it is logged in
            setToken(result.data.data.loginUser.token); 
                console.log(token);
              localStorage.setItem('bearer',token)
              localStorage.getItem('bearer',token)
              
            }
    
        }).catch((error) => {
            console.error('Login error occurred:', error);
            // setErrorMessage('Login error occurred. Please try again.');
            // console.log(errorMessage)
        });

    }
    // const callInfo=()=>
    // {
    //     setTimeout(()=>{
    //         {<Userinfo/>}
    //       },3000)
    // }
    return(
<div>
   {/* <button onClick={callInfo}>Call User information</button> */}
   {<Userinfo/>}
</div>
    )
   
        // const handleLogin = async (e) => {
        //     e.preventDefault();
        //     setErrorMessage('');

        //     await userLogin(email, password);
        // }

    // return(
    //     <>
    //     <div className='container'>
    //         <h1>login</h1>
    //         <form onSubmit={handleLogin}>
    //         <label htmlFor="email">Email</label>
    //              <input
    //                  type="text"
    //                  id="email"
    //                  placeholder="Email"
    //                  value={email}
    //                  onChange={(e) => setEmail(e.target.value)}
    //                  required
    //              />

    //         <label htmlFor="password">Password</label>
    //              <input
    //                  type="password"
    //                  id="password"
    //                  placeholder="Password"
    //                  value={password}
    //                  onChange={(e) => setPassword(e.target.value)}
    //                  required
    //              />

    //         <button type="submit">Login</button>
    //         </form>
    //         {errorMessage && <h2>{errorMessage}</h2>}
    //     </div>

    //     </>
    // )
  };

export default User;