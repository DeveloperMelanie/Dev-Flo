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
                    content='Los mejores artículos sobre tecnología, desarrollo web y experiencias personales.'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='180x180'
                    href='/apple-touch-icon.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='/favicon-32x32.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='/favicon-16x16.png'
                />
                <link rel='manifest' href='/site.webmanifest' />
                <link
                    rel='mask-icon'
                    href='/safari-pinned-tab.svg'
                    color='#5bbad5'
                />
                <meta name='msapplication-TileColor' content='#da532c' />
                <meta name='theme-color' content='#000000' />
            </Head>

            <Header />
            <main className='py-12'>
                <Component {...pageProps} />
            </main>
            <Footer />
        </>
    )
}
