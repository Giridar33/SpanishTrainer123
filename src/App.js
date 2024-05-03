import React, { useState } from 'react'
import Spanish from './SpanishApp';
import French from './FrenchApp';
import './App.css';

function App() {

    const [language, setLanguage] = useState("French");

  return (
    <div className="App">
        <div className='flag-container'>
            <div className="spanish-flag" onClick={() => setLanguage("Spanish")}>
                <div className='one'></div>
                <div className='two'></div>
                <div className='three'></div>
            </div>
            <div className="french-flag"onClick={() => setLanguage("French")}>
                <div className='one'></div>
                <div className='two'></div>
                <div className='three'></div>
            </div>
        </div>

        {language === "Spanish" && <Spanish />}
        {language === "French" && <French />}
    </div>
  );
}

export default App;




