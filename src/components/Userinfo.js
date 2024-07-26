// import { useState, useEffect } from 'react';
import axios from 'axios';
const Userinfo = () => { 

    // const [email, setEmail] = useState('');    
    // const [password, setPassword] = useState('');
    // const [errorMessage, setErrorMessage] = useState(''); 
    // const [token, setToken]=useState(); 
     useEffect(() => {
        userProfile('','')
     });
      const userProfile = async (email, password) => {
        await axios({
            url: 'https://hip-garfish-presently.ngrok-free.app/graphql/user',
            method: 'post',
           
            data: {
            //     query: `mutation {
            //   loginUser(
            //       email: "roger.rice@blanda.biz",
            //       password: "secret"
            //   )
            //   {
            //     user {
            //           email,
            //       }
            //       token
            //   }
            //   }`

            query :`MyQuery {
                users(id: 10) {
                  email:"roger.rice@blanda.biz",
                  name: "secret"
                  articles{
                      title
                  }
                }
              }`
            },
            headers: {
                'Content-Type' : 'application/json',
                'Accept': 'application/json',
                'Authorization' : `bearer ${localStorage.getItem(token)}`
            }
        }).then((result) => {
            //  console.log(result)
            if (result.data.errors) { //tells it is not looged in
                console.log('Login failed');
            } else { //tells it is logged in
            console.log(result); 
                // console.log(token);
            //   localStorage.setItem('bearer',token)
            //   localStorage.getItem('bearer',token)
              
            }
    
        }).catch((error) => {
            console.error('Login error occurred:', error);
            // setErrorMessage('Login error occurred. Please try again.');
            // console.log(errorMessage)
        });

    }
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

export default Userinfo;