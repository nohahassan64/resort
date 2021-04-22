import styled from 'styled-components'

export const EmptySearch = styled.div`
    text-align: center;
`;
export const RoomListSec = styled.div`
    padding: 5rem 0;
`;
export const RoomListBox = styled.div`
  width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 30px;
    @media screen and (min-width: 776px) {
      width: 90vw;
  }
  @media screen and (min-width: 992px) {
      width: 95vw;
      max-width: 1170px;
  }
`;