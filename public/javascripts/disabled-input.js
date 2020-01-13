'use strict';

$(document).ready(function() {
    $('.wrapper-disabled-input').on('mouseover', () => {
        console.log('wrapper mouse over');
    });
    $('.wrapper-disabled-input').on('mouseout', () => {
        console.log('wrapper mouse out');
    });
});

