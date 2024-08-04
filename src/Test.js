import React, {useEffect, useState} from 'react';

const Test = () => {
    useEffect(() => {
        console.log("test is called")
    }, [])

    return (
        <div>
            <h1> this is test </h1>
        </div>

    )

}
export default Test;