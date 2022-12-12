import styled from 'styled-components'

export const Button = styled.button`
  width: 100%;
  height: 51px;
  padding: 0 1.25rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  background: ${(props) => props.theme.colors['base-button']};
  border-radius: 6px;

  color: ${(props) => props.theme.colors['base-text']};
  font-size: 0.875rem;
  transition: background 0.3s ease;
  text-transform: uppercase;
  white-space: nowrap;

  svg {
    color: ${(props) => props.theme.colors.purple};
  }

  &:hover {
    background: ${(props) => props.theme.colors['base-hover']};
  }
`
