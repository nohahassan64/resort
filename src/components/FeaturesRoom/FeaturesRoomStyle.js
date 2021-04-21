import styled from 'styled-components'

export const FeatureSection = styled.div`
    padding: 5rem 0;
    background: #fff;
    text-align: center;
    .line {
        width: 10rem;
        height: 5px;
        background: #C6610F;
        margin: 1.7rem auto;
    }
`;
export const FeatureRoomBox = styled.div`
  width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 40px;
    @media screen and (min-width: 776px) {
      width: 90vw;
      grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  }
  @media screen and (min-width: 992px) {
      width: 95vw;
      max-width: 1170px;
  }
`;