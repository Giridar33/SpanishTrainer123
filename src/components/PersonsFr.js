import React from 'react';

const PersonsFr = ({ persons, togglePerson, showMobilePersons, toggleAllVerbOptions, shortenPerson, personToAnswer }) => {

    // This next return statement has some code which is a bit more complex that the Spanish counterpart
    // the map function in the return works in a way that if the index if the item is 2 (il) it will create
    // a <p> paragraph with that element plus the next two (so elles and on are together with il in the same line)
    // if the index is 7 (ils), it creates a <p> paragraph with that element plus the following one (elles)

    return (
        <div className='person-list'>
            <h2 onClick={toggleAllVerbOptions}>{personToAnswer ? shortenPerson(personToAnswer) : "Select Person"}</h2>
            {showMobilePersons &&
            <div className='info-3'>
                {persons.map((person, index) => {
                    if (index === 2) {
                        return (
                            <p 
                                className={`info-column ${person[1] ? 'active-option' : 'inactive-option'}`}
                                key={index}
                                onClick={() => {
                                    togglePerson(index)
                                    togglePerson(index + 1)
                                    togglePerson(index + 2)
                                    }}>
                                {shortenPerson(person)} / {shortenPerson(persons[index + 1])} / {shortenPerson(persons[index + 2])}
                            </p>
                        );
                    } else if (index === 7) {
                        return (
                            <p 
                                className={`info-column ${person[1] ? 'active-option' : 'inactive-option'}`}
                                key={index}
                                onClick={() => {
                                    togglePerson(index)
                                    togglePerson(index + 1)
                                    }}>
                                {shortenPerson(person)} / {shortenPerson(persons[index + 1])}
                            </p>
                        );
                    } else if (index === 3 || index === 4 || index === 8) {
                        return null; // Skip rendering
                    } else {
                        return (
                            <p 
                                className={`info-column ${person[1] ? 'active-option' : 'inactive-option'}`}
                                key={index}
                                onClick={() => togglePerson(index)}>
                                {shortenPerson(person)}
                            </p>
                        );
                    }
                })}
            </div>
            }
        </div>
    )
}

export default PersonsFr;
