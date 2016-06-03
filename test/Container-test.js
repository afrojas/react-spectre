/*eslint-env mocha */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
// import ReactTestUtils from 'react/lib/ReactTestUtils';
import Container from '../src/Container';
import ReactElementValidator from 'react/lib/ReactElementValidator';

describe('Container', function() {

  beforeEach(function() {
    ReactElementValidator.nukeLoggedTypeFailures();
    console.log('FUCK YOU!');
  });

  it('has balls', function() {
    const wrapper = shallow(<Container />);
    // expect(shallow(<Foo />).is('.foo')).to.equal(true);
    expect(1).to.equal(1);
  });

  it('has balls2', function() {
    const wrapper = shallow(<Container />);
    expect(1).to.equal(1);
  });

});