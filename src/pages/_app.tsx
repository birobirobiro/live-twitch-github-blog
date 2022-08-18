import { globalStyles } from '../styles/global'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
const queryClient = new QueryClient()
globalStyles()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
