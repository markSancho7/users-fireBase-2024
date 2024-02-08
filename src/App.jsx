import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import Register from './components/register/Register';
import { AuthProvider } from './provider/Auth.provider';

const App = () => {
	return (
		<>
			<AuthProvider>
				<Login />
				<Register />
				<Logout />
			</AuthProvider>
		</>
	);
};

export default App;
