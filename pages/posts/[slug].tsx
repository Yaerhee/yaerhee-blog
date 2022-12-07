import {allPosts, Post} from 'contentlayer/generated'
import {format, parseISO} from "date-fns";
import Head from "next/head";
import {useMDXComponent} from "next-contentlayer/hooks";

const SinglePost = ({post}: { post: Post }) => {
    const MDXComponent = useMDXComponent(post.body.code)
    return (
        <>
            <Head>
                <title>{post.title}</title>
            </Head>
            <article className="w-full mx-auto py-8 prose dark:prose-invert">
                <div className="text-center mb-8">
                    <time dateTime={post.date} className="text-xs text-gray-600 mb-1">
                        {format(parseISO(post.date), "LLLL d, yyyy")}
                    </time>
                    <h1>{post.title}</h1>
                </div>
                <MDXComponent />
            </article>
        </>
    );
}

export const getStaticPaths = async () => {
    const paths: string[] = allPosts.map((post) => post.url)
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async ({params}: any) => {
    const post = allPosts.find(post => post._raw.flattenedPath === params.slug)
    return {
        props: {
            post,
        },
    }
}

export default SinglePost