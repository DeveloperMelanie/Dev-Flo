import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='es' className='dark'>
            <Head />
            <body className='bg-white text-black dark:text-white dark:bg-[#131414] transition-colors duration-300'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
