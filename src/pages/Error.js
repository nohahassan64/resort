import React from 'react'
import Banner from '../components/Banner/Banner'
import Hero from '../components/Hero'
import { Button } from '../globalStyle'

const Error = () => {
    return (
       <Hero>
           <Banner title="404" subtitle="Page Not Found">
                <Button to="/resort">Return Home</Button>
            </Banner>
       </Hero>
    )
}

export default Error
