import { FormatPercent } from './';

const GenerateMessage = (combinations) => {
    const resultCombinations = combinations.map((combination, index) => {
        if (combination === 1) {
            return `Ataque ${index + 1}: usar ${combination} poción causa un ${FormatPercent(combination)}% de daño.`;
        }
        return `Ataque ${index + 1}: usar ${combination} pociones distintas causan un ${FormatPercent(combination)}% de daño.`;
    });

    const resultTotal = combinations.reduce((accum, combination) => accum + FormatPercent(combination), 0);
    return [
        ...resultCombinations,
        `Total: el brujo ha causado un ${resultTotal}% de daño.`
    ];
};

export default GenerateMessage;