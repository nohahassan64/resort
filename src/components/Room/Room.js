import React from 'react'
import PropTypes from 'prop-types'
import { RoomBox , ImgContainer , Price , RoomInfo , Image , RoomLink } from './RoomStyle'

const Room = ({room}) => {
    const { name , slug , images , price } = room;
    return (
        <RoomBox>
            <ImgContainer>
                <Image src={images[0]} alt="" />
                <Price>
                    <h6>{price}</h6>
                    <p>per night</p>
                </Price>
                <RoomLink to={`/rooms/${slug}`} className="room-link">Features</RoomLink>
            </ImgContainer>
            <RoomInfo>{name}</RoomInfo>
        </RoomBox>
    )
}

export default Room
Room.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired,
    })

}