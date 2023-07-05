import s from './Button.module.css'

export default function Button({ text, class_name, ...other }) {
	return (
		<button className={class_name}
			{...other}>
			{text}
		</button>
	)
}
