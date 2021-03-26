import React, { createContext } from 'react';
import { GenerateAttack } from '../utils/';

export const PotionsContext = createContext([]);

const PotionsProvider = (props) => {

    const defaultListPotions = [
        { potion: 'red', counter: 0, style: 'lighte'},
        { potion: 'blue', counter: 0, style: 'lighte'},
        { potion: 'green', counter: 0, style: 'lighte'},
        { potion: 'yellow', counter: 0, style: 'dark'},
        { potion: 'gray', counter: 0, style: 'lighte'}
    ];

    const editPotionsCounter = (updatePotions) => { 
        let potions = updatePotions || defaultListPotions;
        let updateListFormatedPotions = [];
        potions.map((data) => {
            let i = 0;
            while(i < data.counter){
                updateListFormatedPotions.push(data.potion)
                i++;
            }
        })

        let generateAttack = GenerateAttack(updateListFormatedPotions)

        return [potions, generateAttack];
    };

    return (
        <PotionsContext.Provider 
            value={{
                editPotionsCounter: editPotionsCounter
            }}
        >
            {props.children}
        </PotionsContext.Provider>
    )
};

export default PotionsProvider;