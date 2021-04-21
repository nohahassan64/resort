import React from 'react'
import { BannerSec } from './BannerStyle'

const Banner = ({ children , title , subtitle }) => {
    return (
        <BannerSec>
            <h1>{title}</h1>
            <div className="line"></div>
            <p>{subtitle}</p>
            {children} 
        </BannerSec>
    )
}

export default Banner
