import '../styles/globals.css'
import type { AppProps } from 'next/app'
import PageLayoutIndex from '@layouts/index'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PageLayoutIndex>
      <Component {...pageProps} />
    </PageLayoutIndex>

  )
}

export default MyApp
