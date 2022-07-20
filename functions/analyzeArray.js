function analyzeArray(array) {

    return {
        average: (array.reduce((prev, cur) => prev + cur, 0)) / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    }
}

export { analyzeArray };