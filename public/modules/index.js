import {
    debounce,
    displaySearchSuggestions
} from './helpers.js';

import {
    fetchSearchTermSuggestions,
} from './api.js';

const inputElement = document.getElementById("search-text");

inputElement.addEventListener(
    'keyup',
    debounce(async () => {
        const searchString = inputElement.value;
        if (searchString) {
            const response = await fetchSearchTermSuggestions(searchString);
            displaySearchSuggestions(response.suggestions);
        }
    })
);
