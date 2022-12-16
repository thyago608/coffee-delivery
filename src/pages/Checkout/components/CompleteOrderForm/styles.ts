import styled, { css } from "styled-components"

export const FormContainer = styled.div`
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
`

interface InputProps {
    error: boolean;
}

export const Input = styled.input<InputProps>`
    background: ${(props) => props.theme.colors['base-input']};
    border: 1px solid ${(props) => props.theme.colors['base-button']};
    border-radius: 4px;

    width: 100%;
    height: 42px;
    padding: 0 0.8rem;

    color: ${(props) => props.theme.colors['base-text']};
    font-size: 14px;

    outline-color: ${(props) => props.theme.colors['yellow-dark']};

    &::placeholder {
      color: ${(props) => props.theme.colors['base-label']};
      text-transform: capitalize;
    }


    ${props => props.error && css`
        border: 1px solid red;
        outline-color: red;
    `}
  
`

export const InputContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1rem;

   @media (min-width: 768px) {
     flex-direction: row;
  }
`

export const InputBlock = styled.div`
    width: 100%;

    @media (min-width: 768px) {

    &:not(.city, .optional) {
        flex: none;
        max-width: 200px;
    }

    &.uf {
        max-width: 60px;
    }
}

    &.optional{
        position: relative;

        display: flex;
        justify-content: flex-end;
        align-items: center;


        &::after{
            content: "Opcional";

            position: absolute;
            right: 10px;

            font-size: 12px;
            font-style: italic;
            color: ${(props) => props.theme.colors['base-label']};
        }
    }
`