import styled from 'styled-components'

export const BannerSec = styled.div`
    display: inline-block;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 2rem 1rem;
    text-align: center;
    letter-spacing: 3px;
    border-radius: 5px;
    @media screen and (min-width: 576px) {
      padding: 2rem 3rem;
    }
    @media screen and (min-width: 992px) {
      padding: 2rem 6rem;
    }
     h1 {
    font-size: 2.5rem;
    line-height: 1;
    @media screen and (min-width: 576px) {
        font-size: 3rem;
    }
    @media screen and (min-width: 992px) {
        font-size: 4rem;
    }
  }
   .line {
    width: 10rem;
    height: 5px;
    background: #C6610F;
    margin: 1.7rem auto;
  }
   p {
    font-size: 1.2rem;
  }
`;