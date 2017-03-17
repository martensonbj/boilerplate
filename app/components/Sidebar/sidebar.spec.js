import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Sidebar from './Sidebar';

describe('<Sidebar/>', function () {
  it('should display a single h1 tag', () => {
    const wrapper = shallow(<Sidebar/>);
    expect(wrapper.find('h1')).to.have.length(1);
  });

  it('should fire our click event once when clicked', () => {
    sinon.spy(Sidebar.prototype, 'logStuff');
    const wrapper = mount(<Sidebar />);
    wrapper.find('.important-button').simulate('click');
    expect(Sidebar.prototype.logStuff.calledOnce).to.equal(true);
  })
});
