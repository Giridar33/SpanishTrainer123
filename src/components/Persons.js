import React from 'react';

const Persons = ({ persons, togglePerson, showMobilePersons, toggleAllVerbOptions, shortenPerson, personToAnswer }) => {

    return (
        <div className='person-list'>
            <h2 onClick={toggleAllVerbOptions}>{personToAnswer ? shortenPerson(personToAnswer) : "Select Person"}</h2>
            {showMobilePersons &&
            <div className='info-3'>
                {persons.map((person, index) => {
                    return (
                        <p 
                            className={`info-column ${person[1] ? 'active-option' : 'inactive-option'}`}
                            key={index}
                            onClick={() => togglePerson(index)}>
                            {person[0]}
                        </p>)
                })}
            </div>
            }

        </div>
    )
}

export default Persons;