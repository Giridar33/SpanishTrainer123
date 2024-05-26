import React from 'react'

export default function MobilePersons({ showMobilePersons, 
                                        setShowMobilePersons, 
                                        setShowMobileTenses,
                                        setShowMobileInfinitives,
                                        persons, 
                                        togglePerson,
                                        resetState,
                                        setLabelsOn,
                                        setInputOn,
                                        personToAnswer,
                                        shortenPerson }) {

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
                    return (
                        <p 
                            className={`info-column-mobile ${(person[0][0])}${index} ${person[1] ? 'active-option' : 'inactive-option'}`}
                            key={index}
                            onClick={() => togglePerson(index)}>
                            {shortenPerson(person)}
                        </p>)
                })}
            </div>
        }
    </div>
  )
}
