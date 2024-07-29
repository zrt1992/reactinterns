
import User from './components/User';
import Userinfo from './components/Userinfo';
import { BrowserRouter, Routes, Route,NavLink } from 'react-router-dom'
import './App.css'
import React from 'react';
function App() {
    return (
        <>
        <BrowserRouter>
            <div className='container'>
                <h1>API Calls</h1>
                <div><NavLink to={'/'} className={'link-container'} id='a'>login </NavLink></div>
                <div><NavLink to={'/userinfo'} className={'link-container'} id='a'>Show information</NavLink></div>
                <Routes>
                    <Route path='/' element={<User/>} />
                    <Route path='/userinfo' element={<Userinfo/>} />
                </Routes>

            </div>
        </BrowserRouter>
        </>

    )



};







export default App;