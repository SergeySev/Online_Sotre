import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'
import { useDispatch } from 'react-redux';
import { remove_user } from '../../store/reducers/userSlice';
import s from './PopUpProfile.module.css'

export function PopUpProfile({ setActive }) {
	const { surname, name, mail } = useAuth()

	const dispatch = useDispatch()
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate('/user');
		setActive(false);
	}

	const handleOutAuth = () => {
		dispatch(remove_user());
		setActive(false);
		navigate('/Online_Store');
	}


	return (
		<div className={s.popup_profile}>
				<span className={s.profile_fullname}>{name} {surname}</span>
				<span className={s.profile_email}>{mail}</span>
			<p className={s.profile} onClick={handleNavigate}>Manage yor personal account</p>
			<p className={s.logout} onClick={handleOutAuth}>Log out</p>
		</div>
	)
}
