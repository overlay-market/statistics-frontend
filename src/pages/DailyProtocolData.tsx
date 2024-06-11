import {CardMedia} from '@mui/material'
import {useWindowDimensions} from '../hooks/useWindowDimensions'
import {theme} from '../theme/theme'
import styled from '@emotion/styled'

type DashboardProps = {
  component: string
  width: number
  height: number
  mobileWidth: number
  mobileHeight: number
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
      width: props.mobileWidth,
      height: props.mobileHeight,
    },
  }),
)

function DailyProtocolData() {
  const {height, width} = useWindowDimensions()

  const cardMediaHeight = height - 110
  const cardMediaWidth = width - 48
  const mobileHeight = height - 85
  return (
    <>
      <Dashboard
        component={'iframe'}
        width={cardMediaWidth}
        height={cardMediaHeight}
        mobileWidth={width}
        mobileHeight={mobileHeight}
        src="https://grafana.overlay.market/public-dashboards/2839d73ea7eb4cb98834a7df2fae54e2"
      />
    </>
  )
}

export default DailyProtocolData