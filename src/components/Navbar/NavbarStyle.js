import styled from 'styled-components'

export const Nav = styled.div`
   position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0.75rem 2rem;
    background: #f7f7f7;
    z-index: 1;
`;
export const NavCenter = styled.div`
    @media screen and (min-width: 768px) {
      max-width: 1170px;
      margin: 0 auto;
      display: flex;

    }
  
`;
export const NavHeader = styled.div`
    display: flex;
    justify-content: space-between;
    a {
      border: 2px solid #C6610F;
      letter-spacing: 3px;
      font-size: 1.5rem;
      text-decoration: none;
      padding: 5px;
      color: #222;
    }
    a span {
      color: #C6610F;
    }
    .nav-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    margin-right: 2rem;
    @media screen and (min-width: 768px) {
      display: none;
    }

  }
  .nav-icon {
    font-size: 1.5rem;
    color: #C6610F;
  }
`;
export const NavLinks = styled.div`
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    list-style-type: none;
    height: ${({isOpen})=> (isOpen ? '100px' : '0')};

    @media screen and (min-width: 768px) {
      height: auto;
      display: flex;
      margin-left: 4rem;
  }
 
   a {
    display: block;
    text-decoration: none;
    padding: 1rem 0;
    color: #222;
    transition: all .3s ease-in-out;
    text-align: center;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 3px;
    @media screen and (min-width: 768px) {
      margin: 0 1rem;
      padding: 0.5rem 0;    }
  }
   a:hover {
    color: var(--primaryColor);
  }
`;