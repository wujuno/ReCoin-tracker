import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import router from './Router';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
  <RecoilRoot>
    <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
  </RecoilRoot>
  </QueryClientProvider>
);

