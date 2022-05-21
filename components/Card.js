import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from 'utils'

export default function Card({ article }) {
    return (
        <article>
            <Link href={`/${article.slug}`}>
                <a>
                    <div className='w-full shadow hover:-translate-y-1 transition-all duration-300'>
                        <Image
                            src={article.image.data.attributes.url}
                            width={370}
                            height={256}
                            layout='responsive'
                            objectFit='cover'
                            priority={true}
                            alt={article.title}
                        />
                    </div>
                </a>
            </Link>
            <div className='pt-8'>
                <Link href={`/${article.slug}`}>
                    <a className='uppercase block font-medium text-blue-700 text-sm mb-4 w-fit'>
                        {article.category.data?.attributes.name}
                    </a>
                </Link>
                <h2 className='text-xl font-bold mb-4'>
                    <Link href={`/${article.slug}`}>
                        <a>{article.title}</a>
                    </Link>
                </h2>
                <p className='uppercase text-gray-500 text-sm font-semibold mb-4'>
                    <Link href={`/${article.slug}`}>
                        <a>{formatDate(article.date)}</a>
                    </Link>{' '}
                    - {article.time} minutos de lectura
                </p>
                <p className='mb-4 text-gray-800'>{article.content}</p>
                <Link href={`/${article.slug}`}>
                    <a className='border block text-center border-gray-200 py-2 hover:bg-gray-200 transition-colors'>
                        Leer más
                    </a>
                </Link>
            </div>
        </article>
    )
}
