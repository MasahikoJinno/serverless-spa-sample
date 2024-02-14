import { Link, Outlet } from 'react-router-dom'
import {
  Button,
  List,
  ListItem,
  CssBaseline,
  createTheme,
  ThemeProvider
} from '@mui/material'
import { red, orange } from '@mui/material/colors'

import { Header } from '~/components/ui/header'
import { Footer } from '~/components/ui/footer'

// Todo: 分割したい
const theme = createTheme({
  // https://mui.com/material-ui/customization/color/
  palette: {
    primary: red,
    secondary: orange
  },
  // https://mui.com/material-ui/customization/spacing/
  spacing: [0, 4, 8, 16, 32, 64],
  // https://mui.com/material-ui/react-css-baseline/
  components: {
    MuiCssBaseline: {
      styleOverrides: () => ({
        body: {
          backgroundColor: '#f0f0f0'
        }
      })
    }
  }
})

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
      <Footer />
    </ThemeProvider>
  )
}
