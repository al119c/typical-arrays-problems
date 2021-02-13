
exports.min = function min (array) {
  if (array != undefined && array.length != 0) {
    array.sort((a, b) => a - b);
    return array[0];
}
return 0;
};

exports.max = function max (array) {
  if (array != undefined && array.length != 0) {
    array.sort((a, b) => a - b);
    return array[array.length - 1];
}
return 0;
};

exports.avg = function avg (array) {
  if (array != undefined && array.length != 0) {
    let avg = array.reduce((a, b) => a + b) / array.length;
    return avg;
}
return 0;
};
