import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
    },
  },
});

import { ThemeProvider } from '../contexts/ThemeContext';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // start MSW in dev if configured
    if (process.env.NEXT_PUBLIC_USE_MOCKS === 'true') {
      (async () => {
        const { worker } = await import('../lib/msw/browser');
        await worker.start();
        console.log('MSW started');
      })();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
