'use strict';

window.addEventListener('blur', function (e) {
    console.log('window-event: blur');
});

window.addEventListener('beforeunload', function (e) {
    console.log('window-event: beforeunload');

    // Cancel the event
    e.preventDefault();
    // Chrome requires returnValue to be set
    e.returnValue = '';
});
