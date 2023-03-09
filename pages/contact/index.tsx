import { MainLayout } from '../../components/layouts/MainLayout'
import Link from 'next/link'


export default function Contact() {
  return (
    <>
      <h1>Contact Page</h1>
      <h1 className={'title'}>
        Ir a <Link href="/about">About</Link>
      </h1>
      <p className={'descripion'}>
        Get started by editing{' '}
        <code className={'code'}>pages/contact/index.jsx</code>
      </p>
    </>
  )
}

Contact.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}
