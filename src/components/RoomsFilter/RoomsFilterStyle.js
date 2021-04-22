import styled from 'styled-components'

export const FilterContainer = styled.div`
    padding: 5rem 0;
    .line {
        width: 10rem;
        height: 5px;
        background: #C6610F;
        margin: 1.7rem auto;
    }
`;
export const Form = styled.form`
    width: 60vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(202px, 1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 40px;
  
`;
export const Label = styled.label`
  display: block;
    letter-spacing: 3px;
    margin-bottom: 0.5rem;
`;
export const Selected = styled.select`
 width: 100%;
    background: transparent;
    font-size: 1rem;
`;
export const Input = styled.input`
   width: 100%;
    background: transparent;
    font-size: 1rem;
    background: #222;
`;
export const InputSizeBox  = styled.div`
    display: flex;
`;
export const InputSize  = styled.input`
  width: 40%;
    padding: 0.2rem;
    border: 1px solid #222;
    border-radius: 0.3rem;
    margin-right: 0.3rem;
`;
export const SingleExtra  = styled.div``;
export const LabelExtra  = styled.label`
 display: inline-block;
    font-size: 0.8rem;
    margin-left: 0.5rem;
`;

 