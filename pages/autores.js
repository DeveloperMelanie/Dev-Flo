import axiosClient from 'config/axios'

export default function Authors({ authors }) {
    return (
        <div className='container text-center pb-5'>
            <span className='text-lg font-bold text-blue-700 dark:text-blue-400'>
                Sobre este sitio web
            </span>
            <h1 className='text-3xl font-bold'>¿Quiénes somos?</h1>

            <div className='flex flex-wrap justify-center gap-x-24 gap-y-10 pt-16'>
                {authors.map(({ id, attributes: author }) => (
                    <div key={id} className='max-w-[17rem]'>
                        <img
                            src={author.image.data.attributes.url}
                            alt={author.name}
                            className='rounded-full w-[300px] h-[275px] shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300 object-cover'
                        />
                        <h2 className='text-2xl font-bold my-5'>
                            {author.name}
                        </h2>
                        <p>{author.about}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const { data } = await axiosClient.get('/authors?populate=*')

    return {
        props: {
            authors: data.data,
        },
        revalidate: 10,
    }
}
