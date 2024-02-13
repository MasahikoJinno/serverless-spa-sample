import { Link, Outlet } from 'react-router-dom'
import {
  Button,
  List,
  ListItem,
  CssBaseline,
  ThemeProvider
} from '@mui/material'

import { Header } from '~/components/ui/header'
import { Footer } from '~/components/ui/footer'

import { theme } from '~/theme.ts'

// Todo: 分割したい
export const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <nav>
        <List>
          <ListItem>
            <Link to={'/articles'}>
              <Button variant="outlined">articles</Button>
            </Link>
          </ListItem>
        </List>
      </nav>
      <main>
        <Outlet />
      </main>
      <Footer>© フッター</Footer>
    </ThemeProvider>
  )
}
