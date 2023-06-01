1.
http://localhost:8080/api/v1/main_categories/all

    [
        {
            id: 1,
            title: 'For home and garden',
            created_at: timestamp,
            subcategories_list: [
                {
                    id: 1,
                    title: 'Watering tools',
                    created_at: timestamp,
                    image: '.../path'
                }, {
                    id: 2,
                    title: 'Pumps',
                    created_at: timestamp,
                    image: '.../path'
                }, {
                    ...
                }

        },
        {
            id: 2,
            title: 'Overalls',
            created_at: timestamp,
            subcategories_list: [
                {
                    id: 1,
                    title: '...',
                    created_at: timestamp,
                    image: '.../path'
                }, {
                    id: 2,
                    title: '...',
                    created_at: timestamp,
                    image: '.../path'
                }, {
                    ...
                }

        }
    ]

// =================================================================================
2.
http://localhost:8080/api/v1/main_categories/1

    [
        {
            id: 1,
            title: 'Watering tools',
            subcategories_list: [
                {
                    subcategory_id: 1,
                    title: 'Watering tools',
                    created_at: timestamp,
                    image: '.../path'
                }, {
                    subcategory_id: 2,
                    title: 'Pumps',
                    created_at: timestamp,
                    image: '.../path'
                }, {
                    ...
                }
        }
    ]

// ==============================================================
3.
http://localhost:8080/api/v1/subcategory/1

{
    subcategory_id: 1,
        created_at: timestamp,
        image: '.../path',
        category_product_list: [
        {
            product_id: 1,
            created_at: timestamp,
            images: ['.../path', '.../path', ...],
            title: '',
            price: '',
            discount_price: '',
            description: '',
            color: '',
            brand: '',
            made_country: '',
            delivery_type: '...',
            in_stock: true,
            is_new: true,
            is_promo: true,
            is_hit: false,
            is_favorite: false,
            is_compare: false
        }
    ]
}

// ==================================================================
4.
http://localhost:8080/api/v1/brands/all

[
    {
        id: 1,
        title: 'Cerezit',
        image: '.../path',
        created_at: timestamp,
        description: ''
    },
    {
        id: 2,
        title: 'Sniezka',
        image: '.../path',
        created_at: timestamp,
        description: ''
    }
]

// ===========================================================================
5.
http://localhost:8080/api/v1/novelties

[
    массив продуктов, у которых is_new === true
]

// ==============================================================================

6.
http://localhost:8080/api/v1/promo

    [
        массив продуктов, у которых is_promo === true
    ]

// ==============================================================================

7.
http://localhost:8080/api/v1/promo

    [
        массив продуктов, у которых is_hit === true
    ]

// ==============================================================================
8. http://localhost:8080/api/v1/products/all

[
    абсолютно все продукты
]

// ===============================================================================

9.
http://localhost:8080/api/v1/news/all

    [
        {
            id: 1,
            title: 'News title',
            image: 'news1.png',
            created_at: timestamp,
            [
                содержимое статьи в виде массива, напр. [
                    ['p', 'text'],
                    ['image', '.../path'],
                    ['h2', 'title']
            ]
                ]
        },
        {
            id: 2,
            ...
        },