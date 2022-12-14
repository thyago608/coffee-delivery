import styled from 'styled-components'
import coffeeHero from 'assets/coffee-hero.svg'

export const Main = styled.main`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`

export const SectionIntro = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    gap: 2rem;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 1rem;
  }
`

export const IntroContent = styled.div`
  max-width: 588px;
`

export const Title = styled.h2`
  font-family: 'Baloo 2', cursive;
  font-size: 2rem;
  font-weight: 900;
  line-height: 130%;
  color: ${(props) => props.theme.colors['base-title']};

  @media (min-width: 768px) {
    text-align: center;
  }

  @media (min-width: 1024px) {
    text-align: left;
    font-size: 3rem;
  }
`

export const Description = styled.p`
  margin-top: 1rem;
  color: ${(props) => props.theme.colors['base-subtitle']};

  @media (min-width: 768px) {
    text-align: center;
  }

  @media (min-width: 1024px) {
    text-align: left;
  }
`

export const WeOffer = styled.ul`
  margin-top: 50px;

  display: grid;
  gap: 1.5625rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const BACKGROUND_COLORS_SVG = {
  yellow: 'yellow',
  yellowDark: 'yellow-dark',
  gray: 'base-text',
  purple: 'purple',
} as const

interface LabelProps {
  backgroundSvg: keyof typeof BACKGROUND_COLORS_SVG
}

export const Label = styled.li<LabelProps>`
  display: flex;
  align-items: center;
  gap: 12px;

  svg {
    padding: 0.4rem;
    background: ${(props) =>
      props.theme.colors[BACKGROUND_COLORS_SVG[props.backgroundSvg]]};
    color: ${(props) => props.theme.colors.white};
    border-radius: 50%;
  }

  @media (min-width: 768px) {
    justify-content: center;
    white-space: nowrap;
  }

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`

export const CoffeeImage = styled.div`
  width: 100%;
  max-width: 400px;
  height: 360px;

  background: url(${coffeeHero}) no-repeat center;
  background-size: contain;

  @media (min-width: 1024px) {
    margin-left: auto;
  }
`

export const SectionCoffee = styled.section`
  margin-top: 2rem;

  @media (min-width: 1024px) {
    margin-top: 5rem;
  }
`

export const Heading = styled.header`
  h2 {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-family: 'Baloo 2', cursive;
    font-size: 32px;
    font-weight: 900;
    line-height: 130%;
  }
`

export const CoffeeList = styled.div`
  margin-top: 3.375rem;

  display: grid;
  gap: 40px;
  justify-items: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
