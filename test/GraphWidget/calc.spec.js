import Calc from '../../src/GraphWidget/calc.js';

describe('Calc', () => {

    describe('getColWidth', () => {
        let event, uiConfig;

        beforeEach(() => {
            event = {
                startDate: '2016-11-19',
                endDate: '2016-11-29'
            };

            uiConfig = {
                col: {
                    minWidth: 20,
                    maxWidth: 30
                },
                yAxisWidth: 100,
            };
        });

        it('should give give no of Days between dates', () => {
            let result = Calc.getColWidth(event, uiConfig);
            expect(result).to.equal(10);
        });

    });


    describe('getNoOfDays', () => {
        let event;

        beforeEach(() => {
            event = {
                startDate: '2016-11-19',
                endDate: '2016-11-29'
            };
        });

        it('should give give no of Days between dates', () => {
            let result = Calc.getNoOfDays(event);
            expect(result).to.equal(10);
        });

    });

});


