'use strict';

const HasEqualValues = (array) => {
    return !array.some((val, i, arr) => {
        return val !== arr[0];
    });
};

export default HasEqualValues;
