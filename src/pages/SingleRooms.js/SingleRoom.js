import React, { Component } from 'react'
import Banner from '../../components/Banner/Banner';
import { RoomContext } from '../../context';
import { Button, HeroSection } from '../../globalStyle';
import ImageDefault from '../../images/rooms/01.jpg'
import { SingleRoomSec , RoomImages , RoomInfo , Desc , Info , RoomExtras , UlExtras } from './SingleRoomStyle'

export default class SingleRoom extends Component {
    constructor(props) {
        super(props);
        this.state= {
            slug: this.props.match.params.slug,
            ImageDefault
        }
    }
    static contextType = RoomContext;
    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        if(!room) {
            return(
                <div>
                    <h3>No Such Room Could Be Found</h3>
                    <Button to="/rooms" primary="true">Back To Rooms</Button>
                </div>
            );
        }
        const { name , description , capacity , size , price , extras , breakfast , pets , images} = room;
        const [mainImage , ...defaultImages] = images
        return (
            <>
                <HeroSection img={ mainImage || this.state.ImageDefault }>
                    <Banner title={`${name} room`}>
                        <Button to="/rooms">Back To Rooms</Button>
                    </Banner>
                </HeroSection>
                <SingleRoomSec>
                    <RoomImages>
                        {defaultImages.map( (item , index) => {
                            return(
                                <img key={index} src={item} alt={name} />
                            )
                        })}
                    </RoomImages>
                    <RoomInfo>
                        <Desc>
                            <h3>Details</h3>
                            <p>{description}</p>
                        </Desc>
                        <Info>
                            <h3>Info</h3>
                            <h6>Price : ${price}</h6>
                            <h6>Size : ${size} SQFT</h6>
                            <h6>
                                Max Capacity : { capacity > 1 ? `${capacity} People` : `${capacity} Person`}
                            </h6>
                            <h6>{pets? "Pets Allowed" : "No Pets Allowed"}</h6>
                            <h6>{breakfast && "Free Breakfast Included"}</h6>
                        </Info>
                    </RoomInfo>
                </SingleRoomSec>
                <RoomExtras>
                    <h6>Extras</h6>
                    <UlExtras>
                        {extras.map( (item , index) => {
                            return <li key={index}>- {item}</li>
                        })}
                    </UlExtras>
                </RoomExtras>
            </>
        )
    }
}
