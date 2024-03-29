
export default HandlePlay = () => {

    //delete previous user input
    setInput('');
    setRightAnswer(false);
    setWrongAnswer(false);

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

    // Focus the input element after setting the game
    // It was necessary to include this on a setTimeout to make sure it happened immediately after first click
    setTimeout(() => {
      inputRef.current.focus();
    }, 0);

  return null
}
