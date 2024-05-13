import React from 'react'

const ModalContent = ({ tense, teacherMode, infinitiveToAnswer }) => {

let modalContent = null;



    switch (tense[0]) {
        case "Preterite":
        case "Imperfect":
        case "Present":
            modalContent = (
                <div className='four-column-grid'>
                    <>
                        <p className='bold'>{teacherMode ? tense[0] : ""}</p>
                        <p className='bold'>I</p>
                        <p className='bold'>You</p>
                        <p className='bold'>He/She</p>
                        <p className='bold'>We</p>
                        <p className='bold'>You all</p>
                        <p className='bold'>They</p>
                    </>

                    <>
                        {tense[2].map((ending, index) => (
                            <React.Fragment key={index}>

                                {index === 0 ? (
                                    <>
                                        <p>-AR</p>
                                        <p>{ending}</p>
                                    </>

                                ) : index === 6 ? (
                                    <>
                                        <p>-ER</p>
                                        <p>{ending}</p>
                                    </>

                                ) : index === 12 ? (
                                    <>
                                        <p>-IR</p>
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
                        <>
                            <p className='bold'>I</p>
                            <p className='bold'>You</p>
                            <p className='bold'>He/She</p>
                            <p className='bold'>We</p>
                            <p className='bold'>You all</p>
                            <p className='bold'>They</p>
                        </>
                    </div>
                    <div className='column-table'>
                        {tense[1].map((ending, index) => {
                            return <p key={index}>{ending}</p>
                        })}
                    </div>
                    <div className='column-table center'>
                        <p>➕</p>
                    </div>
                    <div className='column-table center'>
                        <p>-ado</p>
                        <p>-ido</p>
                    </div>
                </div>
            );
            break;
        case "Present Continuous":
            modalContent = (
                <div className='two-column-grid'>
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
                    <div className='column-table'>
                        {tense[1].map((ending, index) => {
                            return <p key={index}>{ending}</p>
                        })}
                    </div>
                    <div className='column-table center'>
                        <p>➕</p>
                    </div>
                    <div className='column-table center'>
                        <p>-ando</p>
                        <p>-iendo</p>
                    </div>
                </div>
            );
            break;
        case "Immediate Future":
            modalContent = (
                <div className='two-column-grid'>
                    <div className='column-table'>
                        {tense[1].map((ending, index) => {
                            return <p key={index}>{ending.slice(0, -2)}</p>
                        })}
                    </div>
                    <div className='column-table center'>
                        <p>➕</p>
                    </div>
                    <div className='column-table center'>
                        <p>a</p>
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
                        <p>é</p>
                        <p>ás</p>
                        <p>á</p>
                        <p>emos</p>
                        <p>éis</p>
                        <p>án</p>
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
                        <p>ía</p>
                        <p>ías</p>
                        <p>ía</p>
                        <p>íamos</p>
                        <p>íais</p>
                        <p>ían</p>
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

        switch (infinitiveToAnswer[9]) {
        case "irregular":

            modalContent = (
                <div className={`${teacherMode ? "nine-column-grid-teacherMode": "nine-column-grid"}`}>
                    <div className='irregulars-row'>
                        <div className='column-table'>
                            <p className='bold'>Preterite</p>
                            {infinitiveToAnswer[1].map((thing, index) => {
                                return <p key={index}>{thing[0]}</p>
                            })}
                        </div>
                        <div className='column-table'>
                            <p className='bold'>Imperfect</p>
                            {infinitiveToAnswer[2].map((thing, index) => {
                                return <p key={index}>{thing[0]}</p>
                            })}
                        </div>
                        <div className='column-table'>
                            <p className='bold'>Past Perfect</p>
                            {infinitiveToAnswer[3].map((thing, index) => {
                                return <p key={index}>{thing[0]}</p>
                            })}
                        </div>

                        <div className='column-table'>
                            <p className='bold'>Present Continuous</p>
                            {infinitiveToAnswer[5].map((thing, index) => {
                                return <p key={index}>{thing[0]}</p>
                            })}
                        </div>
                    </div>

                    <div className='irregulars-row'>
                        <div className='column-table'>
                            <p className='bold'>Present</p>
                            {infinitiveToAnswer[4].map((thing, index) => {
                                return <p key={index}>{thing[0]}</p>
                            })}
                        </div>

                        <div className='column-table'>
                            <p className='bold'>Immediate Future</p>
                            {infinitiveToAnswer[6].map((thing, index) => {
                                return <p key={index}>{thing[0]}</p>
                            })}
                        </div>
                        <div className='column-table'>
                            <p className='bold'>Simple Future</p>
                            {infinitiveToAnswer[7].map((thing, index) => {
                                return <p key={index}>{thing[0]}</p>
                            })}
                        </div>
                        <div className='column-table'>
                            <p className='bold'>Conditional</p>
                            {infinitiveToAnswer[8].map((thing, index) => {
                                return <p key={index}>{thing[0]}</p>
                            })}
                        </div>
                    </div>
                </div>
            );
            break;
    }

  return modalContent
}

export default ModalContent;