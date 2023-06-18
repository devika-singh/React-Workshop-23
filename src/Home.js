import { useState, useEffect } from 'react';
import db from './db.js';
import CardList from './Card.js';
import Footer from './Footer';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
	const [movies, setMovies] = useState(null);
	const [newMov, setNewMov] = useState(null);
	const [trendMov, setTrendMov] = useState(null);
	const [reccMov, setReccMov] = useState(null);
	const [ogMov, setOgMov] = useState(null);
	const [favMov, setFavMov] = useState(null);
	
	const noFav = useSelector((state) => state.totalFav);
	
	const favMovies = useSelector((state) => state.fav);
	
	
	useEffect(() => {
		setMovies(db);
		
		setNewMov(db.filter((movie) => {
					return movie.type == 'new';
				}));
		setTrendMov(db.filter((movie) => {
					return movie.type == 'trending';
				}));
		setReccMov(db.filter((movie) => {
					return movie.type == 'recommend';
				}));
		setOgMov(db.filter((movie) => {
					return movie.type == 'original';
				}));
	}, []);
	
	useEffect(() => {
		setFavMov(db.filter((movie) => {
					return favMovies.includes(movie.id);
				}));
	}, [noFav]);
	
	return (
		<div className="Home">
			{favMov && (noFav != 0) && <CardList movies={favMov} title='Favourites' />}
			{movies && <CardList movies={movies} title='All' />}
			{newMov && <CardList movies={newMov} title='New'/>}
			{trendMov && <CardList movies={trendMov} title='Trending'/>}
			{reccMov && <CardList movies={reccMov} title='Recommended'/>}
			{ogMov && <CardList movies={ogMov} title='Original'/>}
     		<Footer/>
			
		</div>
	);
}


export default Home;
