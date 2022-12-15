import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { Header } from 'components/Header'
import { defaultTheme } from 'styles/themes/default'
import { GlobalStyle } from 'styles/global'
import { Router } from './router'
import { CartProvider } from 'contexts/CartContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Router />
        </BrowserRouter>
      </CartProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
