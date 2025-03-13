import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import { Router as router } from './routes/router';

const App = () => {
  const queryClient = new QueryClient();
  const hostname = window.location.hostname;

  return (
    <HelmetProvider>
      <Helmet>
        {hostname === 'your-url' && (
          <>
            <link
              href={window.location.origin + window.location.pathname}
              rel="canonical"
            />
          </>
        )}
      </Helmet>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
