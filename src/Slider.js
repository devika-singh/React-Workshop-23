import { Link } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import imgLoc from './assets/slider-badag.jpg'
import imgLoc2 from './assets/slider-badging.jpg'
import { useState, useEffect } from 'react';

function Slider(){
	const [bgLoc, setBgLoc] = useState(null);
	console.log(bgLoc);
	
	const btnpressprev = () => {
		if(bgLoc == 'url(\"'+imgLoc + '\")')
			setBgLoc('url(\"'+imgLoc2 + '\")');
		else
			setBgLoc('url(\"'+imgLoc + '\")');
	}
	
	const btnpressnext = () => {
		if(bgLoc == 'url(\"'+imgLoc + '\")')
			setBgLoc('url(\"'+imgLoc2 + '\")');
		else
			setBgLoc('url(\"'+imgLoc + '\")');
	}
	
	useEffect(() => {
		setBgLoc('url(\"'+imgLoc + '\")');
	}, []);
	
	return (
		<div className="Slider">
		<Header/>		
			<div className="content" style={
				{
					backgroundImage: bgLoc	
				}
			}>
			<button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
		<button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>
			</div>
		</div>
	);
}

export default Slider;
