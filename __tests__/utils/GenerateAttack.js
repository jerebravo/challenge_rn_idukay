import { GenerateAttack } from '../../utils';

jest.useFakeTimers();

describe('Generate attack (function)', () => {

    it('Case one', () => {
        const resultToBuyPoisons = GenerateAttack([
            'red',
            'red',
            'blue',
            'green'
        ]);
    
        expect(resultToBuyPoisons).toEqual([
            'Ataque 1: usar 3 pociones distintas causan un 10% de daño.',
            'Ataque 2: usar 1 poción causa un 3% de daño.',
            'Total: el brujo ha causado un 13% de daño.'
        ]);
    });

    it('Case two', () => {
        const resultToBuyPoisons = GenerateAttack([
            'red',
            'red',
            'blue',
            'blue',
            'green',
            'yellow',
            'gray'
        ]);
        
        expect(resultToBuyPoisons).toEqual([
            'Ataque 1: usar 5 pociones distintas causan un 25% de daño.',
            'Ataque 2: usar 1 poción causa un 3% de daño.',
            'Ataque 3: usar 1 poción causa un 3% de daño.',
            'Total: el brujo ha causado un 31% de daño.'
        ]);
    });
});