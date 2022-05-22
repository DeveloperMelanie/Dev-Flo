import Link from 'next/link'

export default function Menu() {
    return (
        <nav className='hidden sm:block'>
            <ul className='flex gap-5 text-base font-semibold text-gray-700'>
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
        </nav>
    )
}
