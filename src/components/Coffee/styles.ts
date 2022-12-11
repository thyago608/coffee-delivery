import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 2rem;

  width: 100%;
  max-width: 265px;

  background: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px 36px 6px 36px;
  padding: 10px;
  padding-top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 120px;
    height: 120px;

    margin-top: -25px;
  }
`

export const Label = styled.span`
  margin-top: 12px;
  background: ${(props) => props.theme.colors['yellow-light']};
  color: ${(props) => props.theme.colors['yellow-dark']};
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 16px;
`

export const Title = styled.h3`
  margin-top: 1rem;

  font-family: 'Baloo 2', cursive;
  color: ${(props) => props.theme.colors['base-subtitle']};
  font-size: 20px;
`

export const Description = styled.p`
  margin-top: 8px;
  color: ${(props) => props.theme.colors['base-label']};
  text-align: center;
`

export const Footer = styled.footer`
  margin-top: 37px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Price = styled.strong`
  margin-right: 23px;
  font-size: 0.9rem;

  display: flex;
  align-items: center;
  gap: 0.2rem;

  span {
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-size: 1.4rem;
  }
`

export const ContainerButtons = styled.div`
  margin-right: 8px;
  background: ${(props) => props.theme.colors['base-button']};

  display: flex;
  align-items: center;
  gap: 0.2rem;
  color: ${(props) => props.theme.colors['base-title']};
  overflow: hidden;
  border-radius: 6px;

  button {
    padding: 0.5rem;
  }

  svg {
    color: ${(props) => props.theme.colors.purple};
  }
`

export const CartButton = styled.button`
  background: ${(props) => props.theme.colors['purple-dark']};
  color: ${(props) => props.theme.colors.white};
  border-radius: 6px;
  padding: 0.1rem;
`
