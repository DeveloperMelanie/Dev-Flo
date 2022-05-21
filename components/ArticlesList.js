import { useEffect, useState } from 'react'
import Link from 'next/link'
import Card from './Card'

export default function ArticlesList({ articles: posts }) {
    // eslint-disable-next-line no-unused-vars
    const [articles, setArticles] = useState(posts.slice(0, 6))
    const [showAll, setShowAll] = useState(false)

    // useEffect(() => {
    //     if (showAll) setArticles(posts)
    // }, [showAll])

    useEffect(() => {
        if (articles.length <= 5) setShowAll(true)
    }, [])

    return (
        <>
            <Link href='/'>
                <a className='text-2xl font-bold mb-8 ml-4 w-fit block'>
                    Nuestros artículos
                </a>
            </Link>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-12'>
                {articles.map(article => (
                    <Card key={article.id} article={article.attributes} />
                ))}
            </div>
            {!showAll && (
                <div className='relative flex justify-center items-center pt-14 pb-6'>
                    <div className='px-5 bg-white'>
                        <button
                            type='button'
                            onClick={() => setShowAll(true)}
                            className='px-14 py-3 border border-gray-200 hover:bg-gray-200 transition-colors'
                        >
                            Cargar más
                        </button>
                    </div>
                    <div className='absolute w-full bg-gray-200 h-px -z-10'></div>
                </div>
            )}
        </>
    )
}
