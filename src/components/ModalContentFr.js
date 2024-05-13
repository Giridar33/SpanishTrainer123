import React from 'react'

const ModalContentFr = ({ tense, teacherMode, infinitiveToAnswer }) => {

let modalContent = null;
    switch (tense[0]) {
        case "Imperfect":
            modalContent = (
                <div className='two-column-grid'>
                    <div className='column-table'>
                        <>
                            <p className='bold'>Je</p>
                            <p className='bold'>tu</p>
                            <p className='bold'>il/elle/on</p>
                            <p className='bold'>nous</p>
                            <p className='bold'>vous</p>
                            <p className='bold'>ils/elles</p>
                        </>
                    </div>
                    <div className='column-table'>
                        {tense[2].map((ending, index) => {
                            return <p key={index}>-{ending}</p>
                        })}
                    </div>
                </div>
            );
            break;

        case "Present":
            modalContent = (
                <div className='four-column-grid'>
                    <>
                        <p className='bold'>{teacherMode ? tense[0] : ""}</p>
                        <p className='bold'>Je</p>
                        <p className='bold'>tu</p>
                        <p className='bold'>il/elle/on</p>
                        <p className='bold'>nous</p>
                        <p className='bold'>vous</p>
                        <p className='bold'>ils/elles</p>
                    </>

                    <>
                        {tense[2].map((ending, index) => (
                            <React.Fragment key={index}>

                                {index === 0 ? (
                                    <>
                                        <p>-ER</p>
                                        <p>{ending}</p>
                                    </>

                                ) : index === 6 ? (
                                    <>
                                        <p>-IR</p>
                                        <p>{ending}</p>
                                    </>

                                ) : index === 12 ? (
                                    <>
                                        <p>-RE</p>
                                        <p>{ending}</p>
                                    </>
                                ) : (
                                    <p>{ending}</p>
                                )}
                            </React.Fragment>
                        ))}
                    </>
                </div>
            );
            break;
        case "Past Perfect":
            modalContent = (
                <div className='two-column-grid'>

                    <div className='column-table'>
                        {tense[1].map((ending, index) => {
                            return <p key={index}>{ending}</p>
                        })}
                    </div>
                    <div className='column-table center'>
                        <p>OR</p>
                    </div>
                    <div className='column-table'>
                        {tense[2].map((ending, index) => {
                            return <p key={index}>{ending}</p>
                        })}
                    </div>
                    <div className='column-table center'>
                        <p>➕</p>
                    </div>
                    <div className='column-table center'>
                        <p>-é</p>
                        <p>-i</p>
                        <p>-u</p>
                    </div>
                </div>
            );
            break;
       
        case "Immediate Future":
            modalContent = (
                <div className='two-column-grid'>
                    <div className='column-table'>
                        {tense[1].map((ending, index) => {
                            return <p key={index}>{ending}</p>
                        })}
                    </div>
                    <div className='column-table center'>
                        <p>➕</p>
                    </div>
                    <div className='column-table center'>
                        <p>Infinitive</p>
                    </div>
                </div>
            );
            break;
        case "Simple Future":
            modalContent = (
                <div className='two-column-grid'>
                    <div className='column-table center'>
                        <p>Infinitive</p>
                    </div>
                    <div className='column-table center'>
                        <p>➕</p>
                    </div>
                    <div className='column-table'>
                        <p>ai</p>
                        <p>ai</p>
                        <p>a</p>
                        <p>ons</p>
                        <p>ez</p>
                        <p>ont</p>
                    </div>
                    <div className='column-table'>
                        <>
                            <p className='bold'>I</p>
                            <p className='bold'>you</p>
                            <p className='bold'>he/she/we</p>
                            <p className='bold'>we</p>
                            <p className='bold'>you all</p>
                            <p className='bold'>they</p>
                        </>
                    </div>
                </div>
            );
            break;
        case "Conditional":
            modalContent = (
                <div className='two-column-grid'>
                    <div className='column-table center'>
                        <p>Infinitive</p>
                    </div>
                    <div className='column-table center'>
                        <p>➕</p>
                    </div>
                    <div className='column-table'>
                        <p>ais</p>
                        <p>ais</p>
                        <p>ait</p>
                        <p>ions</p>
                        <p>iez</p>
                        <p>aient</p>
                    </div>
                    <div className='column-table'>
                        <>
                            <p className='bold'>I</p>
                            <p className='bold'>You</p>
                            <p className='bold'>He/She</p>
                            <p className='bold'>We</p>
                            <p className='bold'>You all</p>
                            <p className='bold'>They</p>
                        </>
                    </div>
                </div>
            );
            break;
        default:
            modalContent = null;
    }

    switch (infinitiveToAnswer[7]) {
        case "irregular verb":

            modalContent = (
                <div className={`${teacherMode ? "nine-column-grid-teacherMode": "nine-column-grid"}`}>
                    <div className='irregulars-row'>
                        <div className='column-table'>
                            <p className='bold'>Past Perfect</p>
                            {infinitiveToAnswer[1].map((thing, index) => {
                                //the next bit of code will happen in every map() function
                                //it is basically to make sure the conjugated verb appears in the cheatsheet in
                                //an shortened version
                                //for example il/elle/on allé in one line instead of 3 lines
                                if (index === 2 || index === 3 || index === 7) {
                                    return null
                                } else if (index === 4) {
                                    return <p key={index}>Il / Elle / {thing[0]}</p>
                                } else if (index === 8) {
                                    return <p key={index}>Ils / {thing[0]}</p>
                                } else {
                                    return <p key={index}>{thing[0]}</p>
                                }
                            })}
                        </div>
                        <div className='column-table'>
                            <p className='bold'>Imperfect</p>
                            {infinitiveToAnswer[2].map((thing, index) => {
                                if (index === 2 || index === 3 || index === 7) {
                                    return null
                                } else if (index === 4) {
                                    return <p key={index}>Il / Elle / {thing[0]}</p>
                                } else if (index === 8) {
                                    return <p key={index}>Ils / {thing[0]}</p>
                                } else {
                                    return <p key={index}>{thing[0]}</p>
                                }
                            })}
                        </div>

                        <div className='column-table'>
                            <p className='bold'>Present</p>
                            {infinitiveToAnswer[3].map((thing, index) => {
                                if (index === 2 || index === 3 || index === 7) {
                                    return null
                                } else if (index === 4) {
                                    return <p key={index}>Il / Elle / {thing[0]}</p>
                                } else if (index === 8) {
                                    return <p key={index}>Ils / {thing[0]}</p>
                                } else {
                                    return <p key={index}>{thing[0]}</p>
                                }
                            })}
                        </div>
                    </div>

                    <div className='irregulars-row'>
                        <div className='column-table'>
                            <p className='bold'>Immediate Future</p>
                            {infinitiveToAnswer[4].map((thing, index) => {
                                if (index === 2 || index === 3 || index === 7) {
                                    return null
                                } else if (index === 4) {
                                    return <p key={index}>Il / Elle / {thing[0]}</p>
                                } else if (index === 8) {
                                    return <p key={index}>Ils / {thing[0]}</p>
                                } else {
                                    return <p key={index}>{thing[0]}</p>
                                }
                            })}
                        </div>

                        <div className='column-table'>
                            <p className='bold'>Simple Future</p>
                            {infinitiveToAnswer[5].map((thing, index) => {
                                if (index === 2 || index === 3 || index === 7) {
                                    return null
                                } else if (index === 4) {
                                    return <p key={index}>Il / Elle / {thing[0]}</p>
                                } else if (index === 8) {
                                    return <p key={index}>Ils / {thing[0]}</p>
                                } else {
                                    return <p key={index}>{thing[0]}</p>
                                }
                            })}
                        </div>
                        <div className='column-table'>
                            <p className='bold'>Conditional</p>
                            {infinitiveToAnswer[6].map((thing, index) => {
                                if (index === 2 || index === 3 || index === 7) {
                                    return null
                                } else if (index === 4) {
                                    return <p key={index}>Il / Elle / {thing[0]}</p>
                                } else if (index === 8) {
                                    return <p key={index}>Ils / {thing[0]}</p>
                                } else {
                                    return <p key={index}>{thing[0]}</p>
                                }
                            })}
                        </div>

                    </div>
                </div>
            );
            break;
    }

  return modalContent
}

export default ModalContentFr;