import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  > div {
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    justify-content: space-between;

    @media (min-width: 768px) {
      flex-direction: row;
      padding: 2rem;
    }
  }
`

export const Logo = styled(Link)`
  width: 90px;

  height: 40px;

  background: url('/logo.svg') no-repeat center;
  background-size: contain;
`

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const Location = styled.span`
  display: flex;
  align-items: center;

  background: ${(props) => props.theme.colors['purple-light']};
  color: ${(props) => props.theme.colors['purple-dark']};

  padding: 0.625rem 0.5rem;
  border-radius: 6px;
`
