import s from './Button.module.css'

export function Button({ text, content, ...other }) {
	return (
		<button className={`${s.button} ${s[content]}`}
			{...other}>
			{text}
		</button>
	)
}
