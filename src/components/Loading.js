import React from 'react'
import { ImSpinner9 } from 'react-icons/im'
import styled from 'styled-components'

const LoadSec = styled.div`
    text-transform: capitalize;
    text-align: center;
    margin-top: 3rem;
    h2 {
        font-size: 2rem;
        margin: 2rem 0;
    }
    span {
        color: #C6610F;
        font-size: 5rem;
    }
`;
const Loading = () => {
    return (
        <LoadSec>
            <h2>Rooms Data Loading...</h2>
            <span>
                <ImSpinner9 />
            </span>    
        </LoadSec>
    )
}

export default Loading
