import styled , { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'
import defaultBg from './images/background/01.jpg'
import roomBg from './images/background/02.jpg'

export const GlobalStyle = createGlobalStyle`
 * {
     margin: 0;
     padding: 0;
     box-sizing: 0;
     font-family: sans-serif
 }
 html , body {
     overflow-x: hidden;
 }
 h1 {
    font-size: 3em;
    line-height: 1;
    margin-bottom: 0.5em;
  }
  h2 {
    font-size: 2em;
    margin-bottom: 0.75em;
  }
  h3 {
    font-size: 1.5em;
    line-height: 1;
    margin-bottom: 1em;
  }
  h4 {
    font-size: 1.2em;
    line-height: 1.25;
    margin-bottom: 1.25em;
  }
  h5 {
    font-size: 1em;
    font-weight: bold;
    margin-bottom: 1.5em;
  }
  h6 {
    font-size: 1em;
    font-weight: bold;
    margin-bottom: 1.5em;
  }
  
`
export const Section = styled.div`
    padding: 4rem 0 ;
`;
export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 100px;
    padding-right: 100px;

@media screen and (max-width: 991px) {
    padding-left: 30px;
    padding-right: 30px;
    }
`;
export const SecRow = styled.div`
    margin: 0 -15px -15px -15px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;
export const SecColumn = styled.div`
    margin-bottom: 15px;
    padding-left: 0px;
    padding-right: 0px;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;
@media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    max-width: 100%;
    flex-basis: 100%;
    }
`;
export const Button = styled(Link)`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: ${({primary}) => ( primary ? '#C6610F' : 'transparent')};
    border: ${({primary}) => ( primary ? '2px solid #C6610F' : '2px solid #C6610F')};
    color: #fff;
    max-width: 200px;
    padding: .7rem 1.2rem;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    transition: all .5s ease-in-out;
    font-size: 2rem;
    

    &:hover {
        background: ${({primary}) => ( primary ? 'transparent' : '#C6610F')};
        border: ${({primary}) => ( primary ? '2px solid #C6610F' : '2px solid #C6610F')};
    }
    
`;
export const HeroSection = styled.header`
 min-height: calc(100vh - 66px);
    background: url(${props => props.img ? props.img : defaultBg}) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10rem;
    color: #f00;
  &.roomsHero {
    background-image: url(${roomBg});
    min-height: 80vh;
  }
`;
export const TitleSection = styled.h2`
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2rem;
    letter-spacing: 3px;
`;