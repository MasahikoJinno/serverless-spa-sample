import { FC } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { AppBar, Box, Toolbar, Typography, Button, Link } from '@mui/material'

export const Header: FC = () => {
  return (
    <Box component="header" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
            <Link
              component={RouterLink}
              to="/"
              sx={{
                color: 'white',
                '&:hover': {
                  textDecoration: 'none'
                }
              }}
            >
              サーバレスSPAサンプル
            </Link>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
