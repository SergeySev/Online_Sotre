import s from './Button.module.css'

export function Button({ text, content, type, ...other }) {
	return (
		<button
			className={`${s.button} ${s[content]}`}
			type={type}
			{...other}>
			{text}
		</button>
	)
}
