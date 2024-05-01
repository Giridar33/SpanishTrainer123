import React from 'react';
import data from '../spanish-data.json';

const Infinitives = ({ toggle_ar, 
                        toggle_er, toggle_ir, 
                        toggle_reflexive, 
                        toggle_all_irregulars, 
                        toggle_individual_irregulars, 
                        allIrregularsFalse,
                        showMobileInfinitives, 
                        toggleAllVerbOptions,
                        infinitiveToAnswer }) => {
    const { infinitives } = data;
    let irreg_infinitives = infinitives.filter(irreg_infinitive => irreg_infinitive[9] === "irregular")
    console.log(infinitiveToAnswer);

    return (
        <div className="infinitive-list">
            <h2 onClick={toggleAllVerbOptions}>{infinitiveToAnswer ? infinitiveToAnswer[0] : "Select Verb"}</h2>
            {showMobileInfinitives &&
            <div className='info-1'>
                <p className={`info-column ${infinitives[0][10] ? 'active-option' : 'inactive-option'}`}
                    onClick={() => toggle_ar()}>
                    Regular -ar verbs
                </p>
                <p className={`info-column ${infinitives[5][10] ? 'active-option' : 'inactive-option'}`}
                    onClick={() => toggle_er()}>
                    Regular -er verbs
                </p>
                <p className={`info-column ${infinitives[10][10] ? 'active-option' : 'inactive-option'}`}
                    onClick={() => toggle_ir()}>
                    Regular -ir verbs
                </p>

                <p className={`info-column ${infinitives[15][10] ? 'active-option' : 'inactive-option'}`}
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
                                className={`info-column ${irreg_infinitive[10] ? 'active-option' : 'inactive-option'}`} 
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