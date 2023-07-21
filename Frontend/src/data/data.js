import { FiPhoneIncoming, FiHeart, FiBarChart2, FiShoppingCart } from 'react-icons/fi';
import avatar from './assets/avatar.png'
import instagram from './assets/instagram.png'
import vk from './assets/vk.png'
import facebook from './assets/fb.png'

export const call_request = [
	{
		id: 1,
		name: "name",
		type: "text",
		placeholder: '',
		error_message: "Field should be 2-16 characters",
		label: "Name",
		pattern: "^[A-Za-z0-9]{2,16}$",
		required: true
	},
	{
		id: 2,
		name: "phone",
		type: "tel",
		placeholder: '+49',
		error_message: "Phone number should be in format +99 999...",
		label: "Pnone",
		pattern: "^[+]{1}[0-9]{5,13}$",
		required: true
	},
]

export const sign_in = [
	{
		id: 1,
		name: "email",
		type: "email",
		placeholder: '',
		error_message: "It should be a valid email address!",
		label: "Email",
		pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$",
		required: true
	},
	{
		id: 2,
		name: "password",
		type: "password",
		placeholder: '',
		error_message: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
		label: "Password",
		pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
		required: true
	},
]

export const registrations = [
	{
		id: 1,
		name: "surname",
		type: "text",
		placeholder: '',
		error_message: "Field should be 2-16 characters",
		label: "Surname",
		pattern: "^[A-Za-z0-9]{2,16}$",
		required: true
	},
	{
		id: 2,
		name: "name",
		type: "text",
		placeholder: '',
		error_message: "Field should be 2-16 characters",
		label: "Name",
		pattern: "^[A-Za-z0-9]{2,16}$",
		required: true
	},
	{
		id: 3,
		name: "phone",
		type: "tel",
		placeholder: '+49',
		error_message: "Phone number should be in format +99 999...",
		label: "Pnone",
		pattern: "^[+]{1}[0-9]{5,13}$",
		required: true
	},
	{
		id: 4,
		name: "email",
		type: "email",
		placeholder: '',
		error_message: "It should be a valid email address!",
		label: "Email",
		pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$",
		required: true
	},
	{
		id: 5,
		name: "birthday",
		type: "date",
		placeholder: '',
		error_message: "Enter your date of birth",
		label: "Birthday",
		required: true
	},
	{
		id: 6,
		name: "password",
		type: "password",
		placeholder: '',
		error_message: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
		label: "Password",
		pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
		required: true
	},
	{
		id: 7,
		name: "confirm_password",
		type: "password",
		placeholder: '',
		error_message: "This must equal the password field",
		label: "Confirm password",
		required: true
	}
]

export const radio_orders = [
	{ id: 1, title: 'in cash', type: 'cash' },
	{ id: 2, title: 'bank card', type: 'card' }
]

export const payments = [{ id: 1, title: 'Payment upon receipt', type: 'receiving' }, { id: 2, title: 'Online payment', type: 'online' }]

export const addresses = [
	"Berlin, Alexanderplatz 1",
	"Munich, Marienplatz 3",
	"New York, 5th Avenue 1"]

export const courier_inputs = [
	{
		id: 1,
		name: "city",
		type: "text",
		placeholder: 'city',
		error_message: "Field should has not be empty",
		label: "City",
		pattern: "/^[a-z]+[0-9_\/\s,.-]+$/i",
		required: true
	},
	{
		id: 2,
		name: "post",
		type: "text",
		placeholder: 'code',
		error_message: "Field should has not be empty",
		label: "Post code",
		pattern: "^[0-9]{1,}$",
		required: true
	},
	{
		id: 3,
		name: "street",
		type: "text",
		placeholder: 'street',
		error_message: "Field should has not be empty",
		label: "Street",
		pattern: "/^[a-z]+[0-9_\/\s,.-]+$/i",
		required: true
	},
	{
		id: 4,
		name: "house",
		type: "text",
		placeholder: 'house',
		error_message: "Field should has not be empty",
		label: "House",
		pattern: "/^[a-z]+[0-9_\/\s,.-]+$/i",
		required: true
	},
	{
		id: 5,
		name: "app",
		type: "text",
		placeholder: 'appartment',
		label: "appartment",
	},
	{
		id: 6,
		name: "date",
		type: "text",
		label: "Next delivery date",
		isCalendar: true,
		disabled: true
	},
	{
		id: 7,
		name: "shipping",
		type: "text",
		label: "Delivery amount",
		placeholder: 'free',
		disabled: true
	},
]

export const user_inputs = [
	{
		id: 1,
		name: "first_name",
		type: "text",
		placeholder: 'Enter your first name',
		error_message: "First name should be 2-16 characters",
		label: "First name",
		pattern: "^[A-Za-z0-9]{2,16}$",
		required: true
	},
	{
		id: 2,
		name: "last_name",
		type: "text",
		placeholder: 'Enter your last name',
		error_message: "Last name should be 2-16 characters",
		label: "Last name",
		pattern: "^[A-Za-z0-9]{2,16}$",
		required: true
	},
	{
		id: 3,
		name: "phone",
		type: "tel",
		placeholder: 'Enter your phone number',
		error_message: "Phone number should be in format +99 999...",
		label: "Pnone number",
		pattern: "^[+]{1}[0-9]{5,13}$",
		required: true
	},
	{
		id: 4,
		name: "email",
		type: "email",
		placeholder: 'Enter your email',
		error_message: "It should be a valid email address!",
		label: "Email",
		pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$",
		required: true
	}
]

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