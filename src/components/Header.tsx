import {NavLink} from 'react-router-dom'
import styled from '@emotion/styled'
import {Box, BoxProps} from '@mui/material'
import OverlayLogoOnlyDark from '../assets/images/overlay-logo-only-no-background.png'

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

type ImgProps = {
  alt: string
  src: string
}

const Image = (props: BoxProps & ImgProps) => <Box component="img" {...props} />

export default function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Image src={OverlayLogoOnlyDark} alt={'Overlay Logo Light'} height={'100%'} width={'100%'} minHeight={'30px'} minWidth={'30px'} />
      </LogoContainer>
    </HeaderContainer>
  )
}
