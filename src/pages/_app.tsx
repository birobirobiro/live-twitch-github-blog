import { globalStyles } from '../styles/global'

import type { AppProps } from 'next/app'

globalStyles()

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
