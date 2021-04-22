import React from 'react'
import Room from '../Room/Room'
import {EmptySearch , RoomListSec , RoomListBox } from './RoomsListStyle'

export const RoomsList = ({rooms}) => {
    if(rooms.length === 0) {
        return (
            <EmptySearch>
                <h3>Unfortunately No Rooms Matched Your Search Parameters</h3>
            </EmptySearch>
        );
    }
    return (
        <RoomListSec>
            <RoomListBox>
                {rooms.map( (item , index) => {
                    return <Room key={index} room={item} />
                })}
            </RoomListBox>
        </RoomListSec>
    )
}
export default RoomsList
