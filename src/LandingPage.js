import { Link } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import imgLoc from './assets/login-background.jpg'
import { useState, useEffect } from 'react';

function LandingPage(){
	const [bgLoc, setBgLoc] = useState(null);
	console.log(bgLoc);
	
	useEffect(() => {
		setBgLoc('url(\"'+imgLoc + '\")');
	}, []);
	
	return (
		<div className="LandingPage">
		<Header/>		
			<div className="content" style={
				{
					backgroundImage: bgLoc	
				}
			}>
				<Link to='/explore'><button type="button">Explore</button></Link>
				<p>
					The best stories in the world,
all in one place. $89.99/year Save with an annual subscription. T&Cs apply. $8.99/year Start streaming Disney+. No ads, no up-charges.
				</p>
			</div>
		<Footer/>
		</div>
	);
}

export default LandingPage;
