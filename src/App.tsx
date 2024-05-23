import './App.css'
import {Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import styled from '@emotion/styled'
import MarketsOisFundingRate from './pages/MarketsOisFundingRate'
import DailyTokenData from './pages/DailyTokenData'

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
      <Routes>
        <Route path="/" element={<DailyTokenData />} />
        <Route path="/markets-ois-funding-rate" element={<MarketsOisFundingRate />} />
      </Routes>
    </AppWrapper>
  )
}

export default App
