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
	const [latMov, setLatMov] = useState([]);
	
	const noFav = useSelector((state) => state.totalFav);
	
	const favMovies = useSelector((state) => state.fav);
	
	
	useEffect(() => {
		setMovies(db);
		
		setNewMov(db.filter((movie) => {
					return movie.type == 'new';
				}));
	
		let genre = ["Documentary","Science Fiction", "Kids","Family","Comedy","Docuseries","Coming of Age"];		
		let i =0;
		for( let g =0 ; g <genre.length; g++){
		let arr= (db.map((movie) => {
			let subT = movie.subTitle.split(" • ");
			let gen = subT[2].split(",");
			//console.log(genre[g] + " : " + gen[0] + " : " + subT[0]);
			if(gen[0] == genre[g])
				return parseInt(subT[0],10);
			else
				return 0;
		}));
		let min = arr.reduce((a, b) => Math.max(a, b), -Infinity);
		//console.log(tempDb);
		let tempDb = db.filter((movie) => {
			let subT = movie.subTitle.split(" • ");
			let gen = subT[2].split(",");
			return gen[0] == genre[g] && min == subT[0]
		});
		if(tempDb.length != 0){
		let temp = latMov;
		for( let x in tempDb){
			temp[i++] = tempDb[x];
		}
		console.log(temp);
		setLatMov(temp);
		}
		}
		
		console.log(latMov);
		console.log(db);
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
			{latMov && <CardList movies={latMov} title='Latest' />}
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
