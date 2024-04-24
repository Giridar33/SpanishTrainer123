import React from 'react';

const Tenses = ({ tenses, toggleTense }) => {

    return (
        <div className='tense-list'>
            <h2>Tense</h2>
            <div className='info-2'>
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
        </div>
    )
}

export default Tenses;