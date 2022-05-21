import axiosClient from 'config/axios'
import ReactMarkdown from 'react-markdown'

export default function AboutUs({ features }) {
    return (
        <div className='container text-center pb-5'>
            <span className='text-lg font-bold text-blue-700'>
                Sobre este sitio web
            </span>
            <h1 className='text-3xl font-bold'>¿Qué queremos lograr?</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto pt-16'>
                {features.map(({ id, attributes: feature }) => (
                    <div
                        key={id}
                        className='flex flex-col sm:flex-row items-center sm:items-start sm:text-left gap-6 py-7 px-8 rounded-lg shadow'
                    >
                        <div>
                            <img
                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${feature.icon.data.attributes.url}`}
                                alt={feature.name}
                                className='w-20 sm:w-60 md:w-72'
                            />
                        </div>
                        <div>
                            <h2 className='text-2xl mb-3 font-semibold'>
                                {feature.name}
                            </h2>
                            <ReactMarkdown className='text-gray-800'>
                                {feature.description}
                            </ReactMarkdown>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const { data } = await axiosClient.get('/features?populate=*')

    return {
        props: {
            features: data.data,
        },
    }
}
