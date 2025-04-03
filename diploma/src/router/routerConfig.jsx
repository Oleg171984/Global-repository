import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage, HomePage, Hotels, About ,Truskavets } from '@pages';

const routerConfig = [
  {
    path: '/',
    errorElement: <ErrorPage />,
    id: 'root',
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <About /> },
      { path: 'truskavets', element: <Truskavets />},
      {
        path: 'hotels',
        children: [
          { index: true, element: <Hotels /> },
          { path: ':id', element: <p>new-hotel-id</p> },
        ],
      },
    ],
  },
];

export const router = createBrowserRouter(routerConfig);
