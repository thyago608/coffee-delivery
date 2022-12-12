import { InputHTMLAttributes } from 'react'
import { Container, Label } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  optionalLabel?: boolean
}

export function Input({ optionalLabel = false, ...rest }: InputProps) {
  return (
    <Container>
      <input {...rest} />
      {optionalLabel && <Label className="label-optional">Opcional</Label>}
    </Container>
  )
}
