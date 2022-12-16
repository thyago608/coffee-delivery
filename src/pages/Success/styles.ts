import styled, { css } from 'styled-components'
import { MapPin, Clock, CurrencyDollar } from 'phosphor-react'
import illustrationImg from 'assets/Illustration.svg'

export const Main = styled.main`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem;

  display: grid;
  justify-items: center;
  gap: 2rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const ConfirmedOrder = styled.section`
  header {
    h2 {
      font-family: 'Baloo 2';
      font-size: 1.6rem;
      color: ${(props) => props.theme.colors['yellow-dark']};
    }

    p {
      margin-top: 0.25rem;
      color: ${(props) => props.theme.colors['base-text']};
    }

    @media (min-width: 768px) {
      h2 {
        font-size: 2rem;
      }
    }
  }
`

const BaseIcon = css`
  padding: 0.4rem;
  border-radius: 50%;
  color: ${(props) => props.theme.colors.white};
`

export const MapPinIcon = styled(MapPin)`
  background: ${(props) => props.theme.colors.purple};
  ${BaseIcon}
`

export const ClockIcon = styled(Clock)`
  background: ${(props) => props.theme.colors.yellow};
  ${BaseIcon}
`

export const CurrencyDollarIcon = styled(CurrencyDollar)`
  background: ${(props) => props.theme.colors['yellow-dark']};

  ${BaseIcon}
`

export const LabelsList = styled.div`
  margin-top: 2.5rem;

  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  background: linear-gradient(100deg, rgba(235,193,54,1) 6%, rgba(128,71,248,1) 96%);
  border:0;
  position: relative;

  border-radius: 6px 36px 6px 36px;

  z-index:1;

  &:before{
    content: "";

    display: block;
    background: ${(props) => props.theme.colors.background};

    position: absolute;
    top: 1px;
    left: 1px;

    width: calc(100% - calc(1px * 2));
    height: calc(100% - calc(1px * 2));
    border-radius: 5px 35px 5px 35px;

    z-index: -1;
  }


`

export const Label = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const TextGroup = styled.div``

export const Text = styled.p`
  color: ${(props) => props.theme.colors['base-text']};

  span {
    font-weight: bold;
  }
`

export const Illustration = styled.div`
  width: 100%;
  height: 293px;

  background: url(${illustrationImg}) no-repeat center;

  background-size: contain;
`
