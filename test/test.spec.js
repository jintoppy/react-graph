import React from 'react';
//import {expect} from 'chai';
import { mount, shallow } from 'enzyme';

import Trial from '../src/trial';

describe('<Trial />',() => {

    it('should work', () => {
        const wrapper = shallow(<Trial />);
        expect(wrapper.innerHTML).to.be.defined;
    });

});