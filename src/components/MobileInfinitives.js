import React from 'react';
import data from '../data2.json';

export default function MobileInfinitives({ showMobileInfinitives, 
                                            setShowMobileInfinitives, 
                                            setShowMobilePersons,
                                            setShowMobileTenses,
                                            toggle_ar, 
                                            toggle_er, 
                                            toggle_ir, 
                                            toggle_reflexive, 
                                            toggle_all_irregulars, 
                                            toggle_individual_irregulars, 
                                            allIrregularsFalse,
                                            resetState,
                                            setLabelsOn,
                                            setInputOn }) {

    const { infinitives } = data;
    let irreg_infinitives = infinitives.filter(irreg_infinitive => irreg_infinitive[9] === "irregular")                                          

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
      <h2 onClick={toggleMobileInfinitives}>Select Verb</h2>
      {showMobileInfinitives && 
      <div className='info-1'>

                <div className='mobile-regular-infinitives-container'>
                    <p className={`info-column ${infinitives[0][10] ? 'active-option' : 'inactive-option'}`}
                        onClick={() => toggle_ar()}>
                        -ar verbs
                    </p>
                    <p className={`info-column ${infinitives[5][10] ? 'active-option' : 'inactive-option'}`}
                        onClick={() => toggle_er()}>
                        -er verbs
                    </p>
                    <p className={`info-column ${infinitives[10][10] ? 'active-option' : 'inactive-option'}`}
                        onClick={() => toggle_ir()}>
                        -ir verbs
                    </p>
                </div>

                <p className={`info-column ${infinitives[15][10] ? 'active-option' : 'inactive-option'}`}
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
                                className={`info-column ${irreg_infinitive[10] ? 'active-option' : 'inactive-option'}`} 
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
