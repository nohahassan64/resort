import React from 'react'
import { withRoomConsumer } from '../context'
import Loading from './Loading'
import  RoomsFilter  from './RoomsFilter/RoomsFilter'
import  RoomsList  from './RoomsList/RoomsList'

const RoomsContainer = ({context}) => {
       const { rooms,sortedRooms, loading } = context;
        if(loading) {
            return <Loading />;
        }
        return (
        <div>
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/>
        </div>
        );
                  
}
export default withRoomConsumer(RoomsContainer)
