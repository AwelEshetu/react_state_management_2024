import reducer , {increment, decrement, reset} from '../../features/counterReducer';

describe('counter reducer', () => {
    it('should return the initial state', () => {
        // no action is passed, so the state should be the initial state
        expect(reducer(undefined, {type: 'unknown'})).toEqual({ value: 0 });
    });

    it('should handle increment', () => {
        expect(reducer({ value: 0 }, increment())).toEqual({ value: 1 });
        expect(reducer({ value: 1 }, increment())).toEqual({ value: 2 });
    });

    it('should handle decrement', () => {
        expect(reducer({ value: 2 }, decrement())).toEqual({ value: 1 });
        expect(reducer({ value: 1 }, decrement())).toEqual({ value: 0 });
    });

    it('should handle reset', () => {
        expect(reducer({ value: 2 }, reset())).toEqual({ value: 0 });
        expect(reducer({ value: 1 }, reset())).toEqual({ value: 0 });
    });
});