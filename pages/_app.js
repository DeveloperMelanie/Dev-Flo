import Header from 'components/Header'
import Footer from 'components/Footer'
import 'styles/globals.css'

export default function BlogSite({ Component, pageProps }) {
    return (
        <>
            <Header />
            <main className='py-12'>
                <Component {...pageProps} />
            </main>
            <Footer />
        </>
    )
}
