import React from 'react';

const RowSelection = (props) => {

    return (
        <div className="row-selection">
            <h3>{props.randomInfinitive ? props.randomInfinitive[0] : ""}</h3>
            <h3>{props.randomTense ? props.randomTense[0] : ""}</h3>
            <h3>{props.randomPerson ? props.randomPerson : ""}</h3>
        </div>
    )
}

export default RowSelection;