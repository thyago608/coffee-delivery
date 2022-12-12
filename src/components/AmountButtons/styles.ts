import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme.colors['base-button']};

  display: flex;
  align-items: center;
  gap: 0.2rem;
  color: ${(props) => props.theme.colors['base-title']};
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme.colors.purple};
  }

  button {
    padding: 0.5rem;

    &:hover {
      background: ${(props) => props.theme.colors['base-hover']};

      svg {
        color: ${(props) => props.theme.colors['purple-dark']};
      }
    }
  }
`
