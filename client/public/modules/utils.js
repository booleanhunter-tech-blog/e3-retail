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

    document.getElementById('search-text-suggestions').append(...dataListOptions);
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

/**
 * Updates all relevant sections of the products page UI from the search results
 * @param {{}} products - GraphQL query response object
 */
export function updateUI(products) {
    displayProductCount(products.productsInfo.total.value);
    displaySearchText(products.filters.searchText);
    displayProducts(products.productsInfo?.products);
    displayPagination(products.paginationInfo);
    displayFilters(products.filters);
}

function displaySearchText(searchText) {
    document.getElementById('search-text').value = searchText;
}

function displayProductCount(count) {
    document.getElementById('product-list-header').innerText = `${count} products`;
}

function displayProducts(products = []) {
    document.getElementById('product-list-container').innerHTML = Handlebars.templates['product_list.hbs']({
        products,
    });
}

function displayPagination(paginationInfo) {
    document.getElementById('product-section-footer-container').innerHTML = Handlebars.templates['pagination.hbs']({
        paginationInfo,
    });
}

function displayFilters(filters) {
    document.getElementById('filters').innerHTML = Handlebars.templates['filters.hbs']({
        filters,
    });
}