import React from 'react';
import './Modal.css'
import ModalContent from './ModalContentSp';

const Modal = ({ tense, handleModal, teacherMode, isReflexive }) => {

    return (
        <div className='modal-backdrop' onClick={handleModal}>
            <div className='modal'>
                <h3>{tense[0]} Cheatsheet</h3>
                <p>{tense[3]}</p>
                <ModalContent 
                    handleModal={handleModal}
                    tense={tense}
                    teacherMode={teacherMode}/>
                <p className='bold'>Examples</p>
                {tense[4].map((example, index) => {
                    return <p key={index}>{example}</p>
                })}
                <p className='bold'>Irregulars</p>
                <p>{tense[5]}</p>
                {isReflexive && 
                <>
                    <p className='bold'>Reflexive verbs</p>
                    <p>Remember you need to add the reflexive particle before the verb!</p>
                    <p>These endings are 'me', 'te', 'se', 'nos', 'os', 'se'</p>
                </>}
            </div>
        </div>
    )
}

export default Modal;