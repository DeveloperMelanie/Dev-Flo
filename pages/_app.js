import SEO from 'components/SEO'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { ThemeProvider } from 'next-themes'
import 'styles/globals.css'

export default function BlogSite({ Component, pageProps }) {
    return (
        <>
            <SEO />
            <ThemeProvider defaultTheme='light' attribute='class'>
                <Header />
                <main className='py-12'>
                    <Component {...pageProps} />
                </main>
                <Footer />
            </ThemeProvider>
        </>
    )
}
