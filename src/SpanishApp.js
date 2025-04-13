import { useState, useRef, useEffect } from 'react';
import './App.css';
import './components/Mobile.css';

// React components
import Infinitives from './components/InfinitivesSp';
import Tenses from './components/Tenses';
import Persons from './components/PersonsSp';
import Modal from './components/ModalSp';
import Tutorial from './components/Tutorial';
import SetSeconds from './components/SetSeconds';
import MobileInfinitives from './components/MobileInfinitivesSp';
import MobileTenses from './components/MobileTenses';
import MobilePersons from './components/MobilePersonsSp';
import ModalContent from './components/ModalContentSp';
import ReflexiveModal from './components/ReflexiveModalSp';
import SpecialCharactersSp from './components/SpecialCharactersSp';

// Data file
import data from './spanish-data.json';

function SpanishApp() {
  const inputRef = useRef(null);
  const { infinitives, tenses, persons } = data;

  const initialData = {
    ...data,
    infinitives: data.infinitives.map((inf, index) =>
      index === 0 ? [...inf.slice(0, 10), true] : inf
    ),
    tenses: data.tenses.map(tense => {
      const enabled = tense.name === "present tense";
      return {
        ...tense,
        [6]: enabled
      };
    }),
    persons: data.persons.map((person, index) =>
      index === 0 ? [person[0], true] : person
    )
  };

  const [jsonData, setJsonData] = useState(initialData);
  const [labelsOn, setLabelsOn] = useState(false);
  const [inputOn, setInputOn] = useState(false);
  const [teacherMode, setTeacherMode] = useState(false);
  const [secondsByUser, setSecondsByUser] = useState(20);
  const [countdownInterval, setCountdownInterval] = useState(null);
  const [countdownDisplay, setCountdownDisplay] = useState('');
  const [input, setInput] = useState('');
  const [gameIsOn, setGameIsOn] = useState(false);
  const [gameOver, setGameOver] = useState(true);
  const [infinitiveToAnswer, setInfinitiveToAnswer] = useState('');
  const [tenseToAnswer, setTenseToAnswer] = useState('');
  const [personToAnswer, setPersonToAnswer] = useState();
  const [finalWord, setFinalWord] = useState('');
  const [englishFinalWord, setEnglishFinalWord] = useState('');
  const [isReflexive, setIsReflexive] = useState(false);
  const [rightAnswer, setRightAnswer] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [userTries, setUserTries] = useState(3);
  const [showModal, setShowModal] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const [allInfinitivesFalse, setAllInfinitivesFalse] = useState(false);
  const [allIrregularsFalse, setAllIrregularsFalse] = useState(false);
  const [allTensesFalse, setAllTensesFalse] = useState(false);
  const [allPersonsFalse, setAllPersonsFalse] = useState(false);
  const [showMobileInfinitives, setShowMobileInfinitives] = useState(false);
  const [showMobileTenses, setShowMobileTenses] = useState(false);
  const [showMobilePersons, setShowMobilePersons] = useState(false);

  // Function to remove accents
  const removeAccents = (str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  // Function to play wrong sound
  const playWrongSound = () => {
    const wrongSound = new Audio(process.env.PUBLIC_URL + '/sound/wrong.mp3');
    wrongSound.currentTime = 0;
    wrongSound.play().catch(e => console.log("Error playing wrong sound:", e));
  };

  // Function to play sound for the given word
  const playSound = (word) => {
    try {
      const cleanWord = removeAccents(word);
      const wordSound = new Audio(`${process.env.PUBLIC_URL}/sound/${cleanWord}.mp3`);
      wordSound.currentTime = 0;
      wordSound.play().catch((e) => console.log('Audio play failed:', e));
    } catch (e) {
      console.log('Sound error:', e);
    }
  };

  // Play sound only when finalWord is set and answer is correct
  useEffect(() => {
    if (finalWord && rightAnswer) {
      playSound(finalWord);
      const timer = setTimeout(() => {
        setRightAnswer(false); // reset after playing
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [finalWord, rightAnswer]);
  




  

  //-------FUNCTIONS----FUNCTIONS-------FUNCTIONS--------FUNCTIONS-------FUNCTIONS-------FUNCTIONS-----FUNCTIONS------

  const resetState = () => {
    setInput("");
    setRightAnswer(false);
    setWrongAnswer(false);
    setUserTries(3);
    setFinalWord("");
    setEnglishFinalWord("");
    setTenseToAnswer("");
    setInfinitiveToAnswer("");
    setPersonToAnswer("");
    setShowModal(false);
    setIsReflexive(false);
  }

  // Enables the functionality to toggle the tenses on or off
    const toggleTense = (index) => {
    const updatedTenses = jsonData.tenses.map(tense => {
      // Only enable present tense, disable all others
      tense[6] = tense.name === "present tense";
      return tense;
    });
    setJsonData({ ...jsonData, tenses: updatedTenses });
    setAllTensesFalse(false); // Always false since present tense is always enabled
    resetState();
    setLabelsOn(false);
    setInputOn(false);
  }

  const togglePerson = (index) => {
    const updatedPersons = [...jsonData.persons];
    updatedPersons[index][1] = !updatedPersons[index][1];
    setJsonData({ ...jsonData, persons: updatedPersons })

    const allPFalse = updatedPersons.every(person => !person[1]);
    setAllPersonsFalse(allPFalse);
    resetState(); // we reset the game
    setLabelsOn(false);
    setInputOn(false);
  }

  // -------------------------Function to show all verb options on or off---------------------------------*/

  const toggleAllVerbOptions = () => {
    setShowMobileInfinitives(prevValue => !prevValue);
    setShowMobileTenses(prevValue => !prevValue);
    setShowMobilePersons(prevValue => !prevValue);
    resetState(); // we reset the game
    setLabelsOn(false);
    setInputOn(false);
  }

  // ----------------------------Functions to toggle the infinitives on and off------------------------------
  const toggle_ar = () => {
    const updatedInfinitives = jsonData.infinitives.map(infinitive => {
      //check if the infinitive is an -ar verb
      if (infinitive[9] === "-ar verb") {
        //set the 10th value to its opposite (true or false)
        infinitive[10] = !infinitive[10];
      }
      return infinitive
    })
    // update jsonData with modified values
    setJsonData({ ... jsonData, infinitives: updatedInfinitives})
    //We check whether all infinitives have been set to false by the user
    const allInfFalse = updatedInfinitives.every(infinitive => !infinitive[10]);
    setAllInfinitivesFalse(allInfFalse);
    resetState(); // we reset the game
    setLabelsOn(false);
    setInputOn(false);
  }

  const toggle_er = () => {
    const updatedInfinitives = jsonData.infinitives.map(infinitive => {
      //check if the infinitive is an -er verb
      if (infinitive[9] === "-er verb") {
        //set the 10th value to its opposite (true or false)
        infinitive[10] = !infinitive[10];
      }
      return infinitive
    })
    // update jsonData with modified values
    setJsonData({ ... jsonData, infinitives: updatedInfinitives})
    //We check whether all infinitives have been set to false by the user
    const allInfFalse = updatedInfinitives.every(infinitive => !infinitive[10]);
    setAllInfinitivesFalse(allInfFalse);
    resetState(); // we reset the game
    setLabelsOn(false);
    setInputOn(false);
  }

  const toggle_ir = () => {
    const updatedInfinitives = jsonData.infinitives.map(infinitive => {
      //check if the infinitive is an -ir verb
      if (infinitive[9] === "-ir verb") {
        //set the 10th value to its opposite (true or false)
        infinitive[10] = !infinitive[10];
      }
      return infinitive
    })
    // update jsonData with modified values
    setJsonData({ ... jsonData, infinitives: updatedInfinitives})
    //We check whether all infinitives have been set to false by the user
    const allInfFalse = updatedInfinitives.every(infinitive => !infinitive[10]);
    setAllInfinitivesFalse(allInfFalse);
    resetState(); // we reset the game
    setLabelsOn(false);
    setInputOn(false);
  }

  const toggle_reflexive = () => {
    const updatedInfinitives = jsonData.infinitives.map(infinitive => {
      if (infinitive[9] === "reflexive") {
        infinitive[10] = !infinitive[10];
      }
      return infinitive
    })
    setJsonData({ ... jsonData, infinitives: updatedInfinitives})
    const allInfFalse = updatedInfinitives.every(infinitive => !infinitive[10]);
    setAllInfinitivesFalse(allInfFalse);
    resetState(); //
    setLabelsOn(false);
    setInputOn(false);
  }

  const toggle_all_irregulars = () => {
    const updatedInfinitives = jsonData.infinitives.map(infinitive => {
      if (infinitive[9] === "irregular"){
        if (infinitives[27][10] === false) {
          infinitive[10] = true;
          setAllIrregularsFalse(true);
        } else if (infinitives[27][10] === true){
          infinitive[10] = false;
          setAllIrregularsFalse(false);
        }  
      }
      return infinitive
    })
    
    setJsonData({ ... jsonData, infinitives: updatedInfinitives})
    const allInfFalse = updatedInfinitives.every(infinitive => !infinitive[10]);
    setAllInfinitivesFalse(allInfFalse);
    resetState();
    setLabelsOn(false);
    setInputOn(false);
  }

  const toggle_individual_irregulars = (index) => {
    const updatedInfinitives = [...jsonData.infinitives];
    updatedInfinitives[index+20][10] = !updatedInfinitives[index+20][10];
    setJsonData({ ... jsonData, infinitives: updatedInfinitives})
    //here we check whether we have set all verbs to false
    const allInfFalse = updatedInfinitives.every(infinitive => !infinitive[10]);
    setAllInfinitivesFalse(allInfFalse);
    //here we check whether we have set all irregulars to false
    const allIrregularsFalse = (updatedInfinitives || [])
    .filter(infinitive => infinitive[9] === "irregular")
    .every(infinitive => !infinitive[10]);
  
  setAllIrregularsFalse(!allIrregularsFalse);
  

    resetState();
    setLabelsOn(false);
    setInputOn(false);
  }



  // Switches the value of showModal true/false
  const handleModal = () => {
    if (gameIsOn && finalWord !== "") {
      setShowModal(prevValue => !prevValue)
    }
  }

    // Switches the value of showTutorial true/false
  const handleTutorial = () => {
      setShowTutorial(prevValue => !prevValue)
  }

  //Function that selects the random verb that the user needs to guess
  const handlePlay = () => {

    setLabelsOn(true); // we make sure the info labels and input bar appear
    setInputOn(true);

    //we clear the interval of the countdown so there are no more than one running at the same time, creating bugs
    clearInterval(countdownInterval); 

    //delete previous user input, delete all previous state values
    resetState();

    //Set Game to mode ON
    setGameIsOn(true);
    setGameOver(false);

    //We make sure all verb options are closed on mobile
    setShowMobileInfinitives(false)
    setShowMobilePersons(false);
    setShowMobileTenses(false);

    //We make sure there is at least one tense and person active
    if (allInfinitivesFalse || allTensesFalse || allPersonsFalse) {
      setInput('Select at least one infinitive, tense and person!');
      setLabelsOn(false);
      return;
    }

    //choose infinitive
    if (!infinitives || infinitives.length === 0) {
      setInput('No infinitives available!');
      setLabelsOn(false);
      return;
    }
    
    // Get only active infinitives (where the last element is true)
    const activeInfinitives = infinitives.filter(inf => inf[inf.length-1] === true);
    
    if (activeInfinitives.length === 0) {
      setInput('No active infinitives available!');
      setLabelsOn(false);
      return;
    }
    
    const randomInfinitiveIndex = Math.floor(Math.random() * activeInfinitives.length);
    const varInfinitiveToAnswer = activeInfinitives[randomInfinitiveIndex];

    if (!varInfinitiveToAnswer) {
      setInput('No active infinitives available!');
      setLabelsOn(false);
      return;
    }

    if (varInfinitiveToAnswer[9] === "reflexive") {
      setIsReflexive(true);
    }

    // Default to present tense
    if (!tenses || tenses.length === 0) {
      setInput('No tenses available!');
      setLabelsOn(false);
      return;
    }
    console.log(tenses)
    let varTenseToAnswer = tenses.find(tense => tense[0] === "present tense");

    if (!varTenseToAnswer) {
      setInput('Simple present tense not found!');
      setLabelsOn(false);
      return;
    }

    //choose person
    if (!persons || persons.length === 0) {
      setInput('No persons available!');
      setLabelsOn(false);
      return;
    }

    // Get only active persons (where the second element is true)
    const activePersons = persons.filter(p => p[1] === true);
    
    if (activePersons.length === 0) {
      setInput('No active persons available!');
      setLabelsOn(false);
      return;
    }

    const randomPersonIndex = Math.floor(Math.random() * activePersons.length);
    const varPersonToAnswer = activePersons[randomPersonIndex];

    // Verify conjugation data exists
    if (!varInfinitiveToAnswer[6] || !varInfinitiveToAnswer[6][randomPersonIndex]) {
      setInput('Missing conjugation data!');
      setLabelsOn(false);
      return;
    }

    // Get the conjugation data (index 6 in infinitive array)
    const conjugations = varInfinitiveToAnswer[6];
    if (!conjugations || !conjugations[randomPersonIndex]) {
      setInput('Missing conjugation data!');
      setLabelsOn(false);
      return;
    }
    
    let varFinalWord = conjugations[randomPersonIndex][0];
    let varEnglishFinalWord = conjugations[randomPersonIndex][1];

    //turn variables into state
    setInfinitiveToAnswer(varInfinitiveToAnswer);
    setTenseToAnswer(varTenseToAnswer);
    setPersonToAnswer(varPersonToAnswer);
    setFinalWord(varFinalWord);
    setEnglishFinalWord(varEnglishFinalWord);
    // Play sound for the displayed verb
    playSound(varFinalWord);

    // Focus the input element after setting the game
    setTimeout(() => {
      inputRef.current.focus();
    }, 0);

    // Set up countdown if in teacher mode
    if (teacherMode) {
      let remainingTime = secondsByUser;
      setCountdownDisplay(remainingTime.toString());
      
      // Clear any existing interval
      if (countdownInterval) {
        clearInterval(countdownInterval);
      }
      
      const newInterval = setInterval(() => {
        remainingTime--;
        setCountdownDisplay(remainingTime.toString());
        
        if (remainingTime <= 0) {
          clearInterval(newInterval);
          setGameIsOn(false);
        }
      }, 1000);
      
      setCountdownInterval(newInterval);
    }
  }

  //Function that checks whether the user was right in his guess
  const handleCheck = () => {
    if (gameIsOn) {
      if (input !== "Select at least one tense and person!") {
        if (userTries > 0) {
          if (input !== "") {
            //tidy user input (set to lower case, delete accents, diacritics, etc)
            let newInput = input.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
            let newFinalWord = finalWord.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            
            //case where the user enters the right answer
            if (newInput === newFinalWord) {
              playSound(newInput);
              setRightAnswer(true);
              setInput(finalWord);
              setGameIsOn(false);
              setGameOver(true);
              setWrongAnswer(false);
              //case where the user enters the pronoun before the verb, which is unnecesary but not incorrect
            } else if ('yo ' + newFinalWord === newInput || 
                        'tu ' + newFinalWord === newInput || 
                        'el ' + newFinalWord === newInput || 
                        'ella ' + newFinalWord === newInput || 
                        'nosotros ' + newFinalWord === newInput || 
                        'vosotros ' + newFinalWord === newInput|| 
                        'ellos ' + newFinalWord === newInput || 
                        'ellas ' + newFinalWord === newInput
            ) {playSound();
              setRightAnswer(true);
              setInput(finalWord + " (no need to write the pronoun!)");
              setGameIsOn(false);
              setGameOver(true);
              setWrongAnswer(false);
              //case where the user doesnt enter the reflexive pronoun when it is needed
            //case where the user runs out of tries
            }else if (newInput !== newFinalWord && userTries === 1) {
              playWrongSound();
              setUserTries(0)
              setWrongAnswer(true);
              setInput(`The answer was "${finalWord}"`)
              setGameOver(true);
              //case where the user gets the wrong answer
            } else {
              playWrongSound();
              setWrongAnswer(true);
              setInput(input);
              setUserTries(prevTries => prevTries - 1)
            }
          } else { setInput("Type your answer!") }
        }
      }
    }
  }

  // This function appears only on Teacher mode, letting the teacher show the correct answer
  const showAnswer = () => {
    if (finalWord) {
      setRightAnswer(true);
      setInput(finalWord);///
      setGameIsOn(false);
    }
  }
  

  // useEffect to add event listeners to buttons
  useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === '/') {
          event.preventDefault() //this prevents the character '/' from appearing in the input
          handlePlay();
        } else if (event.key === '.') {
          if (teacherMode) {
            event.preventDefault() //this prevents the character '/' from appearing in the input
            showAnswer();
          }
        } 
      };
        //Add event listeners to the document for keydown events
        document.addEventListener('keydown', handleKeyDown);

        //Cleanup function to remove event listener when component unmounts
        return() => {
          document.removeEventListener('keydown', handleKeyDown)
        };
  }, [handlePlay, showAnswer, teacherMode]);

  // This useEffect is here so that the countdown can be interrupted when clicking on showAnswer
  useEffect(() => {
    if (!gameIsOn) {
      clearInterval(countdownInterval);
    }
  }, [countdownInterval, gameIsOn])

  const toggleTeacherMode = () => {
    setLabelsOn(false);
    setInputOn(false);
    setGameIsOn(false);
    setGameOver(true);
    setTeacherMode(prevValue => !prevValue);
    resetState();
  }

    const shortenPerson = (personToAnswer) => {
      if (personToAnswer[0] === "yo → I"){
        return "I";
      } else if (personToAnswer[0] === "tú → you"){
        return "you";
      } else if (personToAnswer[0] === "él/ella → he/she"){
        return "he / she";
      } else if (personToAnswer[0] === "nosotros → we"){
        return "we";
      } else if (personToAnswer[0] === "vosotros → you all"){
        return "you all";
      } else if (personToAnswer[0] === "ellos → they"){
        return "they";
      } else {
        return "";
      }
    }


  return (
    // al final borre el estilo de la clase teacher, tal vez puedas borrarlo de la siguiente linea
    <div className={`App ${teacherMode ? "teacher" : ""}`}>
      <div className="framework">

        <div className='title-row'>
          <button className='top-button' onClick={handleTutorial}><span className="material-symbols-outlined">help</span></button>
          <h1 className="title">Spanish verbs trainer: {teacherMode ? "Teacher Mode" : "Student Mode"}</h1>
          <button 
            className='top-button'
            onClick={toggleTeacherMode}>
            <span className="material-symbols-outlined">person_raised_hand</span>
          </button>
        </div>
        
        {!teacherMode && <p className='tries'>{`Remaining tries: ${userTries}`}</p>}

        <div className="row1">
          <Tenses 
            tenses={tenses} 
            toggleTense={toggleTense}
            showMobileTenses={showMobileTenses}
            toggleAllVerbOptions={toggleAllVerbOptions}
            tenseToAnswer={tenseToAnswer}
            />
          <Infinitives 
            infinitives={infinitives} 
            toggle_ar={toggle_ar} 
            toggle_er={toggle_er} 
            toggle_ir={toggle_ir}
            toggle_reflexive={toggle_reflexive}
            toggle_all_irregulars={toggle_all_irregulars} 
            toggle_individual_irregulars={toggle_individual_irregulars} 
            allIrregularsFalse={allIrregularsFalse}
            infinitiveToAnswer={infinitiveToAnswer}
            showMobileInfinitives={showMobileInfinitives}
            toggleAllVerbOptions={toggleAllVerbOptions}
            />
          <Persons 
            persons={persons} 
            togglePerson={togglePerson}
            showMobilePersons={showMobilePersons}
            toggleAllVerbOptions={toggleAllVerbOptions}
            shortenPerson={shortenPerson}
            personToAnswer={personToAnswer}
            />
        </div>

        <div className="mobile-row">
          <MobileTenses 
            showMobileTenses={showMobileTenses}
            setShowMobileTenses={setShowMobileTenses}
            setShowMobileInfinitives={setShowMobileInfinitives}
            setShowMobilePersons={setShowMobilePersons}
            tenses={tenses} 
            toggleTense={toggleTense}
            resetState={resetState}
            setLabelsOn={setLabelsOn}
            setInputOn={setInputOn}
            tenseToAnswer={tenseToAnswer}
            />
          <MobileInfinitives 
            showMobileInfinitives={showMobileInfinitives} 
            setShowMobileInfinitives={setShowMobileInfinitives}
            setShowMobileTenses={setShowMobileTenses}
            setShowMobilePersons={setShowMobilePersons}
            infinitives={infinitives} 
            toggle_ar={toggle_ar} 
            toggle_er={toggle_er} 
            toggle_ir={toggle_ir}
            toggle_reflexive={toggle_reflexive}
            toggle_all_irregulars={toggle_all_irregulars} 
            toggle_individual_irregulars={toggle_individual_irregulars} 
            allIrregularsFalse={allIrregularsFalse}
            resetState={resetState}
            setLabelsOn={setLabelsOn}
            setInputOn={setInputOn}
            infinitiveToAnswer={infinitiveToAnswer}
            />
          <MobilePersons 
            showMobilePersons={showMobilePersons}
            setShowMobilePersons={setShowMobilePersons}
            setShowMobileInfinitives={setShowMobileInfinitives}
            setShowMobileTenses={setShowMobileTenses}
            persons={persons} 
            togglePerson={togglePerson}
            resetState={resetState}
            setLabelsOn={setLabelsOn}
            setInputOn={setInputOn}
            shortenPerson={shortenPerson}
            personToAnswer={personToAnswer}
          />
        </div>

        <div className="row2">
          {teacherMode && inputOn && 
            <div className="countdown-display">
              Time remaining: {countdownDisplay}
            </div>
          }

          {inputOn && 
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
            />}

        </div>

          {inputOn && finalWord &&
            <div className='translation-label'>{`The meaning is: ${englishFinalWord}`}</div>
          }

      </div>

      <div className='button-group'>
        {!teacherMode && labelsOn && <button className='main-button squiggle' onClick={handleCheck}>Check</button>}
        {teacherMode && labelsOn && <button className='main-button squiggle' onClick={showAnswer}>Show Answer</button>}
        {teacherMode && !labelsOn && <div className='main-button dummy-button squiggle'>Dummy</div>}

        <button className='main-button' onClick={handlePlay}>Play</button>

        {teacherMode && <SetSeconds secondsByUser={secondsByUser} setSecondsByUser={setSecondsByUser}/>}
        {!teacherMode && labelsOn && <button className='main-button squiggle' onClick={handleModal}>Cheatsheet</button>}
      </div>
      
      {inputOn && !teacherMode &&
        <SpecialCharactersSp setInput={setInput}/>
      }
      

      {showModal &&
        <Modal
          handleModal={handleModal}
          tense={tenseToAnswer}
          isReflexive={isReflexive}
          infinitiveToAnswer={infinitiveToAnswer}
        />}
      {showTutorial &&
        <Tutorial handleTutorial={handleTutorial}/>
      }
      {teacherMode && tenseToAnswer &&
        <div className='modal-2'>
          {isReflexive && <ReflexiveModal />}
          <ModalContent
          handleModal={handleModal}
          tense={tenseToAnswer}
          teacherMode={teacherMode}
          infinitiveToAnswer={infinitiveToAnswer}
          />
        </div>}
        
    </div>
  );
}

export default SpanishApp;
