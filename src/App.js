import react from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from './MainPage.js';
import LandingPage from './LandingPage';
import Movie from './Movie';
import { useSelector, Provider } from 'react-redux';

function App() {
const counter = useSelector((state) => state.counter);
  return (
	<BrowserRouter>
		<Routes>
		<Route path='/' element={<LandingPage/>}/>
		<Route path='/explore' element={<MainPage />}/>
		<Route path='/explore/:title' element={<Movie />}/>
		</Routes>
	</BrowserRouter>
  );
}

export default App;
