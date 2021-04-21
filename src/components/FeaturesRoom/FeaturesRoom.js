import React, { Component } from 'react'
import { RoomContext } from '../../context'
import { TitleSection } from '../../globalStyle';
import Loading from '../Loading';
import Room from '../Room/Room';
import { FeatureSection , FeatureRoomBox } from './FeaturesRoomStyle'

export default class FeaturesRoom extends Component {
    static contextType = RoomContext;
    render() {
        let {loading , featuredRooms: rooms } = this.context;
         rooms = rooms.map( room => {
             return(
                 <Room key={room.id} room={room} />
             );
         })
        return (
            <FeatureSection>
                <TitleSection>Featured Rooms</TitleSection>
                <div className="line"></div>
                <FeatureRoomBox>
                    {loading ? <Loading /> : rooms }
                </FeatureRoomBox>
            </FeatureSection>
        )
    }
}
