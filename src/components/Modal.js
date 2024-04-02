import React from 'react';
import './Modal.css'
import ModalContent from './ModalContent';

const Modal = ({ tense, handleModal, teacherMode }) => {

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
            </div>
        </div>
    )
}

export default Modal;