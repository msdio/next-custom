import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
