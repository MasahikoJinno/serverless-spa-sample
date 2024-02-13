import { FC } from 'react'
import { Box, Typography } from '@mui/material'

export const Footer: FC = () => {
  return (
    <Box component="footer" sx={{ flexGrow: 1, textAlign: 'center' }}>
      <Typography variant="h6" color="text.primary" gutterBottom component="h1">
        © フッター
      </Typography>
    </Box>
  )
}
