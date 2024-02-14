import { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { Home } from '~/components/page/home'
import { Articles } from '~/components/page/articles'
import { NotFound } from '~/components/page/not-found'
import { Root } from './root'

// lazy load, code splitting
const ArticleDetail = lazy(() => import('~/components/page/article-detail'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/articles',
        element: <Articles />,
        children: [
          {
            path: ':id',
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <ArticleDetail />
              </Suspense>
            )
          }
        ]
      }
    ]
  }
])
