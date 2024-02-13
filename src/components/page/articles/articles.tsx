import { FC } from 'react'
import { Link as RouterLink, Outlet } from 'react-router-dom'

import { ARTICLES } from '~/fixtures.ts'
import { Box, List, ListItem, Link, Typography, useTheme } from '@mui/material'

export const Articles: FC = () => {
  const theme = useTheme()

  return (
    <Box component="section" sx={{ p: theme.spacing(3) }}>
      <Typography variant="h5" component="h1">
        Articles
      </Typography>
      <List>
        {ARTICLES.map((a) => (
          <ListItem key={a.id}>
            <Link component={RouterLink} to={`/articles/${a.id}`}>
              {a.title}
            </Link>
          </ListItem>
        ))}
      </List>
      <Outlet />
    </Box>
  )
}
