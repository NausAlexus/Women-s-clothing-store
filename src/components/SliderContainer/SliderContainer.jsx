import './SliderContainer.css'
import Slider from '../Slider/Slider';

function SliderContainer() {

    function hoverClickLink1(){
        document.querySelector('.slide-link-1').click()
    }
    function hoverClickLink2(){
        document.querySelector('.slide-link-2').click()
    }
    function hoverClickLink3(){
        document.querySelector('.slide-link-3').click()
    }
    function hoverClickLink4(){
        document.querySelector('.slide-link-4').click()
    }

	return (
		
        <div className='slider-container'>

            <div className='slider-controls'>
                <input name='controls' type="radio" id='controls-1' />
                <label className='controls-label-1' htmlFor="controls-1">
                    <a className='slide-link-1' href="#slide-1"><div><img src="https://contentstore.triumph.com/transform/4866c8cf-110c-425d-91b8-f69d23b546da/30_10221469_00YO_2.jpg?" alt="Slide1" onMouseOver={hoverClickLink1}/></div></a>
                </label>
                <input name='controls' type="radio" id='controls-2' />
                <label className='controls-label-2' htmlFor="controls-2">
                    <a className='slide-link-2' href="#slide-2"><div><img src="https://contentstore.triumph.com/transform/d2f70b54-db06-4235-9c47-fee472e2600a/30_10221469_00YO_3.jpg?" alt="Slide2" onMouseOver={hoverClickLink2}/></div></a>
                </label>
                <input name='controls' type="radio" id='controls-3' />
                <label className='controls-label-3' htmlFor="controls-3">
                    <a className='slide-link-3' href="#slide-3"><div><img src="https://contentstore.triumph.com/transform/08f0b063-42ac-4762-ab83-10444597cfe7/30_10221469_00YO_4.jpg?" alt="Slide3" onMouseOver={hoverClickLink3}/></div></a>
                </label>
                <input name='controls' type="radio" id='controls-4' />
                <label className='controls-label-4' htmlFor="controls-4">
                    <a className='slide-link-4' href="#slide-4"><div><img src="https://contentstore.triumph.com/transform/3fbd472b-f317-44e4-a6e0-3d38ffb6d776/30_10221469_00YO_1.png?" alt="Slide4" onMouseOver={hoverClickLink4}/></div></a>
                </label>
            </div>

            <Slider/>

        </div>

	)

};

export default SliderContainer;