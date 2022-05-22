import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { manageSearch } from 'utils'
import Search from './Search'
import Menu from './Menu'
import MobileMenu from './MobileMenu'
import MenuIcon from 'icons/MenuIcon'

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
        if (showSearch) manageSearch(setShowSearch)
    }, [showSearch])

    return (
        <>
            <header className='py-8 border-b border-gray-100 dark:border-slate-50/[0.06] shadow-sm dark:shadow-none'>
                <div className='container flex justify-between items-center'>
                    <div className='flex items-center gap-14'>
                        <Link href='/'>
                            <a>
                                <img
                                    src='/logo.svg'
                                    className='w-40 dark:invert-[100%] dark:sepia-[2%] dark:saturate-[10%] dark:hue-rotate-[254deg] dark:brightness-[104%] dark:contrast-[100%]'
                                    alt='Dev-Flo'
                                />
                            </a>
                        </Link>
                        <Menu />
                    </div>
                    <div className='flex gap-4'>
                        <MenuIcon
                            isActive={showMenu}
                            changeState={setShowMenu}
                        />
                        <img
                            src='/search.svg'
                            width={24}
                            alt='Buscar artículos en Dev-Flo'
                            className='cursor-pointer dark:invert-[100%] dark:sepia-[2%] dark:saturate-[10%] dark:hue-rotate-[254deg] dark:brightness-[104%] dark:contrast-[100%]'
                            onClick={() => setShowSearch(!showSearch)}
                        />
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-6 w-6 stroke-slate-800 dark:hidden cursor-pointer'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={2}
                            onClick={() =>
                                document.documentElement.classList.toggle(
                                    'dark'
                                )
                            }
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                            />
                        </svg>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-6 w-6 hidden dark:block stroke-slate-200 cursor-pointer'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={2}
                            onClick={() =>
                                document.documentElement.classList.toggle(
                                    'dark'
                                )
                            }
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                            />
                        </svg>
                    </div>
                </div>
            </header>
            <MobileMenu isOpen={showMenu} />
            <div
                className={`relative z-20 transition-all duration-300 ${
                    showSearch ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
            >
                <Search />
            </div>
        </>
    )
}
