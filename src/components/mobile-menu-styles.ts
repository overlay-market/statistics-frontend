import styled from "@emotion/styled"
import { Box, Menu } from "@mui/material"
import { NavLink } from "react-router-dom"

export const DropdownMenuContainer = styled(Box)({
  cursor: 'pointer',
})

export const StyledMenu = styled(Menu)({
  marginTop: '10px',
  borderRadius: '4px',
  padding: '0 10px',
  '& .MuiPaper-root': {
    backgroundColor: '#202431',
    borderTop: '1px solid #333',
  },
  '& .MuiButtonBase-root:hover': {
    backgroundColor: 'rgb(0,0,0, 0.16)',
  },
})

export const StyledLink = styled(NavLink)`
  text-decoration: none;
`

export const MenuButton = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  gap: 8px;
  background: #2e3343;
  position: relative;
  outline: none;
  border: 0;
  cursor: pointer;
`