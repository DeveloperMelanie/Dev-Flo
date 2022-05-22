import Link from 'next/link'

export default function Footer() {
    const actualYear = new Date().getFullYear()

    return (
        <footer className='flex flex-col justify-center items-center text-center py-8 px-4 border-t border-gray-100 dark:border-slate-50/[0.06] shadow-inner dark:shadow-none bg-gray-50 dark:bg-[#1d1f1f] text-gray-700 dark:text-gray-400'>
            <Link href='/'>
                <a className='mb-5'>
                    <img
                        src='/logo.svg'
                        className='w-40 dark:invert-[100%] dark:sepia-[2%] dark:saturate-[10%] dark:hue-rotate-[254deg] dark:brightness-[104%] dark:contrast-[100%]'
                        alt='Dev-Flo'
                    />
                </a>
            </Link>
            <p className='text-lg'>
                Lo que vivimos, aprendemos y aplicamos cada día.
            </p>
            <ul className='flex flex-col sm:flex-row gap-3 sm:gap-5 text-base font-semibold py-4'>
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
            <p>Dev-Flo | Descubre el mundo - &copy; {actualYear}</p>
        </footer>
    )
}
