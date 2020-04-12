import React from 'react';

export default function (props) {
    console.log(props.data)
    return (<>

        <table className='table'>
            <thead>
                <tr>
                    <th scope='col'>Image</th>
                    <th scope='col'>Title</th>
                    <th scope='col'>First</th>
                    <th scope='col'>Last</th>
                    <th scope='col'>Number</th>
                    <th scope='col'>email</th>
                    <th scope='col'>age</th>


                </tr>
            </thead>
            <tbody>
                 {props.data.map(person =>



                <tr>
                    <td><img className="d-flex justify-content-start align-items-center" src={person.picture.thumbnail} /></td>
                    <td>{person.name.title}</td>
                    <td>{person.name.first}</td>
                    <td>{person.name.last}</td>
                    <td>{person.phone}</td>
                    <td>{person.email}</td>
                    <td>{person.dob.age}</td>

                </tr>

               


            )}

            </tbody>
           

        </table>


    </>)
}