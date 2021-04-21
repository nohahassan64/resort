import React from 'react'
import { HeroSection } from '../globalStyle'

const Hero = ({ children , hero}) => {
    return (
        <HeroSection className={hero}>
            {children}
        </HeroSection>
    )
}

export default Hero
Hero.defaultProps ={
    hero: "defaultHero"
}