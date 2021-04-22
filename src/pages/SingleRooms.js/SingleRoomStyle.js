import styled from 'styled-components'

export const SingleRoomSec = styled.div`
    padding: 5rem 0 0 0;

`; 
export const RoomImages = styled.div`
    width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 50px;
    img {
        width: 100%;
        display: block;
    }
    @media screen and (min-width: 992px) {
      width: 95vw;
      max-width: 1170px;
    }
`; 
export const RoomInfo = styled.div`
 width: 80vw;
    display: grid;
    grid-template-columns: 1fr;
    margin: 2rem auto;
    @media screen and (min-width: 992px) {
      width: 95vw;
      max-width: 1170px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 2rem;
    }
`;
export const Desc = styled.div`
    margin: 1rem 0;
     h3 {
    letter-spacing: 3px;
  }
   p {
    line-height: 1.5;
  }
`;
export const Info = styled.div`
    margin: 1rem 0;
    @media screen and (min-width: 992px) {
        padding-left: 3rem;
    }
     h3{
    letter-spacing: 3px;
  }
   
   h6 {
    font-weight: 300;
    letter-spacing: 3px;
  }
`;
export const RoomExtras = styled.div`
  width: 80vw;
    margin: 0 auto 3rem auto;
    h6 {
    letter-spacing: 3px;
    @media screen and (min-width: 992px) {
      width: 95vw;
      max-width: 1170px;
    }
  }
`;
export const UlExtras = styled.ul`
 list-style-type: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 1rem;
`;
