import reducer , {increment, decrement, reset} from '../reducers/counterReducer';

describe('counter reducer', () => {
    it('should return the initial state', () => {
        // no action is passed, so the state should be the initial state
        expect(reducer(undefined, {type: 'unknown'})).toEqual({ value: 0 });
    });

    it('should handle increment', () => {
        // mock the state before action call and call increment action
        expect(reducer({ value: 0 }, increment())).toEqual({ value: 1 });
        expect(reducer({ value: 1 }, increment())).toEqual({ value: 2 });
    });

    it('should handle decrement', () => {
        // mock the state before action call and call decrement action
        expect(reducer({ value: 2 }, decrement())).toEqual({ value: 1 });
        expect(reducer({ value: 1 }, decrement())).toEqual({ value: 0 });
    });

    it('should handle reset', () => {
        // mock the state before action call and call reset action
        expect(reducer({ value: 2 }, reset())).toEqual({ value: 0 });
        expect(reducer({ value: 1 }, reset())).toEqual({ value: 0 });
    });
});