<<<<<<< HEAD
<<<<<<< HEAD
=======
 anwar
>>>>>>> ee01fc801f575a45026e99a2a274216857355981
import React,{useState,useEffect} from 'react';
import axios from 'axios';
function App(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    userLogin('','')
 });
  const userLogin = async (em, psw)=> {
    await axios({
        url: 'https://hip-garfish-presently.ngrok-free.app/graphql/login/',
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': '*'
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


        if (result.data.errors) { 

             console.log('not logged in')
        } else { 
            let token = result.data.data.loginUser.token
            localStorage.setItem("userToken", token)
            localStorage.getItem("userToken", token)
           console.log(token)

        }

    }).catch((error) => {

    });
  }
  // const HandleLogin = async(e)=>{
  //   e.preventdefault();
  //   await userLogin(email,password)
  // }
// return(
//   <div>
//      <form onSubmit={HandleLogin}>
//     <input type='text' id='email' placeholder='Enter E-mail' value={email} onChange={(e)=>setEmail(e.target.value)} />
//     <input type='password' id='password' placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
//     <button type='submit'>Submit</button>
//     </form>
//   </div>
// );
<<<<<<< HEAD
=======
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <>
    <Login />
    </>

  );
>>>>>>> 4fb078b0d2dd9fd3d4d99ead28cbf48c384243d7
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to games .
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
 main
>>>>>>> ee01fc801f575a45026e99a2a274216857355981
}

export default App;


