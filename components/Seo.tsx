import Head from "next/head";

export default function Seo({ title }: { title: string }) {
    return (
        <Head>
            <title>Yaerhee&apos;s {title}</title>
        </Head>
    )
}