import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth.context';
import { auth } from '../../config/firebase.config';

const googleProvider = new GoogleAuthProvider();

const LoginPopUp = () => {
	const { currentUser, loading } = useContext(AuthContext);

	if (currentUser || loading) return;
	return (
		<>
			<h2>Social Login</h2>
			<button onClick={singInWithGoogle}> Login With Google</button>
		</>
	);
};

const singInWithGoogle = async () => {
	try {
		await signInWithPopup(auth, googleProvider);
	} catch (error) {
		console.error(error);
	}
};

export default LoginPopUp;
