import styled from 'styled-components'

export const Main = styled.main`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem;

  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
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
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const CoffeeSelections = styled.section`
  > header h2 {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-size: 1.125rem;
    font-family: 'Baloo 2';
  }
`

export const CoffeeList = styled.div`
  margin-top: 0.9375rem;
  background: ${(props) => props.theme.colors['base-card']};
  padding: 2.5rem;

  border-radius: 6px 44px 0 0;

  @media (min-width: 1024px) {
    padding: 2.5rem 1rem;
  }
`

export const CartItemContainer = styled.div`
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors['base-button']};

  & + & {
    padding-top: 1.5rem;
  }
`

export const Totals = styled.div`
  border-radius: 0 0 6px 44px;
  background: ${(props) => props.theme.colors['base-card']};
  padding: 0 2.5rem 2.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  label {
    color: ${(props) => props.theme.colors['base-text']};
    font-size: 0.875rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 1rem;
    }

    &:last-of-type {
      color: ${(props) => props.theme.colors['base-subtitle']};
      font-size: 1.25rem;
      font-weight: bold;

      span {
        font-size: inherit;
        font-weight: inherit;
        color: inherit;
      }
    }
  }
`

export const ConfirmOrder = styled.button`
  margin-top: 1.5rem;

  height: 46px;
  background: ${(props) => props.theme.colors.yellow};
  border-radius: 6px;

  font-weight: bold;
  color: ${(props) => props.theme.colors.white};

  transition: background 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.colors['yellow-dark']};
  }
`
