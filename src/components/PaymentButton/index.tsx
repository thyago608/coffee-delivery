import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Button } from './styles'

interface PaymentButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function PaymentButton({ children, ...rest }: PaymentButtonProps) {
  return <Button {...rest}>{children}</Button>
}
