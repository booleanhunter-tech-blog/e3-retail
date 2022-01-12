const PRODUCT_CATEGORIES = {
    'Clothing': {
        imageUrl: '/images/product_types/clothing.jpg',
        id: 'clothing',
    },
    'Watches': {
        imageUrl: '/images/product_types/watches.jpg',
        id: 'watches',
    },
    'Computers': {
        imageUrl: '/images/product_types/computers.jpg',
        id: 'computers',
    },
    'Footwear': {
        imageUrl: '/images/product_types/footwear.jpg',
        id: 'footwear'
    },
    'Jewellery': {
        imageUrl: '/images/product_types/jewellery.jpg',
        id: 'jewellery',
    },
    'Beauty and Personal Care': {
        imageUrl: '/images/product_types/beauty_and_personal_care.jpg',
        id: 'beauty-and-personal-care',
    },
    'Kitchen & Dining': {
        imageUrl: '/images/product_types/kitchen_and_dining.jpg',
        id: 'kitchen-and-dining',
    },
    'Tools & Hardware': {
        imageUrl: '/images/product_types/tools_and_hardware.jpg',
        id: 'tools-and-hardware',
    },
    'Mobiles & Accessories': {
        imageUrl: '/images/product_types/mobiles.jpg',
        id: 'mobiles-and-accessories',
    },
    'Toys & School Supplies': {
        imageUrl: '/images/product_types/toys.jpg',
        id: 'toys-and-school-supplies',
    },
    'Home Furnishing': {
        imageUrl: '/images/product_types/home_furnishing.jpg',
        id: 'home-furnishing',
    },
    'Sports & Fitness': {
        imageUrl: '/images/product_types/sports_and_fitness.jpg',
        id: 'sports-and-fitness',
    },
    'Bags, Wallets & Belts': {
        imageUrl: '/images/product_types/bags_and_wallets.jpg',
        id: 'bags-wallets-and-belts',
    },
};

const SORT_OPTIONS = [
    {
        name: 'Relevance',
        value: 'RELEVANCE',
    },
    {
        name: 'Price: Low to High',
        value: 'PRICE_ASC',
    },
    {
        name: 'Price: High to low',
        value: 'PRICE_DESC',
    },
    {
        name: 'Ratings: High to low',
        value: 'RATINGS_DESC',
    }
];

const DELIVERY_OPTIONS = [
    {
        name: 'Get it by tomorrow',
        value: 'NEXT_DAY',
        id: 'next-day',
    },
];

const RATING_OPTIONS = [
    {
        name: '4 stars & up',
        value: 4,
        id: 'ratings_4'
    },
    {
        name: '3 stars & up',
        value: 3,
        id: 'ratings_3'
    },
    {
        name: '2 stars & up',
        value: 2,
        id: 'ratings_2'
    },
]

module.exports = {
    PRODUCT_CATEGORIES,
    SORT_OPTIONS,
    DELIVERY_OPTIONS,
    RATING_OPTIONS,
}
