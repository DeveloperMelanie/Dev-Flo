import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Search from './Search'

export default function Header() {
    const [showMenu, setShowMenu] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const router = useRouter()

    useEffect(() => {
        if (showMenu) setShowMenu(false)
        if (showSearch) setShowSearch(false)
    }, [router.pathname])

    useEffect(() => {
        if (showMenu || showSearch) {
            return document.body.classList.add('overflow-hidden')
        }
        document.body.classList.remove('overflow-hidden')
    }, [showMenu, showSearch])

    useEffect(() => {
        if (showSearch) {
            const search = document.querySelector('#input').firstElementChild
            setTimeout(() => {
                search.focus()
            }, 50)

            const searchIcon = document.querySelector('#search-icon')
            window.onclick = e => {
                if (e.target !== search && e.target !== searchIcon) {
                    setShowSearch(false)
                }
            }

            window.onkeydown = e => {
                if (e.key === 'Escape') {
                    setShowSearch(false)
                }
            }
        }
    }, [showSearch])

    return (
        <>
            <header className='py-8 border-b border-gray-100 shadow-sm'>
                <div className='container flex justify-between items-center'>
                    <div className='flex items-center gap-14'>
                        <Link href='/'>
                            <a>
                                <img
                                    src='/logo.svg'
                                    className='w-40'
                                    alt='Dev-Flo'
                                />
                            </a>
                        </Link>

                        <nav className='hidden sm:block'>
                            <ul className='flex gap-5 text-base font-semibold text-gray-700'>
                                <li>
                                    <Link href='/'>
                                        <a className='hover:underline'>
                                            Inicio
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/sobre-nosotros'>
                                        <a className='hover:underline'>
                                            Sobre nosotros
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/autores'>
                                        <a className='hover:underline'>
                                            Autores
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/contacto'>
                                        <a className='hover:underline'>
                                            Contacto
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className='flex gap-4'>
                        <div
                            className='sm:hidden w-7 cursor-pointer z-50'
                            role='button'
                            onClick={() => setShowMenu(!showMenu)}
                        >
                            <div
                                className={`w-full h-[1px] bg-gray-700 mb-2 transition-transform duration-300${
                                    showMenu
                                        ? ' -rotate-45 translate-y-[6px]'
                                        : ''
                                }`}
                            ></div>
                            <div
                                className={`w-full h-[1px] bg-gray-700 mb-2 transition-opacity duration-300${
                                    showMenu ? ' opacity-0' : ''
                                }`}
                            ></div>
                            <div
                                className={`w-full h-[1px] bg-gray-700 transition-transform duration-300${
                                    showMenu
                                        ? ' rotate-45 -translate-y-[12px]'
                                        : ''
                                }`}
                            ></div>
                        </div>
                        <img
                            id='search-icon'
                            src='/search.svg'
                            width={24}
                            alt='Buscar artículos en Dev-Flo'
                            className='cursor-pointer'
                            onClick={() => setShowSearch(!showSearch)}
                        />
                    </div>
                </div>
            </header>
            <div
                className={`sm:hidden fixed z-40 top-0 left-0 w-full h-screen bg-white flex justify-center items-center text-center transition-all ease-in duration-300 ${
                    showMenu ? 'opacity-100 visible' : 'opacity-0 invisible'
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
            <div
                className={`transition-all duration-300 ${
                    showSearch ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
            >
                <Search />
            </div>
        </>
    )
}
