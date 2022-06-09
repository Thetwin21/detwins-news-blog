import React, { useEffect, useState } from 'react'
import slider from '../slider.json'
import BtnSlider from './BtnSlider'

const SlideContainer = () => {
    const [slideIndex, setSlideIndex] = useState(1);
  
    const interval = () => {
        setInterval(() => {
       if(slideIndex !== slider.length){
             setSlideIndex(slideIndex + 1)
         }else if (slideIndex === slider.length){
             setSlideIndex(1)
         }
    }, 4000);
    }

  // autoplay
 useEffect(() => {
    interval()
   }, [slideIndex])
    const slideRight = () => {
       if(slideIndex !== slider.length){
             setSlideIndex(slideIndex + 1)
         }else if (slideIndex === slider.length){
             setSlideIndex(1)
         }
    }
    const slideLeft = () => {
        if(slideIndex !== 1 ){
            setSlideIndex(slideIndex - 1)
        }else if(slideIndex === 1) {
            setSlideIndex(slider.length)
        }
    }

    return (
        <div className='slider' >
            {slider.map((slide , index) => (
        <div className={slideIndex === index + 1 ? "slide active" : "slide static"} key={slide.id}>
          <img src={slide.url} alt={`imageslide${slide.id}`} />
          <div className="text-container">
             <div className="text">
                 <h1>{slide.heading}</h1>
                 <br />
                 <p>{slide.text}</p>
                 <button>More</button>
             </div>
          </div>
        </div>
        ))}
        <BtnSlider direction={'right'} mouseSlide={slideRight} />
        <BtnSlider direction={'left'} mouseSlide={slideLeft} />
        </div>
    )
}

export default SlideContainer;
