import { useDispatch } from 'react-redux';
import { Button } from '../../UI';
import { Breadcrumbs } from '../../components';
import s from './UserProfilePage.module.css'
import { remove_user } from '../../store/reducers/userSlice';
import { useNavigate } from 'react-router-dom';

export function UserProfilePage() {
	const breadcrumbsItems = [
		{ text: 'Home /', link: '/Online_Store' },
		{ text: 'Personal Profile', link: '/user' },
	];

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleReAuth = () => {
		dispatch(remove_user());
		navigate('/Online_Store')
	}

	return (
		<section className={s.profile_section}>
			<div className='container'>
				<Breadcrumbs items={breadcrumbsItems} />
				<div className={s.profile_wrapper}>
					<h1 className='title'>Personal Profile</h1>
					<Button text='Log out' content='about' onClick={handleReAuth} />
				</div>
			</div>
		</section>
	)
}
