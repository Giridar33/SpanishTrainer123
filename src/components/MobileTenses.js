import React from 'react'

export default function MobileTenses({ showMobileTenses, 
                                        setShowMobileTenses, 
                                        setShowMobilePersons,
                                        setShowMobileInfinitives,
                                        tenses, 
                                        toggleTense,
                                        resetState,
                                        setLabelsOn,
                                        setInputOn,
                                        tenseToAnswer }) {

const toggleMobileTenses = () => {
    resetState();
    setLabelsOn(false);
    setInputOn(false);
    setShowMobileInfinitives(false);
    setShowMobilePersons(false);
    setShowMobileTenses(prevState => !prevState)
}

  return (
    <div className='mobile-tenses'>
      <h2 onClick={toggleMobileTenses}>{tenseToAnswer ? tenseToAnswer[0] : "Select Tense"}</h2>
      {showMobileTenses && 
        <div className='info-2-mobile'>
            {tenses.map((tense, index) => {
                return (
                    <p 
                        className={`info-column ${tense[6] ? 'active-option' : 'inactive-option'}`}
                        key={index} 
                        onClick={() => toggleTense(index)}>
                        {tense[0]}
                    </p>)
            })}
        </div>
      }
    </div>
  )
}
