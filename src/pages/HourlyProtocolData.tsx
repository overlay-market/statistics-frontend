import {CardMedia} from '@mui/material'
import {useWindowDimensions} from '../hooks/useWindowDimensions'
import {theme} from '../theme/theme'
import styled from '@emotion/styled'
import {useStoredChainId} from '../hooks/useStoredChainId'
import {useEffect, useState} from 'react'
import {SRC_HOURLY_PROTOCOL_DATA} from '../constants/grafanaLinks'
import {CHAIN_ID_LOCAL_STORAGE_KEY, DEFAULT_CHAINID} from '../constants/chains'

type DashboardProps = {
  component: string
  width: number
  height: number
  mobilewidth: number
  mobileheight: number
}

const Dashboard = styled(CardMedia)<DashboardProps>(
  {
    border: 'none',
    padding: '0 24px 24px',

    [theme.breakpoints.down('sm')]: {
      padding: '0',
    },
  },
  props => ({
    width: props.width,
    height: props.height,
    [theme.breakpoints.down('sm')]: {
      width: props.mobilewidth,
      height: props.mobileheight,
    },
  }),
)

const HourlyProtocolData = () => {
  const storedChainId = useStoredChainId(CHAIN_ID_LOCAL_STORAGE_KEY)
  const dashboardSrc = storedChainId !== null ? SRC_HOURLY_PROTOCOL_DATA[Number(storedChainId)] : SRC_HOURLY_PROTOCOL_DATA[DEFAULT_CHAINID]

  const [url, setUrl] = useState(dashboardSrc)
  const {height, width} = useWindowDimensions()

  const cardMediaHeight = height - 90
  const cardMediaWidth = width - 48
  const mobileHeight = height - 85

  useEffect(() => {
    setUrl(SRC_HOURLY_PROTOCOL_DATA[Number(storedChainId)])
  }, [storedChainId])

  return <Dashboard component={'iframe'} width={cardMediaWidth} height={cardMediaHeight} mobilewidth={width} mobileheight={mobileHeight} src={url} />
}

export default HourlyProtocolData
