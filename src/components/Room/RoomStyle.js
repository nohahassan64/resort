import styled from 'styled-components'

export const RoomBox = styled.div`
    box-shadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);
    transition: all .3s ease-in-out;
    &:hover {
        box-shadow: 4px 10px 5px 0px rgba(0, 0, 0, 0.5);

    }
`; 
export const ImgContainer = styled.div`
    position: relative;
    &:hover {
        background: rgba(0, 0, 0, 0.8);
    }
     img {
    width: 100%;
    display: block;
    transition: all .3s ease-in-out;
    &:hover{
        opacity: 0.3;
    }
  }
  .room-link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: scale(.5);
    transition: all 0.3s linear;
    &:hover{
        transform: translate(-50%, -50%) scale(1);
    }
  }

`; 
export const Price = styled.div`
   position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 0.3rem 0.6rem 0.5rem;
    border-bottom-right-radius: 1rem;
    font-size: 0.5rem;
    text-align: center;
    transition: all .3s ease-in-out;
    ${ImgContainer}:hover &  {
        opacity: 0;
    }
     h6 {
    margin-bottom: 0;
    font-size: 0.9rem;
    font-weight: 300;
    letter-spacing: 3px;
  }
`; 
export const RoomInfo = styled.p`
 background: #cfcfcf;
    text-transform: capitalize;
    padding: 0.5rem 0;
    text-align: center;
    font-weight: 700;
    letter-spacing: 3px;
`; 

