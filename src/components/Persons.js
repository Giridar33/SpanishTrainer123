import React from 'react';
import data from '../data.json'

const Persons = () => {
    const { persons } = data;

    return (
        <div className='person-list'>
            <h2>Person</h2>
            <div className='info-3'>
                {persons.map((person, index) => {
                    return <p className="info-column" key={index}>{person}</p>
                })}
            </div>
        </div>
    )
}

export default Persons;