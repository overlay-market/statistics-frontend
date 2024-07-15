import './App.css'
import {Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import styled from '@emotion/styled'
import MarketsOisFundingRate from './pages/MarketsOisFundingRate'
import ProtocolGlobals from './pages/ProtocolGlobals'
import DailyProtocolData from './pages/DailyProtocolData'
import HourlyProtocolData from './pages/HourlyProtocolData'

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
        <Route path="/" element={<DailyProtocolData />} />
        <Route path="/hourly-protocol-data" element={<HourlyProtocolData />} />
        <Route path="/markets-ois-funding-rate" element={<MarketsOisFundingRate />} />
        <Route path="/protocol-globals" element={<ProtocolGlobals />} />
      </Routes>
    </AppWrapper>
  )
}

export default App
