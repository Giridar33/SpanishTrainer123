import React from 'react';

const Tenses = ({ toggleAllVerbOptions }) => {
    return (
        <div className='tense-list'>
            <h2 onClick={toggleAllVerbOptions}>Present Tense</h2>
        </div>
    )
}

export default Tenses;
