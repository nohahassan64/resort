import React from 'react'
import Banner from '../components/Banner/Banner'
import Hero from '../components/Hero'
import  RoomsContainer from '../components/RoomsContainer'
import { Button } from '../globalStyle'

const Rooms = () => {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="Our Rooms">
                    <Button to="/" primary="true">Return Home</Button>
                </Banner>
            </Hero>
            <RoomsContainer />
        </>
    )
}

export default Rooms
