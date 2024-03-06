import React from 'react';
import './Modal.css'

const Modal = (props) => {

    let modalContent = null;

    switch (props.tense[0]) {
        case "Preterite":
        case "Imperfect":
        case "Present":
            modalContent = (
                <div className='four-column-grid'>
                    <>
                        <p className='bold'>Persons</p>
                        <p className='bold'>Yo → I</p>
                        <p className='bold'>Tu → You</p>
                        <p className='bold'>Él/Ella → He/She</p>
                        <p className='bold'>Nosotros → We</p>
                        <p className='bold'>Vosotros → You all</p>
                        <p className='bold'>Ellos → They</p>
                    </>

                    <>
                        {props.tense[2].map((ending, index) => (
                            <React.Fragment key={index}>

                                {index === -0 ? (
                                    <>
                                        <p>-AR Endings</p>
                                        <p>{ending}</p>
                                    </>

                                ) : index === 6 ? (
                                    <>
                                        <p>-ER Endings</p>
                                        <p>{ending}</p>
                                    </>

                                ) : index === 12 ? (
                                    <>
                                        <p>-IR Endings</p>
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
        case "Perfect":
            modalContent = (
                <div className='two-column-grid'>
                    <div className='column-table'>
                        <>
                            <p className='bold'>Yo → I</p>
                            <p className='bold'>Tu → You</p>
                            <p className='bold'>Él/Ella → He/She</p>
                            <p className='bold'>Nosotros → We</p>
                            <p className='bold'>Vosotros → You all</p>
                            <p className='bold'>Ellos → They</p>
                        </>
                    </div>
                    <div className='column-table'>
                        {props.tense[1].map((ending, index) => {
                            return <p key={index}>{ending}</p>
                        })}
                    </div>
                    <div className='column-table center'>
                        <p>➕</p>
                    </div>
                    <div className='column-table center'>
                        <p>-ado / -ido</p>
                    </div>
                </div>
            );
            break;
        case "Present Continuous":
            modalContent = (
                <div className='two-column-grid'>
                    <div className='column-table'>
                        <>
                            <p className='bold'>Yo → I</p>
                            <p className='bold'>Tu → You</p>
                            <p className='bold'>Él/Ella → He/She</p>
                            <p className='bold'>Nosotros → We</p>
                            <p className='bold'>Vosotros → You all</p>
                            <p className='bold'>Ellos → They</p>
                        </>
                    </div>
                    <div className='column-table'>
                        {props.tense[1].map((ending, index) => {
                            return <p key={index}>{ending}</p>
                        })}
                    </div>
                    <div className='column-table center'>
                        <p>➕</p>
                    </div>
                    <div className='column-table center'>
                        <p>-ando / -iendo</p>
                    </div>
                </div>
            );
            break;
        case "Immediate Future":
            modalContent = (
                <div className='two-column-grid'>
                    <div className='column-table'>
                        <>
                            <p className='bold'>Yo → I</p>
                            <p className='bold'>Tu → You</p>
                            <p className='bold'>Él/Ella → He/She</p>
                            <p className='bold'>Nosotros → We</p>
                            <p className='bold'>Vosotros → You all</p>
                            <p className='bold'>Ellos → They</p>
                        </>
                    </div>
                    <div className='column-table'>
                        {props.tense[1].map((ending, index) => {
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
                            <p className='bold'>Yo → I</p>
                            <p className='bold'>Tu → You</p>
                            <p className='bold'>Él/Ella → He/She</p>
                            <p className='bold'>Nosotros → We</p>
                            <p className='bold'>Vosotros → You all</p>
                            <p className='bold'>Ellos → They</p>
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
                            <p className='bold'>Yo → I</p>
                            <p className='bold'>Tu → You</p>
                            <p className='bold'>Él/Ella → He/She</p>
                            <p className='bold'>Nosotros → We</p>
                            <p className='bold'>Vosotros → You all</p>
                            <p className='bold'>Ellos → They</p>
                        </>
                    </div>
                </div>
            );
            break;
    }

    return (
        <div className='modal-backdrop' onClick={props.handleModal}>
            <div className='modal'>
                <h3>{props.tense[0]} Cheatsheet</h3>
                <p>{props.tense[3]}</p>
                {modalContent}
                <p className='bold'>Examples</p>
                {props.tense[4].map((example, index) => {
                    return <p key={index}>{example}</p>
                })}
            </div>
        </div>
    )
}

export default Modal;