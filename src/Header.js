import DisneyLogo from './assets/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
	return(
		<div className="Header">
		<Link to={`/explore`} >
			<img src={DisneyLogo}/>
		</Link>
			<button>Login</button>
		</div>
	)
}

export default Header;
