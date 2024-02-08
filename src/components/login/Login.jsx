import { signInWithEmailAndPassword } from 'firebase/auth';
import { useContext, useState } from 'react';
import { auth } from '../../config/firebase.config';
import { AuthContext } from '../../contexts/Auth.context';

const Login = () => {
	const { loading, currentUser } = useContext(AuthContext);
	const [loginData, setLoginData] = useState({});

	if (loading || currentUser) return;

	return (
		<>
			<h2>Login</h2>
			<form onSubmit={event => loginUser(event, loginData)}>
				<div>
					<label htmlFor='email'>Email</label>
					<input
						type='text'
						name='email'
						id='email'
						onInput={event =>
							setLoginData({ ...loginData, email: event.target.value })
						}
					/>
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<input
						type='text'
						name='password'
						id='password'
						onInput={event =>
							setLoginData({ ...loginData, password: event.target.value })
						}
					/>
				</div>
				<button>Login</button>
			</form>
		</>
	);
};

const loginUser = async (event, loginData) => {
	event.preventDefault();
	const { email, password } = loginData;
	try {
		await signInWithEmailAndPassword(auth, email, password);
		console.log('user loging');
		event.target.reset();
	} catch (error) {
		console.log('Error loging User', error.code, error.message);
	}
};

export default Login;
