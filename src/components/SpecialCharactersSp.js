import React from 'react';

const SpecialCharactersSp = ({ setInput }) => {
  // Function to handle the insertion of special characters
  const handleSpecialCharacter = (char) => {
    setInput((prevInput) => prevInput + char);
  };

  return (
    <div className="special-characters">
      <p>Special Characters</p>
      <div className='special-char-buttons'>
        <button onClick={() => handleSpecialCharacter('á')}>á</button>
        <button onClick={() => handleSpecialCharacter('é')}>é</button>
        <button onClick={() => handleSpecialCharacter('í')}>í</button>
        <button onClick={() => handleSpecialCharacter('ó')}>ó</button>
        <button onClick={() => handleSpecialCharacter('ú')}>ú</button>
      </div>
    </div>
  );
};

export default SpecialCharactersSp;