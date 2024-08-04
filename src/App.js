import User from './components/User';
import Userinfo from './components/Userinfo';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import './App.css'
import React, {useEffect, useState} from 'react';
import Child1 from "./Child1";
import Child2 from "./Child2";
import Test from "./Test";

function App() {
    useEffect(() => {
        console.log("parent called")
    }, [])
    const [parent, setParent] = useState(1)
    const [number, setNumber] = useState(1)
    const [countriesState, setCountriesState] = useState([])
    return (
        <div>
            <div>
                <Child1 state={parent} changeparent={setParent} countriesState={countriesState}
                        setCountriesState={setCountriesState}/>
            </div>
            <div>

                <Child2 state={parent} changeparent={setParent} countriesState={countriesState}
                        setCountriesState={setCountriesState}/>
            </div>
           <div>
               <Test/>
           </div>
        </div>
    )
};
export default App;