import axiosClient from 'config/axios'
import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { formatDate } from 'utils'
import SEO from 'components/SEO'

export default function Article({ article, latestArticles }) {
    return (
        <>
            <SEO title={article.title} description={article.preview} />
            <div className='container lg:flex lg:justify-center lg:gap-12'>
                <article className='lg:w-2/3'>
                    <span className='uppercase block font-medium text-blue-700 dark:text-blue-400 text-sm mb-3 w-fit'>
                        {article.category.data?.attributes.name}
                    </span>
                    <h1 className='text-4xl leading-tight font-bold mb-5 max-w-4xl'>
                        {article.title}
                    </h1>
                    <p className='uppercase text-gray-500 dark:text-gray-400 text-sm font-semibold mb-8'>
                        {formatDate(article.date)} - {article.time} minutos de
                        lectura
                    </p>
                    <div className='w-full shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300'>
                        <Image
                            src={article.image.data.attributes.url}
                            width={750}
                            height={500}
                            layout='responsive'
                            objectFit='cover'
                            priority={true}
                            alt={article.title}
                        />
                    </div>
                    <div className='pt-10 sm:px-6 dark:text-gray-300'>
                        <ReactMarkdown
                            components={{
                                img: props => (
                                    <img
                                        {...props}
                                        src={props.src}
                                        className='w-full object-cover shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300'
                                    />
                                ),
                            }}
                            linkTarget='_blank'
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                            className='article text-lg'
                        >
                            {article.article}
                        </ReactMarkdown>
                    </div>
                </article>
                <aside className='lg:w-1/3 pt-6 lg:pt-0'>
                    <span className='block text-xl font-bold pb-3 border-b border-gray-300'>
                        ??ltimas publicaciones
                    </span>
                    <div className='pt-8 flex flex-col gap-6'>
                        {latestArticles.map(article => (
                            <Link key={article.slug} href={`/${article.slug}`}>
                                <a className='flex gap-6'>
                                    <div className='min-w-[144px] h-[123px] shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300'>
                                        <Image
                                            src={
                                                article.image.data.attributes
                                                    .url
                                            }
                                            width={144}
                                            height={123}
                                            layout='responsive'
                                            objectFit='cover'
                                            alt={article.title}
                                        />
                                    </div>
                                    <div>
                                        <h4 className='text-lg font-semibold mb-3 hover:text-gray-700 dark:hover:text-gray-300 transition-colors'>
                                            {article.title}
                                        </h4>
                                        <p className='uppercase text-gray-500 dark:text-gray-400 text-sm font-semibold'>
                                            {formatDate(article.date)} -{' '}
                                            {article.time} minutos de lectura
                                        </p>
                                    </div>
                                </a>
                            </Link>
                        ))}
                    </div>
                </aside>
            </div>
        </>
    )
}

export async function getStaticProps({ params }) {
    const { slug } = params
    const [{ data: article }, { data: latestArticles }] = await Promise.all([
        axiosClient.get(`/articles?filters[slug]=${slug}&populate=*`),
        axiosClient.get(
            `/articles?pagination[pageSize]=3&sort=createdAt%3Adesc&filters[slug][$ne]=${slug}&populate=*`
        ),
    ])

    if (!article.data[0]) {
        return {
            redirect: {
                permanent: false,
                destination: '/',
            },
        }
    }

    return {
        props: {
            article: article.data[0].attributes,
            latestArticles: latestArticles.data.map(
                article => article.attributes
            ),
        },
        revalidate: 10,
    }
}

export async function getStaticPaths() {
    const { data } = await axiosClient.get('/articles')
    const paths = data.data.map(article => ({
        params: {
            slug: article.attributes.slug,
        },
    }))

    return {
        paths,
        fallback: 'blocking',
    }
}
