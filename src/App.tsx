import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'styles/global'
import { defaultTheme } from 'styles/themes/default'
import { Router } from './router'
import { BrowserRouter } from 'react-router-dom'
import { Header } from 'components/Header'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
