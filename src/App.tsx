import './App.css'
import Header from './components/Header'
import styled from '@emotion/styled'

export const AppWrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100vw;
  max-width: calc(100vw - (100vw - 100%)); //the width of the scrollbar is subtracted
  position: relative;
`

function App() {
  return (
    <AppWrapper>
      <Header />
    </AppWrapper>
  )
}

export default App
