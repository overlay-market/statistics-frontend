import {CardMedia, MenuItem} from '@mui/material'
import OverlayLogoOnlyDark from '../assets/images/overlay-logo-only-no-background.png'
import {useLocation} from 'react-router-dom'
import {useEffect, useState} from 'react'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'
import {
  DropdownMenuContainer,
  FlexContainer,
  HeaderContainer,
  LogoContainer,
  MobileMenuContainer,
  SelectedLink,
  StyledLink,
  StyledMenu,
} from './header-styles'
import ChainSwitch from './ChainSwitch'
import MobileMenu from './MobileMenu'

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
        sx={{color: location === activeLink.link ? '#71CEFF' : '#fff'}}
      >
        <SelectedLink>{location === activeLink.link ? activeLink.title : 'Daily / Hourly Data'} </SelectedLink>
        <ExpandMoreRoundedIcon />
      </DropdownMenuContainer>

      <StyledMenu id="basic-menu" anchorEl={anchorEl} open={openDropdownMenu} onClose={handleClose}>
        <MenuItem onClick={() => handleLink(DROPDOWN_LINKS.daily)}>
          <StyledLink to={DROPDOWN_LINKS.daily.link}>{DROPDOWN_LINKS.daily.title}</StyledLink>
        </MenuItem>
        <MenuItem onClick={() => handleLink(DROPDOWN_LINKS.hourly)}>
          <StyledLink to={DROPDOWN_LINKS.hourly.link}>{DROPDOWN_LINKS.hourly.title}</StyledLink>
        </MenuItem>
      </StyledMenu>

      <StyledLink to={'/protocol-globals'}>Protocol Globals</StyledLink>
      <StyledLink to={'/markets-ois-funding-rate'}>Market's OIs and Funding Rate</StyledLink>

      <FlexContainer>
        <ChainSwitch />
        <MobileMenuContainer>
          <MobileMenu open={openMobileMenu} setOpen={setOpenMobileMenu} />
        </MobileMenuContainer>
      </FlexContainer>
    </HeaderContainer>
  )
}
