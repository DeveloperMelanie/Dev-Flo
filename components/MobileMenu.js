import Link from 'next/link'

export default function MobileMenu({ isOpen }) {
    return (
        <div
            className={`sm:hidden fixed z-40 top-0 left-0 w-full h-screen bg-white flex justify-center items-center text-center transition-all ease-in duration-300 ${
                isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
        >
            <ul className='flex flex-col gap-5 text-lg font-semibold text-gray-700'>
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
        </div>
    )
}
