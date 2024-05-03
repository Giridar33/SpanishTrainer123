import React from 'react';
import data from '../french-data.json';

export default function MobileInfinitives({ showMobileInfinitives, 
                                            setShowMobileInfinitives, 
                                            setShowMobilePersons,
                                            setShowMobileTenses,
                                            toggle_er, 
                                            toggle_ir, 
                                            toggle_re, 
                                            toggle_modal,
                                            toggle_reflexive, 
                                            toggle_all_irregulars, 
                                            toggle_individual_irregulars, 
                                            allIrregularsFalse,
                                            resetState,
                                            setLabelsOn,
                                            setInputOn,
                                            infinitiveToAnswer }) {

    const { infinitives } = data;
    let irreg_infinitives = infinitives.filter(irreg_infinitive => irreg_infinitive[7] === "irregular verb")                                          

    const toggleMobileInfinitives = () => {
        resetState();
        setLabelsOn(false);
        setInputOn(false);
        setShowMobilePersons(false);
        setShowMobileTenses(false);
        setShowMobileInfinitives(prevState => !prevState)
    }

  return (
    <div className="mobile-infinitives">
      <h2 onClick={toggleMobileInfinitives}>{infinitiveToAnswer ? infinitiveToAnswer[0] : "Select Verb"}</h2>
      {showMobileInfinitives && 
      <div className='info-1'>

                <div className='mobile-regular-infinitives-container'>
                    <p className={`info-column ${infinitives[0][8] ? 'active-option' : 'inactive-option'}`}
                        onClick={() => toggle_er()}>
                        -er verbs
                    </p>
                    <p className={`info-column ${infinitives[5][8] ? 'active-option' : 'inactive-option'}`}
                        onClick={() => toggle_ir()}>
                        -ir verbs
                    </p>
                    <p className={`info-column ${infinitives[10][8] ? 'active-option' : 'inactive-option'}`}
                        onClick={() => toggle_re()}>
                        -re verbs
                    </p>
                </div>

                <p className={`info-column ${infinitives[15][8] ? 'active-option' : 'inactive-option'}`}
                    onClick={() => toggle_modal()}>
                    Modal verbs
                </p>

                <p className={`info-column ${infinitives[18][8] ? 'active-option' : 'inactive-option'}`}
                    onClick={() => toggle_reflexive()}>
                    Reflexive verbs
                </p>
                <div className={`${allIrregularsFalse ? 'active-option' : 'inactive-option'}`}>
                    <p className='info-column'
                        onClick={() => toggle_all_irregulars()}>
                        Irregular verbs
                    </p>
                    <div className='irregular-verbs-list-mobile'>
                        {irreg_infinitives.map((irreg_infinitive, index) => (
                            <p 
                                className={`info-column ${irreg_infinitive[8] ? 'active-option' : 'inactive-option'}`} 
                                key={index}
                                onClick={() => toggle_individual_irregulars(index)}>
                                {irreg_infinitive[0]}
                            </p>
                        ))}
                    </div>
                </div>
            </div>}

    </div>
  )
}
