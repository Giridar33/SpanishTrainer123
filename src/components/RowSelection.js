import React from 'react';
import data from '../data.json';

const RowSelection = (props) => {
    const { infinitives, tenses, persons } = data;

    return (
        <div className="row-selection">
            <h3>{props.randomInfinitive ? props.randomInfinitive : ""}</h3>
            <h3>{props.randomTense ? props.randomTense[0] : ""}</h3>
            <h3>{props.randomPerson ? props.randomPerson : ""}</h3>
        </div>
    )
}

export default RowSelection;