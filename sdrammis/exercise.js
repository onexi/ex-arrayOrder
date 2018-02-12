var exercise = {};

exercise.order = function(unordered) {
    // Sorting a numerical array from minimum to maximum
    return unordered.sort((a, b) => a - b);
};

var unordered = [11, 2, 15, 4, 5, 20, 7, 17, 13, 10, 1, 12, 9, 14, 3, 16, 8, 18, 19, 6];
exercise.order(unordered);

module.exports = exercise;
