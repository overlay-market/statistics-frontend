import styled from '@emotion/styled'
import {Box, CardMedia, Menu, MenuItem} from '@mui/material'
import OverlayLogoOnlyDark from '../assets/images/overlay-logo-only-no-background.png'
import {NavLink, useLocation} from 'react-router-dom'
import {theme} from '../theme/theme'
import {useEffect, useState} from 'react'
import SlideMenu from './SlideMenu'
import MobileMenu from './MobileMenu'

const HeaderContainer = styled.div`
  color: '#FFFFFF';
  display: flex;
  flex-direction: row;
  width: auto;
  max-width: 1440px;
  box-sizing: border-box;
  margin: auto;
  padding: 24px;
  position: sticky;
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
  display: 'flex',
  '&.active': {
    color: '#71CEFF',
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
})

const SelectedLink = styled(Box)({
  fontSize: '14px',
  fontWeight: '700',
  textDecoration: 'none',
  margin: 'auto 16px',
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
})

const DropdownMenuContainer = styled(Box)({
  margin: '20px 16px',
  width: '180px',
  cursor: 'pointer',
})

const StyledMenu = styled(Menu)({
  width: '176px',
  marginTop: '10px',

  borderRadius: '4px',
  '& .MuiPaper-root': {
    backgroundColor: '#202431',
    maxWidth: '180px',
  },
  '& .MuiButtonBase-root': {
    paddingLeft: '0',
  },
})

const DROPDOWN_LINKS = {
  daily: {
    title: 'Daily Protocol Data',
    link: '/',
  },
  hourly: {
    title: 'Hourly Protocol Data',
    link: '/hourly-protocol-data',
  },
}

export default function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false)
  let location = useLocation().pathname

  const [activeLink, setActiveLink] = useState(DROPDOWN_LINKS.daily)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const openDropdownMenu = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()

    setAnchorEl(null)
  }

  const handleLink = (link: {title: string; link: string}) => {
    setAnchorEl(null)
    setActiveLink(link)
  }

  useEffect(() => {
    if (openMobileMenu) {
      setOpenMobileMenu(false)
    }
    if (location === DROPDOWN_LINKS.daily.link) {
      setActiveLink(DROPDOWN_LINKS.daily)
    }
    if (location === DROPDOWN_LINKS.hourly.link) {
      setActiveLink(DROPDOWN_LINKS.hourly)
    }
  }, [location])

  return (
    <HeaderContainer>
      <LogoContainer>
        <CardMedia component="img" alt="Overlay Logo Light" height={'100%'} width={'100%'} image={OverlayLogoOnlyDark} />
      </LogoContainer>
      <DropdownMenuContainer
        onClick={handleClick}
        id="dropdown"
        aria-controls={openDropdownMenu ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openDropdownMenu ? 'true' : undefined}
      >
        <SelectedLink sx={{color: location === activeLink.link ? '#71CEFF' : '#fff'}}>
          {location === activeLink.link ? activeLink.title : 'Daily / Hourly'}{' '}
        </SelectedLink>
      </DropdownMenuContainer>
      <StyledMenu id="basic-menu" anchorEl={anchorEl} open={openDropdownMenu} onClose={handleClose}>
        <MenuItem onClick={() => handleLink(DROPDOWN_LINKS.daily)}>
          <StyledLink to={DROPDOWN_LINKS.daily.link}>{DROPDOWN_LINKS.daily.title}</StyledLink>
        </MenuItem>
        <MenuItem onClick={() => handleLink(DROPDOWN_LINKS.hourly)}>
          <StyledLink to={DROPDOWN_LINKS.hourly.link}>{DROPDOWN_LINKS.hourly.title}</StyledLink>
        </MenuItem>
      </StyledMenu>

      <StyledLink to={'/markets-ois-funding-rate'}>Market's OIs and Funding Rate</StyledLink>
      <MobileMenu open={openMobileMenu} setOpen={setOpenMobileMenu} />
      <SlideMenu open={openMobileMenu} setOpen={setOpenMobileMenu} />
    </HeaderContainer>
  )
}
