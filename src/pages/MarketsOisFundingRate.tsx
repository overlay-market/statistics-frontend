import {useWindowDimensions} from '../hooks/useWindowDimensions'
import {useStoredChainId} from '../hooks/useStoredChainId'
import {useEffect, useState} from 'react'
import {CHAIN_ID_LOCAL_STORAGE_KEY, DEFAULT_CHAINID} from '../constants/chains'
import {SRC_MARKETS_OI_FUNDING_RATE} from '../constants/grafanaLinks'
import {Dashboard} from '../components/Dashboard'

const MarketsOisFundingRate = () => {
  const storedChainId = useStoredChainId(CHAIN_ID_LOCAL_STORAGE_KEY)
  const dashboardSrc = storedChainId !== null ? SRC_MARKETS_OI_FUNDING_RATE[Number(storedChainId)] : SRC_MARKETS_OI_FUNDING_RATE[DEFAULT_CHAINID]

  const [url, setUrl] = useState(dashboardSrc)
  const {height, width} = useWindowDimensions()

  const cardMediaHeight = height - 90
  const cardMediaWidth = width - 48
  const mobileHeight = height - 85

  useEffect(() => {
    setUrl(SRC_MARKETS_OI_FUNDING_RATE[Number(storedChainId)])
  }, [storedChainId])

  return <Dashboard component={'iframe'} width={cardMediaWidth} height={cardMediaHeight} mobilewidth={width} mobileheight={mobileHeight} src={url} />
}

export default MarketsOisFundingRate
