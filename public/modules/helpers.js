export function debounce(func, timeout = 450){
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

/**
 * Display search suggestions in a datalist element
 * @param {{}[]} suggestions
 */
export function displaySearchSuggestions(suggestions) {
    const dataListOptions = [];

    for (const suggestion of suggestions) {
        dataListOptions.push(
            createOptionElement(suggestion.text)
        );
    }

    document.getElementById("search-text-suggestions").append(...dataListOptions);
}

/**
 * Creates an option element with a value
 * @param {string} value
 * @return {HTMLOptionElement}
 */
function createOptionElement(value) {
    const option = document.createElement('option');
    option.value = value;
    return option;
}
