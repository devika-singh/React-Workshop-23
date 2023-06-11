import DisneyLogo from './assets/logo.svg';

const Header = () => {
	return(
		<div className="Header">
			<img src={DisneyLogo}/>
			<button>Login</button>
		</div>
	)
}

export default Header;
