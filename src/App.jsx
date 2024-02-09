import Login from './components/login/Login';
import LoginPopUp from './components/loginPopUp/LoginPopUp';
import Logout from './components/logout/Logout';
import Register from './components/register/Register';
import Users from './components/users/Users';
import { AuthProvider } from './provider/Auth.provider';

const App = () => {
	return (
		<>
			<AuthProvider>
				{/* <Register />
				<Login />
				<Logout />
				<LoginPopUp /> */}
				<Users />
			</AuthProvider>
		</>
	);
};

export default App;
