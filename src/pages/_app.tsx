import { AppProps } from 'next/App'
import { Header } from '../components/Header'
import {Provider as NexAtuthProvider} from 'next-auth/client'

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NexAtuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NexAtuthProvider>
  )
}

export default MyApp
