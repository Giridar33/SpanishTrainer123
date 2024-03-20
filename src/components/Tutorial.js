import React from 'react'
import './Modal.css'

export default function Tutorial(props) {
  return (
    <div className='modal-backdrop' onClick={props.handleTutorial}>
      <div className='modal'>
        <h3>Welcome to the Spanish Verbs Trainer!</h3>
        <p>Click on the 'Play' button (or press Ctrl on your Keyboard) and you will be given a random infinitive, verb tense and person (I form, you form etc).</p>
        <p>Remember you can always click on the 'Help' button to see a cheatsheet of the current tense.</p>
        <p>Once you have the solution you can click on the 'Check' button (or press Enter on your Keyboard).</p>
        <p>You have 3 tries each time.</p>
        <p>Don't forget you can de-activate any of the tenses or persons, you can practice whatever you need to practice!</p>
      </div>
    </div>
  )
}
