import s from './Button.module.css'

export function Button({ text, content, ...other }) {
	// console.log("🚀 ~ file: Button.jsx:4 ~ Button ~ other:", other)
	return (
		<button
			className={`${s.button} ${s[content]}`}
			{...other}>
			{text}
		</button>
	)
}
