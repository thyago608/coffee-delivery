import styled from 'styled-components'

export const Container = styled.div`
  padding: 0.5rem 0.25rem;
  background: ${(props) => props.theme.colors['base-card']};

  display: flex;
  align-items: center;
  gap: 1.25rem;
`

export const Title = styled.span`
  color: ${(props) => props.theme.colors['base-subtitle']};
`

export const AmountContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 0.5rem;
`

export const RemoveButton = styled.button`
  background: ${(props) => props.theme.colors['base-button']};
  padding: 0.5rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  color: ${(props) => props.theme.colors['base-text']};
  text-transform: uppercase;

  transition: background 0.3s ease;
  svg {
    color: ${(props) => props.theme.colors.purple};
  }

  &:hover {
    background: ${(props) => props.theme.colors['base-hover']};
  }
`

export const Price = styled.strong`
  margin-left: auto;

  color: ${(props) => props.theme.colors['base-text']};
  font-weight: bold;
`
