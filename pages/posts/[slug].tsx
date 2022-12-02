import {allPosts, Post} from 'contentlayer/generated'
import {format, parseISO} from "date-fns";
import Head from "next/head";

const SinglePost = ({ post }: { post: Post }) => {
    return (
        <>
            <Head>
                <title>{post.title}</title>
            </Head>
            <article className="max-w-xl mx-auto py-8">
                <div className="text-center mb-8">
                    <time dateTime={post.date} className="text-xs text-gray-600 mb-1">
                        {format(parseISO(post.date), "LLLL d, yyyy")}
                    </time>
                    <h1>{post.title}</h1>
                </div>
                <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
            </article>
        </>
    );
}

export const getStaticPaths = async() => {
    const paths: string[] = allPosts.map((post) => post.url)
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async ({ params }: any) => {
    const post = allPosts.find(post => post._raw.flattenedPath === params.slug)
    return {
        props: {
            post,
        },
    }
}

export default SinglePost