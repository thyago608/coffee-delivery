import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  > div {
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem;

    display: flex;
    justify-content: space-between;
  }
`

export const Logo = styled(Link)`
  width: 120px;
  height: 40px;

  background: url('/logo.svg') no-repeat center;
  background-size: contain;
`

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  a {
    background: ${(props) => props.theme.colors['yellow-light']};
    padding: 0.625rem;
    border-radius: 6px;

    display: flex;
    align-items: center;

    svg {
      color: ${(props) => props.theme.colors['yellow-dark']};
    }
  }
`

export const Location = styled.span`
  display: flex;
  align-items: center;

  background: ${(props) => props.theme.colors['purple-light']};
  color: ${(props) => props.theme.colors['purple-dark']};

  padding: 0.625rem 0.5rem;
  border-radius: 6px;
`
