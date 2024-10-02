import './Main.css'
import SliderContainer from '../SliderContainer/SliderContainer';
import Menu from '../Menu/Menu';
import Info from '../Info/Info';

function Main() {

	return (

		<div className='main-container'>
			<div>
				<SliderContainer/>
				<Info/>
			</div>

			<Menu/>

		</div>

	)

};

export default Main;