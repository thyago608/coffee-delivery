import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 260px;

  background: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px 36px 6px 36px;
  padding: 0.625rem;
  padding-top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 120px;
    height: 120px;

    margin-top: -1.5625rem;
  }
`
export const LabelList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  flex-wrap: wrap;
`

export const Label = styled.span`
  margin-top: 12px;
  background: ${(props) => props.theme.colors['yellow-light']};
  color: ${(props) => props.theme.colors['yellow-dark']};
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.25rem 0.75rem;
  border-radius: 16px;
`

export const Title = styled.h3`
  margin-top: 1rem;

  font-family: 'Baloo 2', cursive;
  color: ${(props) => props.theme.colors['base-subtitle']};
  font-size: 1.25rem;
`

export const Description = styled.p`
  margin-top: 0.5rem;
  color: ${(props) => props.theme.colors['base-label']};
  text-align: center;
`

export const Footer = styled.footer`
  margin-top: 2.3125rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Price = styled.strong`
  margin-right: 1.4375rem;
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
export const CartButton = styled.button`
  margin-left: 0.5rem;

  background: ${(props) => props.theme.colors['purple-dark']};
  color: ${(props) => props.theme.colors.white};
  border-radius: 6px;

  width: 38px;
  height: 38px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.colors.purple};
  }
`
