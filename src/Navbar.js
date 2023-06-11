import DisneyLogo from './assets/logo.svg'
import home from './assets/home-icon.svg'
import search from './assets/search-icon.svg'
import tv from './assets/series-icon.svg'
import movie from './assets/movie-icon.svg'
import auth from './assets/auth.svg'

const Navbar = () => {
	
	const handleClick = () => {
		console.log('Subscribed!')
	}

	return (
		<nav className="navbar">
		<img src={DisneyLogo} style={
		{
			margin: "1vmax 1vmax 0 1vmax"
		}
		}/>
		<h1>hotstar</h1>
		<button onClick={handleClick} >Subscribe ></button>
		<div className="links">
			<a href="/"><img src={auth}/ ></a>
			<a href="/"><img src={search} /></a>
			<a href="/"><img src={home} /></a>
			<a href="/"><img src={tv} /></a>
			<a href="/"><img src={movie} /></a>
			
		</div>
		</nav>
	);
}

/*
			<a href="/"><img src=".svg"></a>
			<a href="/"><img src=".svg"></a>
			<a href="/"><img src=".svg"></a>
			<a href="/"><img src=".svg"></a>
			<a href="/"><img src=".svg"></a>*/
export default Navbar;
