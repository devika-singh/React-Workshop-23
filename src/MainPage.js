import Navbar from './Navbar';
import Home from './Home';
import Slider from './Slider';

function MainPage() {
  return (
    <div className="App">
    	<Navbar />
    	
	<Slider/>
    	<div className="content">
		<Home />
     	</div>
    </div>
  );
}

export default MainPage;
