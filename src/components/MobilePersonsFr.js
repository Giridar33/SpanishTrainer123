import React from 'react';

export default function MobilePersons({ 
    showMobilePersons, 
    setShowMobilePersons, 
    setShowMobileTenses,
    setShowMobileInfinitives,
    persons, 
    togglePerson,
    resetState,
    setLabelsOn,
    setInputOn,
    personToAnswer ,
    shortenPerson
}) {

    const toggleMobilePersons = () => {
        resetState();
        setLabelsOn(false);
        setInputOn(false);
        setShowMobileInfinitives(false);
        setShowMobileTenses(false);
        setShowMobilePersons(prevState => !prevState)
    }

    return (
        <div className='mobile-persons'>
            <h2 onClick={toggleMobilePersons}>{personToAnswer ? shortenPerson(personToAnswer) : "Select Person"}</h2>
            {showMobilePersons && 
                <div className='info-3-mobile'>
                    {persons.map((person, index) => {
                        if (index === 2 || index === 7) {
                            return (
                                <p 
                                    className={`info-column-mobile ${person[1] ? 'active-option' : 'inactive-option'}`}
                                    key={index}
                                    onClick={() => {
                                        togglePerson(index);
                                        if (index === 2) {
                                            togglePerson(index + 1);
                                            togglePerson(index + 2);
                                        } else {
                                            togglePerson(index + 1);
                                        }
                                    }}>
                                    {shortenPerson(person)} / {shortenPerson(persons[index + 1])} {index === 2 && `/ ${shortenPerson(persons[index + 2])}`}
                                </p>
                            );
                        } else if (index === 3 || index === 4 || index === 8) {
                            return null; // Skip rendering
                        } else {
                            return (
                                <p 
                                    className={`info-column-mobile ${person[1] ? 'active-option' : 'inactive-option'}`}
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
