import React from 'react'
import Banner from '../components/Banner/Banner'
import FeaturesRoom from '../components/FeaturesRoom/FeaturesRoom'
import Hero from '../components/Hero'
import Services from '../components/Services/Services'
import { Button } from '../globalStyle'

const Home = () => {
    return (
       <>
         <Hero>
            <Banner title="Luxurious Rooms" subtitle="Deluxe Rooms Starting At $299">
                <Button to="/rooms">Our Rooms</Button>
            </Banner>
        </Hero>
        <Services />
        <FeaturesRoom />
       </>
    )
}

export default Home
