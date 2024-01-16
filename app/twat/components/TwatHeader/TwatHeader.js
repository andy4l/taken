import React from 'react'
// import HeaderPicture from "../../images/headerpic.jpeg"
import HeaderPicture from "../../images/oryx4.jpg"
import Image from 'next/image'

import "./TwatHeader.css"

const TwatHeader = () => {

  return (
    <div className='TwatHeaderContainer'>
        <div className='HeaderBar'>
            <div>TWAT | Taken</div>
        </div>
        <div className='HeaderPictureContainer'>
          <Image src={HeaderPicture} alt={"Header Picture"} width={400} className='HeaderImage' unoptimized />
        </div> 
    </div>
  )
}

export default TwatHeader