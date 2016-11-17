const _getColWidth = (noOfDays, minWidth) => {
    let width = 100 / noOfDays;

    return width<minWidth? minWidth: width;

};

export default {
    getColWidth: _getColWidth
}