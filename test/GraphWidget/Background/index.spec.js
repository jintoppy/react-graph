import React from 'react';
//import {expect} from 'chai';
import { mount, shallow } from 'enzyme';

import Background from '../../../src/GraphWidget/Background';
import style from '../../../src/GraphWidget/Background/index.css';

describe('<Background />', () => {

    it('should render properly', () => {
        const wrapper = shallow(<Background />);
        expect(wrapper).to.have.descendants('div');
    });

});