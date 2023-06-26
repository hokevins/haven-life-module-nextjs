import ErrorBoundary from '../../components/ErrorBoundary'
import '@/styles/globals.css'

// A test comment for GitHub.

export default function App({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
