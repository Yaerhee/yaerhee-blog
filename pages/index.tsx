import Seo from "../components/Seo";
import {allPosts, Post} from "contentlayer/generated";
import Posts from "./posts";

export default function Home() {
    return (
        <>
            <Seo title="Blog"/>
            <div className="main-container">
                <Posts posts={allPosts} />
            </div>
        </>
    )
}
