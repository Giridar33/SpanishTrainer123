import React from 'react';

const SpecialCharactersFr = ({ setInput }) => {
  // Function to handle the insertion of special characters
  const handleSpecialCharacter = (char) => {
    setInput((prevInput) => prevInput + char);
  };

  return (
    <div className="special-characters">
      <p>Special Characters</p>
      <div className='special-char-buttons'>
        <button onClick={() => handleSpecialCharacter('â')}>â</button>
        <button onClick={() => handleSpecialCharacter('ê')}>ê</button>
        <button onClick={() => handleSpecialCharacter('é')}>é</button>
        <button onClick={() => handleSpecialCharacter('û')}>û</button>
      </div>
    </div>
  );
};

export default SpecialCharactersFr;