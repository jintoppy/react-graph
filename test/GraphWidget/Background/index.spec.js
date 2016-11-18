import React from 'react';
//import {expect} from 'chai';
import { mount, shallow } from 'enzyme';
import _ from 'lodash';

import Background from '../../../src/GraphWidget/Background';
import style from '../../../src/GraphWidget/Background/index.css';
import Calc from '../../../src/GraphWidget/calc';

const styles = _.mapValues(style, (raw) => '.' + raw)

let sampleProps;

describe('<Background />', () => {

    beforeEach(() => {
        sampleProps = {
            event: {
                startDate: '2016-11-19',
                endDate: '2016-11-29'
            },
            uiConfig: {
                col: {
                    minWidth: 20,
                    maxWidth: 30
                },
                yAxisWidth: 100,
            }
        };
        let widthStub = sinon.stub(Calc, 'getColWidth');
        widthStub.returns(20);

        let noOfDaysStub = sinon.stub(Calc, 'getNoOfDays');
        noOfDaysStub.returns(10);
    });

    afterEach(() => {
        Calc.getColWidth.restore();
        Calc.getNoOfDays.restore();
    });

    it('render properly', () => {
        const wrapper = shallow(<Background {...sampleProps}/>);
        expect(wrapper).to.have.descendants(styles.dayCol);
    });

    it('should create as many columns as Calc utility gives', () => {        

        const wrapper = shallow(<Background {...sampleProps} />);

        expect(wrapper).to.have.exactly(10).descendants(styles.dayCol);

        let dayCol = wrapper.find(styles.dayCol).first();

        expect(dayCol).to.have.style('width').equal('20%');

    });

    it('should create a yAxis with a fixed width given as per config', () => {
        const wrapper = shallow(<Background {...sampleProps} />);
        expect(wrapper).to.have.descendants(styles.yAxis);
    });

});