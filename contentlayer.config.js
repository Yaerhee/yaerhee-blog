// contentlayer.config.js
import {defineDocumentType, makeSource} from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrism from 'rehype-prism-plus'
import {rehypeAccessibleEmojis} from 'rehype-accessible-emojis'

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true, },
        date: { type: 'date', required: true, },
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (post) => `/posts/${post._raw.flattenedPath}`,
        },
    },
}))

export default makeSource({
    contentDirPath: 'posts',
    documentTypes: [Post],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeSlug,
            rehypeCodeTitles,
            rehypePrism,
            rehypeAccessibleEmojis,
            rehypeAutolinkHeadings,
        ]
    }
})