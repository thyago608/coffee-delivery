import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors['base-input']};

  border: 1px solid ${(props) => props.theme.colors['base-button']};

  border-radius: 4px;
  overflow: hidden;
  height: 42px;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  input {
    background: transparent;
    border: none;
    width: 100%;
    height: 100%;
    padding: 0 0.8rem;

    color: ${(props) => props.theme.colors['base-text']};
    font-size: 14px;

    outline-color: ${(props) => props.theme.colors['yellow-dark']};

    &::placeholder {
      color: ${(props) => props.theme.colors['base-label']};
      text-transform: capitalize;
    }
  }
`

export const Label = styled.span`
  position: absolute;
  right: 10px;

  font-size: 12px;
  font-style: italic;
  color: ${(props) => props.theme.colors['base-label']};
`
