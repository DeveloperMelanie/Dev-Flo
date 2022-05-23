export default function Authors() {
    return (
        <div className='container text-center pb-5'>
            <span className='text-lg font-bold text-blue-700 dark:text-blue-400'>
                Sobre este sitio web
            </span>
            <h1 className='text-3xl font-bold'>¿Quiénes somos?</h1>

            <div className='flex justify-center gap-24 pt-16'>
                <div className='max-w-[17rem]'>
                    <img
                        src='/avatar_redex.png'
                        alt='LaParca80'
                        className='rounded-full w-[300px] h-[275px] shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300 object-cover'
                    />
                    <h2 className='text-2xl font-bold my-5'>LaParca80</h2>
                    <p>
                        Soy un desarrollador web de Florida, con experiencia en
                        frontend y backend. He construido desde simples páginas
                        estáticas hasta un clon de Twitter. Trabajo actualmente
                        con React y Node.js.
                    </p>
                </div>
                <div className='max-w-[17rem]'>
                    <img
                        src='/avatar_redex.png'
                        alt='redeX'
                        className='rounded-full w-[300px] h-[275px] shadow dark:shadow-none hover:shadow-lg hover:-translate-y-1 transition-all duration-300 object-cover'
                    />
                    <h2 className='text-2xl font-bold my-5'>redeX</h2>
                    <p>
                        Soy un desarrollador web de Uruguay, con experiencia en
                        la creación de sitios estáticos y dinámicos. Tengo
                        conocimiento en HTML, CSS, JavaScript.
                    </p>
                </div>
            </div>
        </div>
    )
}
