import React from 'react';
export var MainPageAsync = React.lazy(function () { return new Promise(function (resolve) {
    // @ts-ignore
    setTimeout(function () { return resolve(import('./MainPage')); }, 1500);
}); });
