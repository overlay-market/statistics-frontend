import {useEffect, useState} from 'react'
import {MenuItem, Typography} from '@mui/material'
import HeaderHamburger from './HeaderHamburger'
import {useLocation} from 'react-router-dom'
import {DropdownMenuContainer, MenuButton, StyledLink, StyledMenu} from './mobile-menu-styles'

interface StyledMenuLinkProps {
  displayText: string
  linkDestination: string
  currentLocation: string
}

const StyledMenuLink = ({displayText, linkDestination, currentLocation}: StyledMenuLinkProps) => {
  const active = currentLocation === linkDestination
  const color = active ? '#12B4FF' : '#FFF'
  return <Typography sx={{color: color}}>{displayText}</Typography>
}

export const CHAIN_ID_LOCAL_STORAGE_KEY = 'selectedChainId'

const MobileMenu = ({open, setOpen}: {open: boolean; setOpen: Function}) => {
  let location = useLocation().pathname

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const openDropdownMenu = Boolean(anchorEl)

  useEffect(() => {
    if (!open) {
      setAnchorEl(null)
    }
  }, [open])

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
    setOpen(false)
  }

  return (
    <>
      <DropdownMenuContainer
        onClick={handleClick}
        id="dropdown"
        aria-controls={openDropdownMenu ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openDropdownMenu ? 'true' : undefined}
      >
        <MenuButton
          id="showButton"
          onClick={() => {
            setOpen(!open)
          }}
        >
          <HeaderHamburger
            open={open}
            onClick={() => {
              setOpen(!open)
            }}
          />
        </MenuButton>
      </DropdownMenuContainer>
      <StyledMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openDropdownMenu}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>
          <StyledLink to={'/'}>
            <StyledMenuLink displayText={'Daily Protocol Data'} linkDestination={'/'} currentLocation={location} />
          </StyledLink>
        </MenuItem>

        <MenuItem>
          <StyledLink to={'/hourly-protocol-data'}>
            <StyledMenuLink displayText={'Hourly Protocol Data'} linkDestination={'/hourly-protocol-data'} currentLocation={location} />
          </StyledLink>
        </MenuItem>

        <MenuItem>
          <StyledLink to={'/protocol-globals'}>
            <StyledMenuLink displayText={'Protocol Globals'} linkDestination={'/protocol-globals'} currentLocation={location} />
          </StyledLink>
        </MenuItem>

        <MenuItem>
          <StyledLink to={'/markets-ois-funding-rate'}>
            <StyledMenuLink displayText={"Market's OIs and Funding Rate"} linkDestination={'/markets-ois-funding-rate'} currentLocation={location} />
          </StyledLink>
        </MenuItem>
      </StyledMenu>
    </>
  )
}

export default MobileMenu
