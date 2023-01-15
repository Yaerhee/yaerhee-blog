import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
      // Layout - Navbar with children
      <div>
          <Layout>
              {/* container layout */}
              <div className="w-2/5 mt-8 mx-auto min-h-[100vh]">
                  <Component {...pageProps} />
              </div>
          </Layout>
      </div>
  )
}
