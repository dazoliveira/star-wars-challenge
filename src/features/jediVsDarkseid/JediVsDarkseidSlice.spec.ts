import jediVsDarkseidSlice from './jediVsDarkseidSlice';

describe('jediVsDarkseid reducer', () => {
  it('should handle initial state', () => {
    expect(jediVsDarkseidSlice(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle',
    });
  });
});
