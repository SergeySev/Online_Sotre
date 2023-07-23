import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'
import { useDispatch } from 'react-redux';
import { remove_user } from '../../store/reducers/userSlice';
import s from './PopUpProfile.module.css'

export function PopUpProfile({ setActive }) {
	const { surname, name, email } = useAuth()

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
			<h2>User:
				<span>{name} {surname}</span>
				<span>{email}</span>
			</h2>
			<p onClick={handleNavigate}>Manage yor personal account</p>
			<p onClick={handleOutAuth}>Log out</p>
		</div>
	)
}
