import { FC } from 'react'
import { Link, Outlet } from 'react-router-dom'

import { ARTICLES } from '~/fixtures.ts'

export const Articles: FC = () => {
  return (
    <section>
      <h2>Articles</h2>
      <ul>
        {ARTICLES.map((a) => (
          <li key={a.id}>
            <Link to={`/articles/${a.id}`}>{a.title}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </section>
  )
}
