import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import Login from './components/Login'; // Import your Login component
import UserData from './components/UserData';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const navigate = useNavigate();

  const handleLogin = () => {
    
    setIsLoggedIn(true);
    
  };
  return (
    <Router>
      <Link to={"/"}>Login</Link>
      <Link to={"/userdata"}>User Data</Link>
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin}/>} />
        <Route path="/userdata" element={ <UserData />}  />
      </Routes>
    </Router>
  );
};

export default App;

