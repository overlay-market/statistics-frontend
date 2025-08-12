import {useWindowDimensions} from '../hooks/useWindowDimensions'
import {CHAIN_ID_LOCAL_STORAGE_KEY, DEFAULT_CHAINID} from '../constants/chains'
import {SRC_PROTOCOL_GLOBALS} from '../constants/grafanaLinks'
import {useEffect, useState} from 'react'
import {useStoredChainId} from '../hooks/useStoredChainId'
import {Dashboard} from '../components/Dashboard'
const ProtocolGlobals = () => {
  const storedChainId = useStoredChainId(CHAIN_ID_LOCAL_STORAGE_KEY)
  const dashboardSrc = storedChainId !== null ? SRC_PROTOCOL_GLOBALS[Number(storedChainId)] : SRC_PROTOCOL_GLOBALS[DEFAULT_CHAINID]

  const [url, setUrl] = useState(dashboardSrc)
  const {height, width} = useWindowDimensions()

  const cardMediaHeight = height - 90
  const cardMediaWidth = width - 48
  const mobileHeight = height - 85

  useEffect(() => {
    setUrl(SRC_PROTOCOL_GLOBALS[Number(storedChainId)])
  }, [storedChainId])

  return <Dashboard component={'iframe'} width={cardMediaWidth} height={cardMediaHeight} mobilewidth={width} mobileheight={mobileHeight} src={url} />
}

export default ProtocolGlobals
