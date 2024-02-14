import type { FC } from 'react'
import { Box, Typography } from '@mui/material'

type Props = {
  children: string
}

export const Footer: FC<Props> = ({ children }) => {
  return (
    <Box component="footer" sx={{ flexGrow: 1, textAlign: 'center' }}>
      <Typography variant="h6" color="text.primary" gutterBottom component="h1">
        {children}
      </Typography>
    </Box>
  )
}
