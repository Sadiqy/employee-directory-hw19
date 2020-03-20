import React from 'react';

export default function(props){
    console.log(props.data)
return(<>
{props.data.map(person=> <div>{person.name.title} {person.name.first} {person.name.last}</div>)}

</>)}