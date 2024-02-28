import React from 'react';
import data from '../data.json';

const Infinitives = () => {
    const { infinitives } = data;

    return (
        <div className="infinitive-list">
            <h2>Infinitive</h2>
            <div className='info-1'>
                {infinitives.map((infinitive, index) => (
                    <p className="info-column" key={index}>{infinitive}</p>
                ))}
            </div>
        </div>
    )
}

export default Infinitives;