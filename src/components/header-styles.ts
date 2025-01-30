import styled from "@emotion/styled"
import { theme } from "../theme/theme"
import { NavLink } from "react-router-dom"
import { Box, Menu } from "@mui/material"

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 32px;
  width: auto;
  height: 64px;
  box-sizing: border-box;
  padding: 0 24px;
`

export const LogoContainer = styled.div`
  height: 30px;
  width: 30px;
`

export const StyledLink = styled(NavLink)({
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: '700',
  textDecoration: 'none',
  display: 'flex',
  '&.active': {
    color: '#71CEFF',
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
})

export const SelectedLink = styled(Box)({
  fontSize: '14px',
  fontWeight: '700',
  textDecoration: 'none',
})

export const DropdownMenuContainer = styled(Box)({
  width: '190px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4px',
  cursor: 'pointer',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
})

export const StyledMenu = styled(Menu)({
  marginTop: '10px',
  padding: '0 4px',
  borderRadius: '4px',
  '& .MuiPaper-root': {
    backgroundColor: '#202431',
    borderTop: '1px solid #333',
    maxWidth: '190px',
  },
  '& .MuiButtonBase-root:hover': {
    backgroundColor: 'rgb(0,0,0, 0.16)',
  },
})

export const FlexContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 'auto',
  gap: '20px',
    
  [theme.breakpoints.up('md')]: {
    marginLeft: '0',
  },
})

export const MobileMenuContainer = styled(Box)({
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
})