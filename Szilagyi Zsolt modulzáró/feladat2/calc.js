function divide(a, b) {
    if (b === 0) {
        console.log('0-val való osztás történt');
        return "Osztás nullával.";
    }
    return a / b;
}

exports.sum = function (a, b) {
    return a + b;
}


exports.sub = function (a, b) {
    return a - b;
}

exports.mul = function (a, b) {
    return a * b;
}

exports.div = function (a, b) {
    return a / b;
}

exports.divide = divide;