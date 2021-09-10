import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('should pass', () => {
  const foo = true
  expect(foo).toBe(true)
});


it('should fail', () => {
  const foo = false
  expect(foo).toBe(true)
});
