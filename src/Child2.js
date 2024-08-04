import React, {useEffect, useState} from 'react';

const Child2 = (props) => {
    const myArray = props.countriesState;
    useEffect(() => {
        console.log("child 2 is called")
        //console.log(props.countriesState)
       // debugger;
       props.changeparent(props.state+1)
    }, [props.countriesState])
    return (
        // <div>
        //     <h1>this is child 2 {props.state}</h1>
        //
        //     <ul>
        //         <li>hi</li>
        //         <li>oyh</li>
        //     </ul>
        //
        // </div>
        <div>
            <ul>
                {myArray.length>0 && myArray.map((item,keys) => (
                    <li key={item}>{item.name.common}</li>
                ))}
            </ul>
        </div>
    )
}
export default Child2;