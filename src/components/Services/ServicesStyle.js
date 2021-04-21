import styled from 'styled-components'

export const ServicesSec = styled.div`
    padding: 5rem 0;
    background: #cfcfcf;
    text-align: center;
    .line {
        width: 10rem;
        height: 5px;
        background: #C6610F;
        margin: 1.7rem auto;
    }
`;
export const ServicesBox = styled.div`
    width: 90vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 50px;
    @media screen and (min-width: 992px) {
      width: 95vw;
      max-width: 1170px;
    }
    span {
    display: inline-block;
    color: #c6610f;
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
   h5 {
    letter-spacing:3px;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
  p {
    width: 80%;
    margin: 0 auto;
    line-height: 1.5;
    @media screen and (min-width: 1200px) {
      width: 100%;
    }
  }
`;