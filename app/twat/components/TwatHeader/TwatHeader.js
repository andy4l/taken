import React from 'react'
import HeaderPicture from "../../images/headerpic.jpeg"
import Image from 'next/image'

import "./TwatHeader.css"

const TwatHeader = () => {
    const date = "December 1st, 2023"

  return (
    <div className='TwatHeaderContainer'>
        <div className='HeaderBar'>
            <div>TWAT | Taken</div>
            <div>{date}</div>
        </div>
        <Image src={HeaderPicture} alt={"Header Picture"} width={400} className='HeaderImage' />
    </div>
  )
}

export default TwatHeader