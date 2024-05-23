import './App.css'
import Header from './components/Header'
import styled from '@emotion/styled'
import {CardMedia} from '@mui/material'
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
      <CardMedia
        component="iframe"
        sx={{width: 751, height: '700px', border: 'none', padding: '24px'}}
        src="http://13.48.203.178:8080/public-dashboards/7e1bd3277cb84af8933342a513f2e036"
      />
    </AppWrapper>
  )
}

export default App
