import { Link, Outlet } from 'react-router-dom'

export const Root = () => {
  return (
    <>
      <header>
        <h1>サーバレスSPAサンプル</h1>
      </header>
      <nav>
        <ul>
          <li>
            <Link to={'/articles'}>articles</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <h1>フッター</h1>
      </footer>
    </>
  )
}
