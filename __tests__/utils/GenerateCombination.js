import { GenerateCombination } from '../../utils';

jest.useFakeTimers();

describe('Generate combination (function)', () => {

    it('Case one', () => {
        const bestCombinations = GenerateCombination([
            'red',
            'red',
            'blue',
            'green'
        ], {});
    
        expect(bestCombinations).toEqual({
            combinations: [3, 1],
            percent: 13
        });
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
        
        expect(bestCombinations).toEqual({
            combinations: [5, 1, 1],
            percent: 31
        });
    });
});