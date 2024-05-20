import React from 'react';
import './Modal.css'
import ModalContent from './ModalContentSp';

const Modal = ({ tense, handleModal, teacherMode, isReflexive, infinitiveToAnswer }) => {

    return (
        <div className='modal-backdrop' onClick={handleModal}>
            <div className='modal'>
                {infinitiveToAnswer[9] != "irregular" &&
                    <h3>{tense[0]} Cheatsheet</h3>
                }
                {infinitiveToAnswer[9] === "irregular" &&
                    <h3>Verb '{infinitiveToAnswer[0]}' Cheatsheet</h3>
                }
                {infinitiveToAnswer[9] != "irregular" &&
                    <p>{tense[3]}</p>
                }
                {infinitiveToAnswer[9] === "irregular" &&
                    <p>The verb '{infinitiveToAnswer[0]}' is irregular!</p>
                }
                
                <ModalContent 
                    handleModal={handleModal}
                    tense={tense}
                    teacherMode={teacherMode}
                    infinitiveToAnswer={infinitiveToAnswer}
                    />

                {infinitiveToAnswer[9] != "irregular" && 
                    <>
                        <p className='modal-section'>Examples</p>
                        {tense[4].map((example, index) => {
                            return <p key={index}>{example}</p>
                        })}
                        <p className='modal-section'>Irregulars</p>
                        <p>{tense[5]}</p>
                        {isReflexive && 
                        <>
                            <p className='bold'>Reflexive verbs</p>
                            <p>Remember you need to add the reflexive particle before the verb!</p>
                            <p>These endings are 'me', 'te', 'se', 'nos', 'os', 'se'</p>
                        </>}
                    </>
                
                }

                
                
                
            </div>
        </div>
    )
}

export default Modal;