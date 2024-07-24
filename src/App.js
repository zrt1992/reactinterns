import React,{useState,useEffect} from 'react';
import axios from 'axios';
function App(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    userLogin('','')
 });
//  const handleEmail=(e)=>{
//   setEmail(e.target.value);
//  }
//  const handlePassword=(e)=>{
//   setPassword(e.target.value);
//  }
  const userLogin = async (em, psw)=> {
    await axios({
        url: 'https://hip-garfish-presently.ngrok-free.app/graphql/login/',
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            query: `mutation {
          loginUser(
              email: "${em}",
              password: "${psw}"
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

             console.log('not logged in')
        } else { //tells it is logged in
            let token = result.data.data.loginUser.token
            localStorage.setItem("userToken", token)
            // localStorage.getItem("userToken", token)
          console.log(token)

        }

    }).catch((error) => {

    });
  }
  const HandleLogin = async(e)=>{
    e.preventdefault();
    await userLogin(email,password)
  }
return(
  <div>
     <form onSubmit={HandleLogin}>
    <input type='text' id='email' placeholder='Enter E-mail' value={email} onChange={(e)=>setEmail(e.target.value)} />
    <input type='password' id='password' placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <button type='submit'>Submit</button>
    </form>
  </div>
);
}

export default App;


