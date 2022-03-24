import Layouts from '../components/layouts'
import '../styles/globals.css'
import AuthProvider from '../hooks/AuthProvider'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </AuthProvider>
  )
}

export default MyApp
