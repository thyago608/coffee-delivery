import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Button } from './styles'

interface PaymentButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  selected: boolean
}

export function PaymentButton({ children, selected, ...rest }: PaymentButtonProps) {
  return <Button selected={selected} {...rest}>{children}</Button>
}
