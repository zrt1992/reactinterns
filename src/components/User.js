import axios from 'axios';
import React,{useState} from 'react';
import './User.css'
// import {Link} from 'react-router-dom'
function User(){
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [token, setToken] = useState(null);
// useEffect(() => {
//     userLogin('', '');
// });
const userLogin = async (email, password) => {
    await axios({
        url: 'https://hip-garfish-presently.ngrok-free.app/graphql/login',
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            query: `mutation {
               loginUser(
                   email: "${email}",
                   password: "${password}"
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
            console.log('Login failed');
        } else {
            setToken(result.data.data.loginUser.token);
            console.log(token);
            localStorage.setItem('bearer', token)
            localStorage.getItem('bearer', token)

        }

    }).catch((error) => {
        console.error('Login error occurred:', error);

    });

}

const handleLogin = (e) => {
    e.preventDefault();
    userLogin(email, password);
}

return (
    <div className='container'>
        <h1>login</h1>
        <form onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
<br/>
            <label htmlFor="password">Password</label>
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
<br/>
            <button type="submit">Login</button>
        </form>
</div>
)
}
export default User;