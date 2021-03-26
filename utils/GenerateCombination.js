import { FormatPercent } from './';

const GenerateCombination = (potions, data) => {

    const combinations = data.combinations ? data.combinations : [];

    const attack = [];
    const formatAttack = [];
    const attackStandby = [];

    for (let i = 0; i < potions.length; i++) {
        if (!attack.includes(potions[i])) {
            attack.push(potions[i]);
        }
        else{
            attackStandby.push(potions[i])
        }
    }

    if(attack.length != 2){ 
        formatAttack.push(attack.length)
    }
    else{
        attack.map( o => { formatAttack.push(1); })
    }

    data = {
        combinations: [...combinations, ...formatAttack],
        percent: [...combinations, ...formatAttack].reduce((accum, combination) => accum + FormatPercent(combination), 0)
    }

    if(!!attackStandby.length){
        return GenerateCombination(attackStandby, data);
    }

    return data;
};

export default GenerateCombination;