import React, {useEffect, useState} from 'react';
import axios from "axios";

const Child1 = (props) => {
    const callCountries = async (event) => {
        event.preventDefault();
        await axios
            .get("https://restcountries.com/v3.1/all")
            .then((data) => {
                    props.setCountriesState(data.data)
                    // console.log(data.data)
                }
            )
            .catch(error => console.log(error));
    }
    useEffect(() => {
        console.log("child 1 is called")
    }, [])
    const handleSubmits = (event) => {
        event.preventDefault();
        // console.log(event.target.value)
        props.changeparent(props.state + 1)
    }
    return (
        <div>
            <h1> this is child 1 {props.state}</h1>
            <button onClick={callCountries}>call api</button>
            {/*<ul>*/}
            {/*    {props.countriesState.length > 0 && props.countriesState.map((item,keys) => {*/}
            {/*        return <li key={keys}>{item.name.common}</li>;*/}
            {/*    })}*/}
            {/*</ul>*/}
        </div>

    )

}
export default Child1;