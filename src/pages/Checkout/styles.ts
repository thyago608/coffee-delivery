import styled from 'styled-components'

export const Main = styled.main`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`

export const CompleteOrder = styled.section`
  > header h2 {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-size: 1.125rem;
    font-family: 'Baloo 2';
  }
`

export const DeliveryContainer = styled.div`
  background: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px;

  padding: 2.5rem;
  margin-top: 0.9375rem;
`

export const Heading = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    flex: none;
  }
`

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;

  span {
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  p {
    color: ${(props) => props.theme.colors['base-text']};
  }
`

export const Form = styled.form`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const InputBlock = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    &:not(.city) {
      flex: none;
      max-width: 200px;
    }

    &.uf {
      max-width: 60px;
    }
  }
`

export const PaymentContainer = styled.div`
  background: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px;

  padding: 2.5rem;
  margin-top: 0.75rem;
`

export const OptionsPayment = styled.div`
  margin-top: 32px;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`
