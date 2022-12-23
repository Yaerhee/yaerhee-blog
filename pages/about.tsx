import Head from "next/head";
import Seo from "../components/Seo"

export default function About() {
    return (
        <>
            <div className="space-y-1">
                <Seo title="Resume"/>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-800">안녕하세요, 이예리입니다.</div>
                <div className="text-base py-2">
                    <p>어제보다 더 나은 내일을 꿈꾸며, 사람들에게 코드로 도움을 주고자 하는 1년 6개월차 프론트엔드 엔지니어 입니다.</p>
                    <p>배우는 것에 욕심이 많고, 사람들과 융화되어 협업하는 것을 좋아합니다.</p>
                </div>
            </div>
        </>
    )
}