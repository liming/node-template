/**
 * Unit test for longest string
 */

const { findLongestString } = require('../longest-string');

describe('Test Longest String', () => {
  it('Able to find longest string', (done) => {
    const arr = ['a', 'aa', 'aaaaaa', 'aaa', ''];

    const result = findLongestString(arr);

    expect(result).toEqual('aaaaaa');

    done();
  });

  it('Able to find first string', (done) => {
    const arr = ['aaaa', 'bbbb', 'cccc', 'dddd', 'eeee'];

    const result = findLongestString(arr);

    expect(result).toEqual('aaaa');

    done();
  });
});
