import styled from '@emotion/styled'
import {CardMedia} from '@mui/material'
import OverlayLogoOnlyDark from '../assets/images/overlay-logo-only-no-background.png'
import {NavLink} from 'react-router-dom'

const HeaderContainer = styled.div`
  color: '#FFFFFF';
  display: flex;
  flex-direction: row;
  width: auto;
  max-width: 1440px;
  box-sizing: border-box;
  margin: auto;
  padding: 24px 8px 24px;
  position: sticky;
  z-index: 420;
`

const LogoContainer = styled.div`
  height: 30px;
  width: 30px;
  margin: auto 16px auto 0px;
`

const StyledLink = styled(NavLink)({
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: '700',
  textDecoration: 'none',
  margin: 'auto 16px',
  '&.active': {
    color: '#71CEFF',
  },
})

export default function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <CardMedia component="img" alt="Overlay Logo Light" height={'100%'} width={'100%'} image={OverlayLogoOnlyDark} />
      </LogoContainer>
      <StyledLink to={'/'}>Daily Token Data</StyledLink>
      <StyledLink to={'/markets-ois-funding-rate'}>Market's OIs and Funding Rate</StyledLink>
    </HeaderContainer>
  )
}
