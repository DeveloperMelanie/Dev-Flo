import axiosClient from 'config/axios'
// import FeaturedArticle from 'components/FeaturedArticle'
import ArticlesList from 'components/ArticlesList'

export default function Home({ articles, featuredArticle }) {
    return (
        <>
            <section className='container'>
                {/* <FeaturedArticle article={featuredArticle.attributes} /> */}
            </section>
            <section className='container pt-14'>
                <ArticlesList articles={articles} />
            </section>
        </>
    )
}

export async function getStaticProps() {
    const { data } = await axiosClient.get(
        '/articles?sort=createdAt%3Adesc&populate=*'
    )

    const featuredArticle = data.data.find(
        article => article.attributes.featured
    )
    const articles = data.data.filter(article => !article.attributes.featured)

    return {
        props: {
            articles,
            featuredArticle,
        },
        revalidate: 10,
    }
}
