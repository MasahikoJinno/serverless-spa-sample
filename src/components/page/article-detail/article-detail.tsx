import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { ARTICLES } from '~/fixtures.ts'
import { Card, Typography, useTheme } from '@mui/material'

export const ArticleDetail: FC = () => {
  const theme = useTheme()
  const { id } = useParams()
  const article = ARTICLES.find((article) => article.id === id)

  return (
    <Card component="section" sx={{ p: theme.spacing(3) }}>
      <Typography variant="h6">Article Detail</Typography>
      <Typography variant="body1">title: {article?.title}</Typography>
      <Typography variant="body1">content: {article?.content}</Typography>
    </Card>
  )
}
