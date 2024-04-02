//Imports
import { useState, useRef, useEffect } from 'react';
import './App.css';

//React components
import Infinitives from './components/Infinitives';
import Tenses from './components/Tenses';
import Persons from './components/Persons';
import RowSelection from './components/RowSelection';
import Modal from './components/Modal';
import Tutorial from './components/Tutorial';
import SetSeconds from './components/SetSeconds';

//Data file containing all verbs' info
import data from './data.json'
import ModalContent from './components/ModalContent';


function App() {

  // We create a ref for the input element (in order to have the input targeted when we click on Play)
  const inputRef = useRef(null);

  //We deconstruct all information needed from the json file
  const { infinitives, tenses, persons } = data;

  let countdown;

  //----STATE------STATE----------STATE--------STATE--------STATE--------STATE-------STATE--------//

  const [jsonData, setJsonData] = useState(data);

  // Sets teacher mode on or off
  const [teacherMode, setTeacherMode] = useState(false)
  const [secondsByUser, setSecondsByUser] = useState(20); //seconds chosen by the user
  const [countdownInterval, setCoundownInterval] = useState(null) //countdown

  //These are here to store the user answer
  const [userAnswer, setUserAnswer] = useState('');
  const [input, setInput] = useState('');

  // Having the gameOn mode will avoid unwanted behaviours when clicking on the Play and Check buttons
  const [gameIsOn, setGameIsOn] = useState(false);
  const [gameOver, setGameOver] = useState(true);

  //These are the final infinitive, tense and person that the user needs to guess
  const [infinitiveToAnswer, setInfinitiveToAnswer] = useState('');
  const [tenseToAnswer, setTenseToAnswer] = useState('');
  const [personToAnswer, setPersonToAnswer] = useState();

  //This is the definitive verb that the userNeeds to guess
  const [finalWord, setFinalWord] = useState('');

  //This state changes the style of the text when you give the right/wrong answer
  const [rightAnswer, setRightAnswer] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);

  const [userTries, setUserTries] = useState(3);

  // Showing the modal or tutorial
  const [showModal, setShowModal] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);

  // We store this value to true if the user has switched off all tenses, to avoid bugs
  const [allTensesFalse, setAllTensesFalse] = useState(false);
  const [allPersonsFalse, setAllPersonsFalse] = useState(false);




  //-------FUNCTIONS----FUNCTIONS-------FUNCTIONS--------FUNCTIONS-------FUNCTIONS-------FUNCTIONS-----FUNCTIONS------

  const resetState = () => {
    setInput("");
    setUserAnswer("");
    setRightAnswer(false);
    setWrongAnswer(false);
    setUserTries(3);
    setFinalWord("");
    setTenseToAnswer("");
    setInfinitiveToAnswer("");
    setPersonToAnswer("");
    setShowModal(false);
  }

  // Enables the functionality to toggle the tenses on or off
  const toggleTense = (index) => {
    const updatedTenses = [...jsonData.tenses];
    updatedTenses[index][5] = !updatedTenses[index][5];
    setJsonData({ ...jsonData, tenses: updatedTenses })

    //We check whether all tenses have been set to false by the user
    const allFalse = updatedTenses.every(tense => !tense[5]);
    setAllTensesFalse(allFalse);
  }

  const togglePerson = (index) => {
    const updatedPersons = [...jsonData.persons];
    updatedPersons[index][1] = !updatedPersons[index][1];
    setJsonData({ ...jsonData, persons: updatedPersons})

    const allFalse = updatedPersons.every(person => !person[1]);
    setAllPersonsFalse(allFalse);
  }

  // Switches the value of showModal true/false
  const handleModal = () => {
    if (gameIsOn) {
      setShowModal(prevValue => !prevValue)
    }
  }

    // Switches the value of showTutorial true/false
  const handleTutorial = () => {
      setShowTutorial(prevValue => !prevValue)
  }

  //Function that selects the random verb that the user needs to guess
  const handlePlay = () => {

    clearInterval(countdownInterval);

    //delete previous user input, delete all previous state values
    resetState();

    //Set Game to mode ON
    setGameIsOn(true);
    setGameOver(false);

    //Restore user tries to 3
    setUserTries(3);

    if (allTensesFalse || allPersonsFalse) {
      setInput('Select at least one tense and person!');
      return;
    }

    // We filter all active persons
    const activePersons = persons.filter((person) => person[1])

    if (activePersons.length === 0) {
      setInput('Select at least one person!');
      return;
    }

    //choose infinitive
    let randomInfinitiveIndex = Math.floor(Math.random() * infinitives.length);
    let varInfinitiveToAnswer = infinitives[randomInfinitiveIndex];

    //choose tense
    let randomTenseIndex = Math.floor(Math.random() * tenses.length);
    let varTenseToAnswer = tenses[randomTenseIndex];
    //here we add a while loop to make sure we don't return a tense that has been turned off by the user
    while (varTenseToAnswer[5] === false) {
          randomTenseIndex = Math.floor(Math.random() * tenses.length);
          varTenseToAnswer = tenses[randomTenseIndex];
    }

    //choose person
    let randomPersonIndex = Math.floor(Math.random() * activePersons.length)
    let varPersonToAnswer = activePersons[randomPersonIndex];

    let begin = varTenseToAnswer[1][randomPersonIndex];

    if (varInfinitiveToAnswer.slice(-2) === 'er') {
      randomPersonIndex += 6;
    } else if (varInfinitiveToAnswer.slice(-2) === 'ir') {
      randomPersonIndex += 12;
    }
    let ending = varTenseToAnswer[2][randomPersonIndex]

    setFinalWord(begin + varInfinitiveToAnswer.slice(0, -2) + ending);
    let varFinalWord = begin + varInfinitiveToAnswer.slice(0, -2) + ending;

    //turn variables into state
    setInfinitiveToAnswer(varInfinitiveToAnswer);
    setTenseToAnswer(varTenseToAnswer);
    setPersonToAnswer(varPersonToAnswer);
    setFinalWord(varFinalWord);

    countdown = secondsByUser;
    if (!teacherMode) {
      // Focus the input element after setting the game
      // It was necessary to include this on a setTimeout to make sure it happened immediately after first click
      setTimeout(() => {
        inputRef.current.focus();
      }, 0);
    } else {
      setInput(secondsByUser);
      setCoundownInterval(
        setInterval(() => {
          countdown--;
          setInput(countdown.toString());
          if (countdown <= 0) {
            clearInterval(countdownInterval);
            setGameIsOn(false);
          }
        }, 1000)
      )
    }

  }

  //Function that checks whether the user was right in his guess
  const handleCheck = () => {
    if (gameIsOn) {
      if (userTries > 0) {
        if (input !== "") {
          //tidy user input (set to lower case, delete accents, diacritics, etc)
          let newInput = input.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
          let newFinalWord = finalWord.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

          setUserAnswer(newInput);
          //setInput('');
          if (newInput === newFinalWord) {
            setRightAnswer(true);
            setInput(finalWord);
            setGameIsOn(false);
            setGameOver(true);
            setWrongAnswer(false);
          } else if (newInput !== newFinalWord && userTries === 1) {
            setUserTries(0)
            setWrongAnswer(true);
            setInput(`The answer was "${finalWord}"`)
            setGameOver(true);
          } else {
            setWrongAnswer(true);
            setInput(input);
            setUserTries(prevTries => prevTries - 1)
          }
        } else { setInput("Type your answer!") };
      }
    }
  }

  // useEffect to add event listeners to buttons
  useEffect(() => {
    if (!teacherMode) {
      const handleKeyDown = (event) => {
        if (event.key === '/') {
          handlePlay();
          event.preventDefault() //this prevents the character '/' from appearing in the input
        } else if (event.key === 'Enter') {
          handleCheck();
        } 
      };
        //Add event listeners to the document for keydown events
        document.addEventListener('keydown', handleKeyDown);

        //Cleanup function to remove event listener when component unmounts
        return() => {
          document.removeEventListener('keydown', handleKeyDown)
        };
      }
  }, []);

  // This useEffect is here so that the countdown can be interrupted when clicking on showAnswer
  useEffect(() => {
    if (!gameIsOn) {
      clearInterval(countdownInterval);
    }
  }, [gameIsOn])

  // This function appears only on Teacher mode, letting the teacher show the correct answer
  const showAnswer = () => {
    if (finalWord) {
      setRightAnswer(true);
      setInput(finalWord);
      setGameIsOn(false);
    }
  }

  const toggleTeacherMode = () => {
    setGameIsOn(false);
    setGameOver(true);
    setTeacherMode(prevValue => !prevValue);
    resetState();
  }



  return (
    // al final borre el estilo de la clase teacher, tal vez puedas borrarlo de la siguiente linea
    <div className={`App ${teacherMode ? "teacher" : ""}`}>
      <div className="framework">

        <div className='title-row'>
          <button className='top-button' onClick={handleTutorial}><span class="material-symbols-outlined">help</span></button>
          <h1 className="title">Spanish verbs trainer: {teacherMode ? "Teacher Mode" : "Student Mode"}</h1>
          <button 
            className='top-button'
            onClick={toggleTeacherMode}>
            <span class="material-symbols-outlined">person_raised_hand</span>
          </button>
        </div>
        
        {!teacherMode && <p className='tries'>{`Remaining tries: ${userTries}`}</p>}

        <div className="row1">
          <Infinitives infinitives={Infinitives} />
          <Tenses tenses={tenses} toggleTense={toggleTense}/>
          <Persons persons={persons} togglePerson={togglePerson}/>
        </div>

        <div className="row2">
          <RowSelection
            randomInfinitive={infinitiveToAnswer}
            randomTense={tenseToAnswer}
            randomPerson={personToAnswer}
          />
          <input
            className="user-text"
            id={(rightAnswer ? "correct-answer" : "") + (wrongAnswer ? "incorrect-answer" : "")}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault(); //this line avoids the enter button to trigger input form submission
                handleCheck();
              }
            }}
            disabled={gameOver}
            ref={inputRef}
          />
          <div className='button-group'>
            <button className='main-button' role="button" onClick={handlePlay}>Play</button>
            {!teacherMode && <button className='main-button' onClick={handleCheck}>Check</button>}
            {!teacherMode && <button className='main-button' onClick={handleModal}>Help</button>}
            {teacherMode && <button className='main-button' onClick={showAnswer}>Show Answer</button>}
            {teacherMode && <SetSeconds secondsByUser={secondsByUser} setSecondsByUser={setSecondsByUser}/>}
            
          </div>
        </div>

      </div>
      {showModal &&
        <Modal
          handleModal={handleModal}
          tense={tenseToAnswer}
        />}
      {showTutorial &&
        <Tutorial handleTutorial={handleTutorial}/>
      }
      {teacherMode && tenseToAnswer &&
        <div className='modal'>
          <ModalContent
          handleModal={handleModal}
          tense={tenseToAnswer}
          teacherMode={teacherMode}
          />
        </div>}
    </div>
  );
}

export default App;
