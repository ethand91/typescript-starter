import { expect } from 'chai';

import { getGreeting } from './../src/greeting';

describe('getGreeting()', () => {
  it('should return the greeting Hello World', () => {
    expect(getGreeting()).to.equals('Hello World');
  });
});
