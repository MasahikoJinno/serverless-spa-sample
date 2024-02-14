import { createTheme } from '@mui/material'
import { red, orange } from '@mui/material/colors'

export const theme = createTheme({
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
