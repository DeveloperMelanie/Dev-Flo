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
                            className='cursor-pointer'
                            onClick={() => setShowSearch(!showSearch)}
                        />
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
