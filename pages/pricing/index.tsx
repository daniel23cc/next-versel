import { MainLayout } from '../../components/layouts/MainLayout'
import Link from "next/link"


export default function Pricing(){
    return (
        <>
            <h1>Pricing Page</h1>
            <h1 className={'title'}>
                Ir a <Link href="/about">About</Link>
            </h1>
            <p className={'description'}>
                Get started by editing{' '}
                <code className={'code'}>pages/pricing/index.jsx</code>
            </p>
        </>
    )
}

Pricing.getLayout = function getLayout(page: JSX.Element) {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}

