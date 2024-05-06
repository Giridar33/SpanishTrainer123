import React from 'react'

const ModalContentFr = ({ tense, teacherMode }) => {

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

  return modalContent
}

export default ModalContentFr;