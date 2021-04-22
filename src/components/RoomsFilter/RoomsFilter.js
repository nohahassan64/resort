import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../../context'
import { TitleSection } from '../../globalStyle';
import { FilterContainer , Form , Label , Selected , Input , InputSizeBox , InputSize , SingleExtra , LabelExtra} from './RoomsFilterStyle'
// Get Unique values
const getUnique = (items , value) => {
    return [...new Set(items.map( item => item[value]))];
}

const RoomsFilter = ({rooms}) => {
    const context = useContext(RoomContext);
    console.log(context);
    const {
        handelChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;

    // Get Unique values
    let types = getUnique(rooms , 'type');
    types = ['all' , ...types]

    let people = getUnique(rooms , "capacity");

    return (
        <FilterContainer>
            <TitleSection>Search Rooms</TitleSection>
            <div className="line"></div>
            <Form>

                <div>
                    <Label htmlFor="type">Room Type</Label>
                    <Selected
                        name="type"
                        id="type"
                        value={type}
                        onChange={handelChange}
                    >
                        {types.map( (item , index) => {
                            return <option key={index} value={item}>{item}</option>
                        })}
                    </Selected>
                </div>


                <div>
                    <Label htmlFor="capacity">Guests</Label>
                    <Selected
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        onChange={handelChange}
                    >
                        {people.map( (item , index) => {
                            return <option key={index} value={item}>{item}</option>
                        })}
                    </Selected>
                </div>

                <div>
                    <Label htmlFor="price">Room Price ${price}</Label>
                    <Input
                        type="range"
                        name="price"
                        id="price"
                        value={price}
                        min={minPrice}
                        max={maxPrice}
                        onChange={handelChange}
                    />
                </div>

                <div>
                    <Label htmlFor="size">Room Size</Label>
                    <InputSizeBox>
                        <InputSize
                            type="number"
                            name="minSize"
                            id="size"
                            value={minSize}
                            onChange={handelChange}
                        />
                          <InputSize
                            type="number"
                            name="maxSize"
                            id="size"
                            value={maxSize}
                            onChange={handelChange}
                        />
                    </InputSizeBox>
                </div>

                <div>
                    <SingleExtra>
                        <Input
                            type="checkbox"
                            name="breakfast"
                            id="breakfast"
                            checked={breakfast}
                            onChange={handelChange}
                        />
                        <LabelExtra htmlFor="breakfast">Breakfast</LabelExtra>
                    </SingleExtra>
                    <SingleExtra>
                        <Input
                            type="checkbox"
                            name="pets"
                            id="pets"
                            checked={pets}
                            onChange={handelChange}
                        />
                        <LabelExtra htmlFor="pets">Pets</LabelExtra>
                    </SingleExtra>
                </div>

            </Form>
        </FilterContainer>
    )
}
export default RoomsFilter
