import { TbBackground } from 'react-icons/tb';
import React, { useState } from 'react';
import './Slider.css'

function Slider() {

    const [isZoomed, setIsZoomed] = useState(false);
    const [backgroundPosition, setBackgroundPosition] = useState('50% 50%');

    const zoom = (e) => {
        const zoomer = e.currentTarget;
        const offsetX = e.nativeEvent.offsetX !== undefined ? e.nativeEvent.offsetX : e.touches[0].pageX - zoomer.getBoundingClientRect().left;
        const offsetY = e.nativeEvent.offsetY !== undefined ? e.nativeEvent.offsetY : e.touches[0].pageY - zoomer.getBoundingClientRect().top; 
        const x = (offsetX / zoomer.offsetWidth) * 100;
        const y = (offsetY / zoomer.offsetHeight) * 100;
        
        setBackgroundPosition(`${x}% ${y}%`);
    };

    const toggleZoom = () => {
        setIsZoomed(!isZoomed);
    };

    const MouseLeave = () => {
        if (isZoomed) {
            setIsZoomed(false);
            setBackgroundPosition('50% 50%');
        }
    };

	return (
		
		<div className='slider'>
			<div className='slider-wrap1' onClick={toggleZoom} onMouseMove={zoom} onTouchMove={zoom} onMouseLeave={MouseLeave} style={{
                    backgroundPosition: isZoomed ? backgroundPosition : '50% 50%',
					cursor: isZoomed ? 'zoom-out' : 'zoom-in',
                    transition: 'background-position 0.5s'}}>
				<img id='slide-1' src="https://contentstore.triumph.com/transform/4866c8cf-110c-425d-91b8-f69d23b546da/30_10221469_00YO_2.jpg?" alt="Slide1" style={{ opacity: isZoomed ? 0 : 1 }}/>
			</div>
			
			<div className='slider-wrap2' onClick={toggleZoom} onMouseMove={zoom} onTouchMove={zoom} onMouseLeave={MouseLeave} style={{
                    backgroundPosition: isZoomed ? backgroundPosition : '50% 50%',
					cursor: isZoomed ? 'zoom-out' : 'zoom-in',
                    transition: 'background-position 0.5s'}}>
				<img id='slide-2' src="https://contentstore.triumph.com/transform/d2f70b54-db06-4235-9c47-fee472e2600a/30_10221469_00YO_3.jpg?" alt="Slide2" style={{ opacity: isZoomed ? 0 : 1 }}/>
			</div>

			<div className='slider-wrap3' onClick={toggleZoom} onMouseMove={zoom} onTouchMove={zoom} onMouseLeave={MouseLeave} style={{
                    backgroundPosition: isZoomed ? backgroundPosition : '50% 50%',
					cursor: isZoomed ? 'zoom-out' : 'zoom-in',
                    transition: 'background-position 0.5s'}}>
				<img id='slide-3' src="https://contentstore.triumph.com/transform/08f0b063-42ac-4762-ab83-10444597cfe7/30_10221469_00YO_4.jpg?" alt="Slide3" style={{ opacity: isZoomed ? 0 : 1 }}/>
			</div>

			<div className='slider-wrap4' onClick={toggleZoom} onMouseMove={zoom} onTouchMove={zoom} onMouseLeave={MouseLeave} style={{
                    backgroundPosition: isZoomed ? backgroundPosition : '50% 50%',
					cursor: isZoomed ? 'zoom-out' : 'zoom-in',
                    transition: 'background-position 0.5s'}}>
				<img id='slide-4' src="https://i.ibb.co/Nsz30wx/30-10221469-00-YO-1.png" alt="Slide4" style={{ opacity: isZoomed ? 0 : 1 }}/>
			</div>
		</div>

	)

};

export default Slider;