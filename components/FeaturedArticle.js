import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from 'utils'

export default function FeaturedArticle({ article }) {
    return (
        <>
            <Link href={`/${article.slug}`}>
                <a className='text-2xl font-bold mb-8 ml-4 w-fit block'>
                    {article.category.data.attributes.name}
                </a>
            </Link>
            <Link href={`/${article.slug}`}>
                <a>
                    <div className='w-full shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300'>
                        <Image
                            src={article.image.data.attributes.url}
                            width={1200}
                            height={800}
                            quality={100}
                            layout='responsive'
                            objectFit='cover'
                            priority={true}
                            alt={article.title}
                        />
                    </div>
                </a>
            </Link>
            <div className='pt-10 md:pl-4'>
                <Link href={`/${article.slug}`}>
                    <a className='uppercase block font-medium text-blue-700 dark:text-blue-400 text-sm mb-5 w-fit'>
                        {article.category.data.attributes.name}
                    </a>
                </Link>
                <h1 className='text-3xl font-bold mb-5 max-w-4xl'>
                    <Link href={`/${article.slug}`}>
                        <a>{article.title}</a>
                    </Link>
                </h1>
                <p className='uppercase text-gray-500 dark:text-gray-400 text-sm font-semibold mb-5'>
                    <Link href={`/${article.slug}`}>
                        <a>{formatDate(article.date)}</a>
                    </Link>{' '}
                    - {article.time} minutos de lectura
                </p>
                <p className='mb-5 text-gray-800 dark:text-gray-300'>
                    {article.preview}
                </p>
                <Link href={`/${article.slug}`}>
                    <a className='border-b border-blue-700 dark:border-blue-400 hover:border-black dark:hover:border-white transition-colors duration-300'>
                        Leer más
                    </a>
                </Link>
            </div>
        </>
    )
}
