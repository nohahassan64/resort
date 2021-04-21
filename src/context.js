import React, { Component } from 'react'
import items from './data'
const RoomContext = React.createContext();

class RoomProvider extends Component {
    state= {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true
    };

    // Get Data 
    componentDidMount() {
        let rooms = this.formateData(items);
        let featuredRooms = rooms.filter( room => room.featured === true);
        this.setState({
            rooms,
            sortedRooms: rooms,
            featuredRooms,
            loading: false
        });
    }
    formateData(items) {
        let tempItems = items.map( item => {
            let id = item.sys.id;
            let images = item.fields.images.map( image => image.fields.file.url);
            let room = { ...item.fields , images , id };
            return room;
        });
        return tempItems;
    }

    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find( room => room.slug === slug);
        return room;
    }
    render() {
        return (
            <RoomContext.Provider value={ {...this.state , getRoom: this.getRoom }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}
const RoomeConsumer = RoomContext.Consumer;
export{RoomProvider , RoomeConsumer , RoomContext};