export default function MenuIcon({ isActive, changeState }) {
    return (
        <div
            className='sm:hidden w-7 cursor-pointer z-50'
            role='button'
            onClick={() => changeState(!isActive)}
        >
            <div
                className={`w-full h-[1px] bg-gray-700 mb-2 transition-transform duration-300${
                    isActive ? ' -rotate-45 translate-y-[6px]' : ''
                }`}
            ></div>
            <div
                className={`w-full h-[1px] bg-gray-700 mb-2 transition-opacity duration-300${
                    isActive ? ' opacity-0' : ''
                }`}
            ></div>
            <div
                className={`w-full h-[1px] bg-gray-700 transition-transform duration-300${
                    isActive ? ' rotate-45 -translate-y-[12px]' : ''
                }`}
            ></div>
        </div>
    )
}
