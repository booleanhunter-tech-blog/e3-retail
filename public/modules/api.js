/**
 * Fetch search suggestions for a given string
 * @param {string} searchString
 * @return {Promise<[]>} Array of search suggestions
 */
export async function fetchSearchTermSuggestions(searchString) {
    const url = `/products/suggest?searchString=${searchString}`;

    const response = await fetch(url, {
        method: 'GET'
    });

    if (response.ok) {
        const result = await response.json();
        return result
    } else {
        return Promise.reject(Error(response.statusText));
    }
}
