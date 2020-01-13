'use strict';

function unshift() {
    const msgStr = `<div class="message ${event.type}">${event.type} - ${event.target.innerText}</div>`;
    const $msg = $(msgStr);
    $('.messages').append($msg);
    setTimeout(() => {
        $msg.remove();
    }, 20 * 1000);
}

function onMouseEnter(event) {
    unshift(event);
}

function onMouseLeave(event) {
    unshift(event);
}

function onMouseOver(event) {
    unshift(event);
    event.stopPropagation();
}

function onMouseOut(event) {
    unshift(event);
}

function onTouchStart(event) {
    unshift(event);
}

function onTouchMove(event) {
    unshift(event);
}

function onTouchEnd(event) {
    unshift(event);
}

function onClick(event) {
    unshift(event);
    $('.ball-blue').show();
    event.preventDefault();
    return false;
}

$(document).ready(function() {

    // $('.list').find('a').on('mouseenter', onMouseEnter);
    // $('.list').on('mouseleave', 'a', onMouseLeave);

    $('.list').on('mouseover', 'a', onMouseOver);
    $('.list').on('mouseout', 'a', onMouseOut);

    $('.list').on('touchstart', 'a', onTouchStart);
    $('.list').on('touchmove', 'a', onTouchMove);
    $('.list').on('touchend', 'a', onTouchEnd);

    $('.list').on('click', 'a', onClick);
});

try {
    $.get('https://www.google.com').catch((e) => {
        console.log(JSON.stringify(e));
    });
} catch(e) {
    console.log(JSON.stringify(e));
};
