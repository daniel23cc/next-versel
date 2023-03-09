

import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <h1 className={'title'}>
        {/* Ir a <a href="/about">About</a> */}
        Ir a <Link href="/about">About</Link>
      </h1>
      <p className={'descripion'}>
        Get started by editing{' '}
        <code className={'code'}>pages/index.jsx</code>
      </p>
    </>
  )
}

Home.getLayout = function getLayout(page: JSX.Element) {
  return (
      <MainLayout>
              {page}
      </MainLayout>
  )
}

