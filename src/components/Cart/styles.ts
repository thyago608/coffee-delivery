import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  background: ${(props) => props.theme.colors['yellow-light']};
  padding: 0.625rem;
  border-radius: 6px;

  position: relative;

  display: flex;
  align-items: center;

  position: relative;

  svg {
    color: ${(props) => props.theme.colors['yellow-dark']};
  }
`

export const Label = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;

  background: ${(props) => props.theme.colors['yellow-dark']};
  color: ${(props) => props.theme.colors.white};
  font-weight: 700;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;

  border-radius: 50%;

  padding: 0.8rem;
`
