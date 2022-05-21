import Link from 'next/link'

export default function Footer() {
    const actualYear = new Date().getFullYear()

    return (
        <footer className='flex flex-col justify-center items-center text-center py-8 px-4 border-t border-gray-100 shadow-inner bg-gray-50'>
            <Link href='/'>
                <a className='mb-5'>
                    <img src='/logo.svg' className='w-40' alt='Dev-Flo' />
                </a>
            </Link>
            <p className='text-lg text-gray-700'>
                Lo que vivimos, aprendemos y aplicamos cada día.
            </p>
            <ul className='flex flex-col sm:flex-row gap-3 sm:gap-5 text-base font-semibold text-gray-700 py-4'>
                <li>
                    <Link href='/'>
                        <a className='hover:underline'>Inicio</a>
                    </Link>
                </li>
                <li>
                    <Link href='/sobre-nosotros'>
                        <a className='hover:underline'>Sobre nosotros</a>
                    </Link>
                </li>
                <li>
                    <Link href='/autores'>
                        <a className='hover:underline'>Autores</a>
                    </Link>
                </li>
                <li>
                    <Link href='/contacto'>
                        <a className='hover:underline'>Contacto</a>
                    </Link>
                </li>
            </ul>
            <p className='text-gray-700'>
                Diseñado por Lázaro - &copy; {actualYear}
            </p>
        </footer>
    )
}
