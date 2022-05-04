import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
    return <>  <script src="https://cdn.tailwindcss.com"></script>
<Component {...pageProps} /></>
}

export default MyApp
