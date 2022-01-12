
/**
 * Converts array of objects to an object
 * @param {array} array
 * @param {string} key
 * @return {{}} Object
 */
const convertArrayToObject = (array, key) => 
    array.reduce((accumulator, current) => {
        accumulator[current[key]] = current;
        return accumulator;
}, {});

/**
 * Collapses a string to an array. Useful for parsing request params
 * @param {string[] | string | undefined | null} possibleArray
 * @return {string[]} Array
 */
function collapseToArray (possibleArray) {
    if (possibleArray) {
        if (Array.isArray(possibleArray) && possibleArray.length > 0) {
            return possibleArray;
        } else if (typeof possibleArray === 'string') {
            return [possibleArray];
        }
    } else {
        return [];
    }
}

/**
 * Replaces whitespace in a string with dashes and converts to lowercase
 * @param {string} str
 * @return {string} ID
 */
 function convertToId(str) {
    return str.replace(/\s+/g, '-').toLowerCase()
}

module.exports = {
    convertArrayToObject,
    collapseToArray,
    convertToId,
}
