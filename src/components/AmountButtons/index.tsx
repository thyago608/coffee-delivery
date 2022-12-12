import { Minus, Plus } from 'phosphor-react'
import { Container } from './styles'

export function AmountButtons() {
  return (
    <Container>
      <button type="button">
        <Minus size={14} weight="bold" />
      </button>
      <span>1</span>
      <button type="button">
        <Plus size={14} weight="bold" />
      </button>
    </Container>
  )
}
