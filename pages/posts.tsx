import Seo from "../components/Seo";
import {allPosts, Post} from "contentlayer/generated";
import {compareDesc, format, parseISO} from "date-fns";
import Link from "next/link";

export default function Posts({posts}: { posts: Post[] }) {
    return (
        <>
            <Seo title="Posts"/>
            {posts.map((post, idx) => (
                <PostCard key={idx} {...post} />
            ))}
        </>
    )
}


function PostCard(post: Post) {
    return (
        <div className="mb-6">
            <time dateTime={post.date} className="block text-sm post-date">
                {format(parseISO(post.date), 'LLLL d, yyyy')}
            </time>
            <h2 className="text-lg">
                <Link href={post.url} className="post-title">
                    <span className="post-title">{post.title}</span>
                </Link>
            </h2>
        </div>
    )
}

export async function getStaticProps() {
    const posts: Post[] = allPosts.sort((a: Post, b: Post) => {
        return compareDesc(new Date(a.date), new Date(b.date))
    })
    return {props: {posts}}
}
