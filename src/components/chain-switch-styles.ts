import styled from "@emotion/styled";
import { Box, Menu } from "@mui/material";

export const ChainLogo = styled.div<{ src: string }>`
  background: no-repeat center/contain url(${({ src }) => src});
  height: 24px;
  width: 24px;
`;

export const DropdownMenuContainer = styled(Box)({
  cursor: 'pointer',
})

export const StyledMenu = styled(Menu)({
  marginTop: '10px',
  borderRadius: '4px',
  '& .MuiPaper-root': {
    backgroundColor: '#202431',
    borderTop: '1px solid #333',
    maxWidth: '190px',
  },
  '& .MuiButtonBase-root': {
    paddingLeft: '0',
  },
  '& .MuiButtonBase-root:hover': {
    backgroundColor: 'rgb(0,0,0, 0.16)',
  },
})

export const ChainItem = styled.div`
  display: flex;
  gap: 10px;
  padding: 0 10px;
  color: white;
`