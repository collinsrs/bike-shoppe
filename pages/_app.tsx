import 'styles/global.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import { Analytics } from '@vercel/analytics/react';

const gaMeasurementId = 'G-XKSNX4TTFJ';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
        <Analytics />
        <GoogleAnalytics gaMeasurementId={gaMeasurementId} strategy="lazyOnload" />
      </ThemeProvider>
    </SessionProvider>
  );
}
