import {
    debounce,
    displaySearchSuggestions,
    updateUI,
} from './utils.js';

import {
    fetchSearchTermSuggestions,
    fetchProducts,
    REST_API_URL,
} from './api.js';

import {
    handleBrowserBackButtonClick,
    updateWindowHistory
} from './state.js';

const inputElement = document.getElementById('search-text');

inputElement.addEventListener(
    'keyup',
    debounce(async () => {
        const searchString = inputElement.value;
        if (searchString) {
            const productSuggestions = await fetchSearchTermSuggestions(searchString);
            displaySearchSuggestions(productSuggestions);
        }
    })
);

const filtersForm = document.getElementById('filters');

filtersForm.addEventListener(
    'submit',
    async function(event) {
        const formData = new FormData(event.currentTarget);

        const page = event.submitter.getAttribute('name') === 'page' ? Number(event.submitter.value) : 1;
        
        const searchParams = {
            searchText: formData.get('search_text'),
            categories: formData.getAll('categories'),
            brands: formData.getAll('brands'),
            price: {
                ...(formData.get('price_min') && {
                    gte: Number(formData.get('price_min'))
                }),
                ...(formData.get('price_max') && {
                    lte: Number(formData.get('price_max'))
                }),
            },
            ratings: {
                ...(formData.get('ratings') && {
                    gte: Number(formData.get('ratings'))
                }),
            },
            ...(formData.get('sort') && {
                sort: formData.get('sort')
            }),
            ...(formData.get('delivery') && {
                delivery: formData.get('delivery')
            }),
            page,
        }

        event.preventDefault();
        const data = await fetchProducts(searchParams);
        const queryString = new URLSearchParams(formData).toString();

        updateWindowHistory(`${REST_API_URL}/search?${queryString}`, data.products)
        updateUI(data.products);
    }
);

handleBrowserBackButtonClick(updateUI);