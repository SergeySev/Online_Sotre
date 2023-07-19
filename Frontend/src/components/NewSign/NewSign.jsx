import s from './NewSign.module.css'

export function NewSign({ tag }) {
	return (<>
		{tag && <div className={s.new_sign}>
			{tag}
		</div>}
	</>
	)
}
