import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
import { ReactElement, ReactNode } from 'react'
import {NextPage} from "next";
import { ChakraProvider } from "@chakra-ui/react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    // eslint-disable-next-line no-unused-vars
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <ChakraProvider>
      <div>
        <Layout>
          {/* container layout */}
          <div className="w-2/5 mt-8 mx-auto min-h-[100vh]">
            <Component {...pageProps} />
          </div>
        </Layout>
      </div>
    </ChakraProvider>
  )
}
