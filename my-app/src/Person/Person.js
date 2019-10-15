import React from 'react';

const Person = (props) => {
    return (
    <div onClick={props.click}>
        <p>Siema I am {props.name} and I am {props.age}.</p>
        <p>{props.children}</p>
    </div>
    )
}

export default Person;