import { GenerateCombination, GenerateMessage } from '../../utils';

jest.useFakeTimers();

describe('Generate message (function)', () => {

    it('Case one', () => {
        const bestCombinations = GenerateCombination([
            'red',
            'red',
            'blue',
            'green'
        ], {});

        const messages = GenerateMessage(bestCombinations.combinations);
    
        expect(messages).toEqual([
            'Ataque 1: usar 3 pociones distintas causan un 10% de daño.',
            'Ataque 2: usar 1 poción causa un 3% de daño.',
            'Total: el brujo ha causado un 13% de daño.'
        ]);
    });

    it('Case two', () => {
        const bestCombinations = GenerateCombination([
            'red',
            'red',
            'blue',
            'blue',
            'green',
            'yellow',
            'gray'
        ], {});

        const messages = GenerateMessage(bestCombinations.combinations);
        
        expect(messages).toEqual([
            'Ataque 1: usar 5 pociones distintas causan un 25% de daño.',
            'Ataque 2: usar 1 poción causa un 3% de daño.',
            'Ataque 3: usar 1 poción causa un 3% de daño.',
            'Total: el brujo ha causado un 31% de daño.'
        ]);
    });
});