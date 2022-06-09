import React from 'react'
const BtnSlider = ({direction, mouseSlide }) => {
    return (
       <button className={direction === 'right' ? 'btn btn_right' : 'btn btn_left'} onClick={mouseSlide}>
           <img src={direction === 'right' ? './arrow right.png' : './arrow left.png' } alt='icon img' />
       </button>
    )
}

export default BtnSlider
