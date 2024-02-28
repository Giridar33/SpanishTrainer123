import React, { useState } from 'react';
import data from '../data.json';

const Tenses = () => {
    const { tenses } = data;

    // State to track the selected tenses

    return (
        <div className='tense-list'>
            <h2>Tense</h2>
            <div className='info-2'>
                {tenses.map((tense, index) => {
                    return <p className="info-column" key={index}>{tense[0]}</p>
                })}
            </div>
        </div>
    )
}

export default Tenses;