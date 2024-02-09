import { usersCollectionReference } from '../../config/firebase.config';

const CreateUser = () => {
	return <button onClick={createUser}>Create User</button>;
};
const createUser = async () => {
	const newUser = {
		name: 'Cabrero',
		apellido: 'Galicia'
	};
	try {
		await addDoc(usersCollectionReference, ...newUser);
	} catch (error) {
		console.log(error);
	}
};
