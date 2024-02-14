import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { ARTICLES } from '~/fixtures.ts'

export const ArticleDetail: FC = () => {
  const { id } = useParams()
  const article = ARTICLES.find((article) => article.id === id)
  return (
    <section>
      <h3>Article Detail</h3>
      <p>title: {article?.title}</p>
      <p>content: {article?.content}</p>
    </section>
  )
}
