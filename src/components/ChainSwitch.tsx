import {useEffect, useState} from 'react'
import {CHAIN_LIST, CHAIN_LIST_ORDER, DEFAULT_CHAINID, NETWORK_ICONS} from '../constants/chains'
import {ChainItem, ChainLogo, DropdownMenuContainer, StyledMenu} from './chain-switch-styles'
import {MenuItem} from '@mui/material'

export const CHAIN_ID_LOCAL_STORAGE_KEY = 'selectedChainId'

const ChainSwitch = () => {
  const storedChainId = localStorage.getItem(CHAIN_ID_LOCAL_STORAGE_KEY)

  const [chainId, setChainId] = useState(storedChainId ?? DEFAULT_CHAINID)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  useEffect(() => {
    if (!storedChainId) {
      localStorage.setItem(CHAIN_ID_LOCAL_STORAGE_KEY, DEFAULT_CHAINID.toString())
    }
  }, [storedChainId])

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    setAnchorEl(null)
  }

  const handleChainSelect = (targetChainId: number) => {
    setChainId(targetChainId)
    localStorage.setItem(CHAIN_ID_LOCAL_STORAGE_KEY, targetChainId.toString())
    setAnchorEl(null)
  }

  return Object.keys(CHAIN_LIST_ORDER).length === 1 ? (
    <div style={{display: 'flex', alignItems: 'center'}}>{chainId ? <ChainLogo src={NETWORK_ICONS[chainId as number]} /> : <div>⚠️</div>}</div>
  ) : (
    <>
      <DropdownMenuContainer
        onClick={handleClick}
        id="dropdown"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        {chainId ? <ChainLogo src={NETWORK_ICONS[chainId as number]} /> : <div>⚠️</div>}
      </DropdownMenuContainer>
      <StyledMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
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
        {Object.keys(CHAIN_LIST_ORDER).map((idValue: string) => {
          const id = Number(idValue)
          return (
            <MenuItem key={id} onClick={() => handleChainSelect(CHAIN_LIST_ORDER[id])}>
              <ChainItem>
                <ChainLogo src={NETWORK_ICONS[CHAIN_LIST_ORDER[id]]} />
                <div>{CHAIN_LIST[CHAIN_LIST_ORDER[id]]}</div>
              </ChainItem>
            </MenuItem>
          )
        })}
      </StyledMenu>
    </>
  )
}

export default ChainSwitch
