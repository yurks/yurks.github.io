import Layout from '../../components/layout'
import { getPost, getAllPostIds } from '../../lib/posts'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.data }} />
      </article>
    </Layout>
  )
}
export async function getStaticPaths() {
    const paths = await getAllPostIds()
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps({ params }) {
  const postData = await getPost(params.id)
  return {
    props: {
      postData
    }
  }
}
