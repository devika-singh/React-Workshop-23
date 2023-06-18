import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import playBlack from './assets/play-icon-black.png';
import playWhite from './assets/play-icon-white.png';
import add from './assets/watchlist-icon.svg';
import sub from './assets/watchlist-icon (copy).svg';
import { useSelector, useDispatch } from 'react-redux';
import {actions} from './store/index';
import {Provider} from 'react-redux';
import store from './store';

function Movie () {
  const location = useLocation()
  const [movie, setMovie] = useState(null);
  const [imgLoc, setImgLoc] = useState(null);
//const counter = useSelector((state) => state.fav);
const dispatch = useDispatch();
let addr = add;
  const [invert, setInvert] = useState(0);
	const toggleFav = () =>{
		addr = (addr == add) ? sub : add;
		if(invert == 0) setInvert(100);
		else setInvert(0);
		dispatch(actions.toggle( location.state.e.movie.id));
		console.log("togglefn " + location.state.e.movie.id);
	}

	useEffect(() => {
		setMovie(location.state);
		
		setImgLoc('url(\"'+location.state.e.movie.backgroundImg + '\")');
	}, []);
	
  return (
  	<div className="MoviePage">
	<Header/>
  	 <div className="Movie" style={
				{
					backgroundImage: imgLoc	
				}
			}>
			<div className='content'>
			{movie && <img src={movie.e.movie.titleImg}/ >}
			<div className='buttons'>
			<button className="Play"><img src={playBlack}/>Play</button>
			<button className="Trailer"><img src={playWhite}/>Trailer</button>
			<button className="Add"onClick={toggleFav}><img src={addr} style={{
			filter: "invert(" + invert + "%)"
			}} /></button>
			</div>
  	{movie && <h4 style={{color:"white"}}>{movie.e.movie.subTitle}</h4>}
  	{movie && <p style={{color:"white"}}>{movie.e.movie.description}</p>}
  	</div>
  	</div>
  	<Footer/>
  	</div>
  )
}

export default Movie;
