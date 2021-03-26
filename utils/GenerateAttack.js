import { GenerateCombination, GenerateMessage } from './';

const GenerateAttack = (poisions) => {
    const bestCombinations = GenerateCombination(poisions, {});
    return GenerateMessage(bestCombinations.combinations);
};

export default GenerateAttack;
