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
                                        personToAnswer }) {

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
      <h2 onClick={toggleMobilePersons}>{personToAnswer ? personToAnswer : "Select Person"}</h2>
      {showMobilePersons && 
            <div className='info-3-mobile'>
                {persons.map((person, index) => {
                    return (
                        <p 
                            className={`info-column-mobile ${person[1] ? 'active-option' : 'inactive-option'}`}
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
