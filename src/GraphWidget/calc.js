import moment from 'moment';

const _getNoOfDays = (event) => {
    let startDate = moment(event.startDate);
    let endDate = moment(event.endDate);
    return endDate.diff(startDate,'days');
}

const _getColWidth = (event, colConfig) => {
    
    let noOfDays = _getNoOfDays(event);

    let width = 100 / noOfDays;

    return width<colConfig.minWidth? colConfig.minWidth: width;

};

export default {
    getColWidth: _getColWidth,
    getNoOfDays: _getNoOfDays
}