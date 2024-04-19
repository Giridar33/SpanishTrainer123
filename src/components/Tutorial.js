import React from 'react'
import './Modal.css'

export default function Tutorial(props) {
  return (
    <div className='modal-backdrop' onClick={props.handleTutorial}>
      <div className='modal'>
        <h3>Welcome to the Spanish Verbs Trainer!</h3>
        <h4>Student Mode</h4>
        <p>Click on the 'Play' button (or press '/' on your Keyboard) and you will be given a random infinitive, verb tense and person (I form, you form, etc).</p>
        <p>Remember you can always click on the 'Help' button to see a cheatsheet of the current tense.</p>
        <p>Once you have the solution you can click on the 'Check' button (or press Enter on your Keyboard).</p>
        <p>You have 3 tries each time.</p>
        <p>Don't forget you can deactivate any of the tenses or persons, you can practice whatever you need to practice!</p>
        <h4>Teacher Mode</h4>
        <p>You can toggle between Student and Teacher Mode with the top right button.</p>
        <p>Select the desired tenses and persons and set the timer (20 seconds by default).</p>
        <p>When you click on 'Play' (or press '/'), a random infinitive, tense and person are selected, and the cheatsheet will appear automatically.</p>
        <p>Ask your students and click on the 'Show Answer' button (or click '.') to see whether they deserve an AP.</p>
      </div>
    </div>
  )
}
