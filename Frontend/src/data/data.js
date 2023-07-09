import { FiPhoneIncoming, FiHeart, FiBarChart2, FiShoppingCart } from 'react-icons/fi';
// import { FaRegUserCircle } from 'react-icons/fa';
// import { RiAccountCircleLine } from 'react-icons/ri';
import avatar from './assets/avatar.png'
// import comparison from './assets/bar-chart.png'
// import favorite from './assets/heart.png'
// import cart from './assets/cart.png'
import instagram from './assets/instagram.png'
import vk from './assets/vk.png'
import facebook from './assets/fb.png'

export const tabs = [
	{ id: 1, title: "Customer data" },
	{ id: 2, title: "Delivery" },
	{ id: 3, title: "Payment" }]

export const top_menu_items = [
	{
		id: 1,
		title: 'phone',
		image: '',
		icon: <FiPhoneIncoming />,
		// link: '#'
	},
	{
		id: 2,
		title: 'favorite',
		image: '',
		icon: <FiHeart />,
		link: '/favorite'
	},
	{
		id: 3,
		title: 'comparison',
		image: '',
		icon: <FiBarChart2 />,
		link: '/comparison'
	},
	{
		id: 4,
		title: 'avatar',
		image: avatar,
		// icon: <FaRegUserCircle />,
		// icon: <RiAccountCircleLine />,
		// link: '#'
	},
	{
		id: 5,
		title: 'cart',
		image: '',
		icon: <FiShoppingCart />,
		link: '/cart'
	},
]
// ====================================================

export const sort_select_values = [
	{
		id: 1,
		value: 'New first',
		data: 'new'
	},
	{
		id: 2,
		value: 'Popular first',
		data: 'hits'
	},
	{
		id: 3,
		value: 'Discount first',
		data: 'promo'
	},
	{
		id: 4,
		value: 'Ascending price',
		data: 'asc'
	},
	{
		id: 5,
		value: 'Descending price',
		data: 'desc'
	},
	{
		id: 6,
		value: 'From A to Z',
		data: 'fromA'
	},
	{
		id: 7,
		value: 'From Z to A',
		data: 'fromZ'
	},
]


// ====================================================

export const menu_list = [
	{
		id: 1,
		title: 'About company',
		tag: 'novelties',
		link: '#about'
	},
	{
		id: 2,
		title: 'Promotions',
		tag: 'promo',
		link: '#novelties'
	},
	{
		id: 3,
		title: 'Season hits',
		tag: 'hit',
		link: '#novelties'
	},
	{
		id: 4,
		title: 'Novelties',
		tag: 'novelties',
		link: '#novelties'
	},
]

// ====================================================

// export const catalog_list = [
//   {
//     id: 1,
//     title: 'Painting supplies',
//     link: '#'
//   },
//   {
//     id: 2,
//     title: 'Electrical equipment',
//     link: '#'
//   },
//   {
//     id: 3,
//     title: 'Overalls',
//     link: '#'
//   },
//   {
//     id: 4,
//     title: 'For home and cottage',
//     link: '#'
//   },
//   {
//     id: 5,
//     title: 'Season',
//     link: '#'
//   },
//   {
//     id: 6,
//     title: 'Tools',
//     link: '#'
//   },
// ]

//===============================================

export const main_menu_list = [
	{
		id: 1,
		title: 'About company',
		link: '#'
	},
	{
		id: 2,
		title: 'Contacts',
		link: '#'
	},
	{
		id: 3,
		title: 'Novelties',
		link: '#'
	},
	{
		id: 4,
		title: 'Season hits',
		link: '#'
	},
	{
		id: 5,
		title: 'Sales',
		link: '#'
	},
]

// ==========================================================

export const brands = [
	{
		id: 1,
		title: 'truper',
		image: 'truper.png',
		link: '#'
	},
	{
		id: 2,
		title: 'centro',
		image: 'centro.png',
		link: '#'
	},
	{
		id: 3,
		title: 'finland',
		image: 'finland.png',
		link: '#'
	},
	{
		id: 4,
		title: 'kapro',
		image: 'kapro.png',
		link: '#'
	},
	{
		id: 5,
		title: 'ceresit',
		image: 'ceresit.png',
		link: '#'
	},
	{
		id: 6,
		title: 'sniezka',
		image: 'sniezka.png',
		link: '#'
	},
	{
		id: 7,
		title: 'pfizer',
		image: 'pfizer.png',
		link: '#'
	},
	{
		id: 8,
		title: 'farbitex',
		image: 'farbitex.png',
		link: '#'
	}
]

// ===================================================


export const social_icons = [
	{
		id: 1,
		title: 'instagram',
		image: instagram,
		link: '#'
	},
	{
		id: 2,
		title: 'vk',
		image: vk,
		link: '#'
	},
	{
		id: 3,
		title: 'facebook',
		image: facebook,
		link: '#'
	}
]

// =====================================================

// export const offers_menu = [
// 	{
// 		id: 1,
// 		title: 'Novelties',
// 		tag: 'novelties',
// 		// link: '#',
// 		active: true
// 	},
// 	{
// 		id: 2,
// 		title: 'Promotions',
// 		tag: 'promo',
// 		// link: '#',
// 		active: false
// 	},
// 	{
// 		id: 3,
// 		title: 'Sale hits',
// 		tag: 'hit',
// 		// link: '#',
// 		active: false
// 	}
// ]
//  =====================================================

export const novelties_list = [
	{
		id: 1,
		title: 'Screwdriver bit',
		tag: 'new',
		price: 720,
		discount_price: 500,
		in_stock: true,
		image: 'bit.png',
		link: '#'
	},
	{
		id: 2,
		title: 'Garden pitchfork',
		tag: 'new',
		price: 720,
		discount_price: 500,
		in_stock: true,
		image: 'pitchfork.png',
		link: '#'
	},
	{
		id: 3,
		title: 'Metal scissors',
		tag: 'new',
		price: 720,
		discount_price: 500,
		in_stock: true,
		image: 'metal_scissors.png',
		link: '#'
	},
	{
		id: 4,
		title: 'Snow shovel',
		tag: 'new',
		price: 720,
		discount_price: 500,
		in_stock: true,
		image: 'snow_shovel.png',
		link: '#'
	},
	{
		id: 5,
		title: 'Screwdriver',
		tag: 'new',
		price: 720,
		discount_price: 500,
		in_stock: true,
		image: 'screwdriver.png',
		link: '#'
	},
	{
		id: 6,
		title: 'Some kind of bullshit',
		tag: 'new',
		price: 720,
		discount_price: 500,
		in_stock: true,
		image: 'bullshit.png',
		link: '#'
	}
]

// ============================================================

export const news_list = [
	{
		id: 1,
		title: 'News title',
		image: 'news1.png',
		date: '12th of January 2023'
	},
	{
		id: 2,
		title: 'News title',
		image: 'news2.png',
		date: '12th of January 2023'
	},
	{
		id: 3,
		title: 'News title',
		image: 'news2.png',
		date: '12th of January 2023'
	},
	{
		id: 4,
		title: 'News title',
		image: 'news1.png',
		date: '12th of January 2023'
	},
]