import { useState, useEffect } from 'react';
import axios from 'axios';

const UserData = () => {
  const [email, setEmail] = useState('');
  const [name, setNmae] = useState('');
  const [userData, setUserData] = useState(null);
  // const [errorMessage, setErrorMessage] = useState('');
  const [token, setToken] = useState(null);
  
  useEffect(() => {
    const storedToken = localStorage.getItem('bearer');
    if (storedToken) {
      setToken(storedToken);
      fetchData(storedToken); // Fetch data if token is available
    }
  }, );

  const fetchData = async (storedToken) => {
    try {
      const response = await axios({
        url: 'https://hip-garfish-presently.ngrok-free.app/graphql/user',
        method: 'post',
        data: {
          query :`query MyQuery {
            users(id: 10) {
              email
              name
              articles{
                  title
              }
            }
          }`,
        },
        headers: {
          'Accept': 'application/json',
          'Authorization' : `Bearer `+ localStorage.getItem('bearer'), // Use stored token for authorization
          'Access-Control-Allow-Origin': '*',
        },
      });

      setUserData(response.data); // Set user data on successful response
      
      if (response.data.errors) {
        // setErrorMessage('Login failed. Please check your email.');
      } else {
        // setToken(response.data.data.users.token);
        console.log(userData.data.users)
        // console.log(token)
        // setErrorMessage(''); 
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      // setErrorMessage('An error occurred. Please try again.');
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    await fetchData(email, name);
};

  return (
    <>
      <div className="container">
        <h1>User Information</h1>
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
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="Name"
            placeholder="Name"
            value={name}
            onChange={(e) => setNmae(e.target.value)} 
            required
          />
          <button type="submit">Show User Data</button>
          </form>
        {/* {errorMessage && <h2>{errorMessage}</h2>} */}
      </div>
    </>
  );
};

export default UserData;