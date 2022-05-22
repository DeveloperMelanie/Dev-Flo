import SEO from 'components/SEO'
import Header from 'components/Header'
import Footer from 'components/Footer'
import 'styles/globals.css'

export default function BlogSite({ Component, pageProps }) {
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('dark') === 'true') {
            document.documentElement.classList.add('dark')
        }
    }

    return (
        <>
            <SEO />
            <Header />
            <main className='py-12'>
                <Component {...pageProps} />
            </main>
            <Footer />
        </>
    )
}
