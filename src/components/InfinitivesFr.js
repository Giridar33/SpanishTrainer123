import React from 'react';
import data from '../french-data.json';

const Infinitives = ({  toggle_er, 
                        toggle_ir, 
                        toggle_re, 
                        toggle_modal,
                        toggle_reflexive, 
                        toggle_all_irregulars, 
                        toggle_individual_irregulars, 
                        allIrregularsFalse,
                        showMobileInfinitives, 
                        toggleAllVerbOptions,
                        infinitiveToAnswer,
                        finalWord }) => {
    const { infinitives } = data;
    let irreg_infinitives = infinitives.filter(irreg_infinitive => irreg_infinitive[7] === "irregular verb")

    return (
        <div className="infinitive-list">
            {/* If we are working with modal verbs we show the modal verb plus the extra infinitive */}
            {infinitiveToAnswer[7] === "modal verb" && 
                <h2 onClick={toggleAllVerbOptions}>
                {infinitiveToAnswer ? infinitiveToAnswer[0] + " + " + finalWord[0].substring(finalWord[0].lastIndexOf(" ") + 1) : "Select Verb"}
                </h2>
            }
            {infinitiveToAnswer[7] != "modal verb" &&
                <h2 onClick={toggleAllVerbOptions}>
                {infinitiveToAnswer ? infinitiveToAnswer[0] : "Select Verb"}
            </h2>
            }

            {showMobileInfinitives &&
            <div className='info-1'>
                <p className={`info-column ${infinitives[0][8] ? 'active-option' : 'inactive-option'}`}
                    onClick={() => toggle_er()}>
                    Regular -er verbs
                </p>
                <p className={`info-column ${infinitives[5][8] ? 'active-option' : 'inactive-option'}`}
                    onClick={() => toggle_ir()}>
                    Regular -ir verbs
                </p>
                <p className={`info-column ${infinitives[10][8] ? 'active-option' : 'inactive-option'}`}
                    onClick={() => toggle_re()}>
                    Regular -re verbs
                </p>

                <p className={`info-column ${infinitives[15][8] ? 'active-option' : 'inactive-option'}`}
                    onClick={() => toggle_modal()}>
                    Modal verbs
                </p>

                <p className={`info-column ${infinitives[18][8] ? 'active-option' : 'inactive-option'}`}
                    onClick={() => toggle_reflexive()}>
                    Reflexive verbs
                </p>

                <div className={`irregulars-container ${allIrregularsFalse ? 'active-option' : 'inactive-option'}`}>
                    <p className={`info-column ${allIrregularsFalse ? 'active-div' : 'inactive-div'}`}
                        onClick={() => toggle_all_irregulars()}>
                        Irregular verbs
                    </p>
                    <div className='irregular-verbs-list'>
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

            </div>
            }

        </div>
    )
}

export default Infinitives;