import React, { Component } from 'react'
import { FaBeer, FaCocktail, FaHiking, FaShuttleVan } from 'react-icons/fa'
import { TitleSection } from '../../globalStyle'
import { ServicesSec , ServicesBox } from './ServicesStyle'

class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'Free Cocktail',
                body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, necessitatibus.'
            },
            {
                icon: <FaHiking />,
                title: 'Endless Hicking',
                body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, necessitatibus.'
            },
            {
                icon: <FaShuttleVan />,
                title: 'Free Shuttle',
                body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, necessitatibus.'
            },
            {
                icon: <FaBeer />,
                title: 'Strongest Beer',
                body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, necessitatibus.'
            }
        ]
    }
   render() {
    return (
        <ServicesSec>
            <TitleSection>Services</TitleSection>
            <div className="line"></div>
            <ServicesBox>
                {this.state.services.map( (item , index) => {
                    return(
                        <div key={index}>
                            <span>{item.icon}</span>
                            <h5>{item.title}</h5>
                            <p>{item.body}</p>
                        </div>
                    )
                })}
            </ServicesBox>
        </ServicesSec>
    )
   }
}

export default Services
