import Head from 'next/head'
import Header from 'components/Header'
import Footer from 'components/Footer'
import 'styles/globals.css'

export default function BlogSite({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Dev-Flo</title>
                <meta
                    name='description'
                    content='Artículos sobre tecnología y programación.'
                />
                <link rel='icon' type='image/svg+xml' href='/icon.svg' />
            </Head>

            {/* <Header /> */}
            <main className='py-12'>
                <Component {...pageProps} />
            </main>
            <Footer />
        </>
    )
}
