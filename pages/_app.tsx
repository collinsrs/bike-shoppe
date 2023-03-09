import 'styles/global.css';
import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { MantineProvider } from '@mantine/core';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import { Analytics } from '@vercel/analytics/react';
import { ApolloProvider } from '@apollo/client';
import apolloClient from 'apollo-client';

const gaMeasurementId = 'G-XKSNX4TTFJ';

export default function App({ Component, pageProps }: AppProps) {
  return (
      <ApolloProvider client={apolloClient}>
      <ThemeProvider attribute="class">
        <MantineProvider
          theme={{
            colorScheme: 'dark',
            fontFamily: 'Inter, sans-serif',
          }}
        >
        <Component {...pageProps} />
        <Analytics />
        </MantineProvider>
      </ThemeProvider>
      </ApolloProvider>
  );
}
