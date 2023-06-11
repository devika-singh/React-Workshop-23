import { useState } from 'react';
import Movie from './Movie';
import { Link } from 'react-router-dom';

const CardList = ({movies,title}) => {
	const jsx = movies.map((movie) => {
		let imgLoc = 'url(\"'+movie.cardImg + '\")';
		return(
		<Link to={`/explore/${movie.title}`} state={{e:{movie}}}><div className="Card" key={movie.id}
			style={
				{
					backgroundImage: imgLoc	
				}
			}>
		</div></Link>
		)
		})
		
		
	const box = document.querySelector('.CardContainer');	
	const btnpressprev = () => {
		if(box){
		let width = box.clientWidth;
		box.scrollLeft = box.scrollLeft - width;
		console.log(width);
		}
	}
	
	const btnpressnext = () => {
		if(box){
		let width = box.clientWidth;
		box.scrollLeft = box.scrollLeft + width;
		console.log(width);
		}
	}
		
	return (
		<div className="CardList">
		<h1>{title}</h1>
		<div className="CardContainer">
		<button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
		<button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>
			{jsx}
		</div>
		</div>
	);
}

export default CardList;
