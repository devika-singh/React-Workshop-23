import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import playBlack from './assets/play-icon-black.png';
import playWhite from './assets/play-icon-white.png';
import add from './assets/watchlist-icon.svg'

function Movie () {
  const location = useLocation()
  const [movie, setMovie] = useState(null);
  const [imgLoc, setImgLoc] = useState(null);

	useEffect(() => {
		setMovie(location.state);
		
		setImgLoc('url(\"'+location.state.e.movie.backgroundImg + '\")');
	}, []);
	
  return (
  	<div class="MoviePage">
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
			<button className="Add"><img src={add}/ ></button>
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
