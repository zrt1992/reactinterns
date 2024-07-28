import React,{useState } from 'react';
import axios from 'axios';
import './Userinfo.css'
const Userinfo = () => { 
    const [email, setEmail] = useState('');    
    const [password, setPassword] = useState('');
//  useEffect(() => {
//         PrintToken('','')
//      });
      const PrintToken =async (email, password) => {
        await axios({
            url: 'https://hip-garfish-presently.ngrok-free.app/graphql/user',
            method: 'post',
           
            data: {
             query :`MyQuery {
                users(id: 10) {
                  email:"${email}",
                  name: "${password}"
                  articles{
                      title
                  }
                }
              }`
            },
            headers: {
                'Accept': 'application/json',
                'Authorization' : `bearer ${localStorage.getItem('bearer')}`
            }
        }).then((result) => {
         localStorage.getItem('bearer')?
          console.log(result.data):
          console.log('invalid user')
     }).catch((error)=>{
             console.log("invalid User",error)
     });
    }
         const handleProfile =  (e) => {
             e.preventDefault();
              PrintToken(email, password);
         }

     return(
         <div className='container'>
             <h1>Show User information</h1>
             <form onSubmit={handleProfile}>
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

            <button type="submit">Show Data</button>
            </form>
        </div>
     )
  };
export default Userinfo;