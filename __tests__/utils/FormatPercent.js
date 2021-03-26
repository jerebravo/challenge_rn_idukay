import { FormatPercent } from '../../utils';

jest.useFakeTimers();

describe('Format to percent (function)', () => {

    it('Case one', () => {
        const resultToBuyPoisons = FormatPercent(1);
        expect(resultToBuyPoisons).toEqual(3);
    });

    it('Case two', () => {
        const resultToBuyPoisons = FormatPercent(2);
        expect(resultToBuyPoisons).toEqual(5);
    });

    it('Case three', () => {
        const resultToBuyPoisons = FormatPercent(3);
        expect(resultToBuyPoisons).toEqual(10);
    });

    it('Case four', () => {
        const resultToBuyPoisons = FormatPercent(4);
        expect(resultToBuyPoisons).toEqual(20);
    });

    it('Case five', () => {
        const resultToBuyPoisons = FormatPercent(5);
        expect(resultToBuyPoisons).toEqual(25);
    });
});