$(function () {

    if (typeof categoryID !== 'undefined') {
        googleColumnChart('chart/category/' + categoryID + '/all', 'all');
        googleColumnChart('chart/category/' + categoryID + '/month', 'month');
    }



});