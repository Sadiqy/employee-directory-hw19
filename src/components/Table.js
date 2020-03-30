import React from 'react';

export default function (props) {
    console.log(props.data)
    return (<>
        {props.data.map(person =>


            <div class="list-group list-group-item list-group-item-action list-group-item-secondary" id="list">

                
                    <img className="d-flex justify-content-start align-items-center" src={person.picture.thumbnail} />
                    {person.name.title} 
                    {person.name.first} 
                    {person.name.last} 
                    {person.phone}{person.email}
                    <div className="d-flex justify-content-end align-items-center">{person.dob.age}</div>

            </div>


        )}


    </>)
}