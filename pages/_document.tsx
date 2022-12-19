// basic web accessibility settings
import Document, {DocumentContext, Html, Head, Main, NextScript} from 'next/document'

export default class MainDocument extends Document {
    static async getInitialProps(context: DocumentContext) {
        const initialProps = await Document.getInitialProps(context)
        return {...initialProps}
    }

    render() {
        const setPageTheme = `
            function getTheme() {
                const theme = window.localStorage.getItem('theme')
                return theme ? theme : 'dark'
                }
            document.body.dataset.theme = getTheme()
            if (window.localStorage.theme === 'dark' || !window.localStorage['theme']) {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
        `
        return (
            <Html>
                <Head/>
                <body>
                    <script dangerouslySetInnerHTML={{ __html: setPageTheme }} />
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}