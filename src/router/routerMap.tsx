import { lazy } from 'react';

// 快速导入工具函数
const lazyLoad = (moduleName: string) => lazy(() => import(`@/pages/${moduleName}/index.tsx`));
import RequireAuth from '@/router/Guard';
export const Home = lazyLoad('Home');
// export const ReduxToolkit = lazyLoad('ReduxToolkit');
export const ReactQuery = lazyLoad('ReactQuery');
export const ErrorPage = lazyLoad('ErrorPage');
export const Claim = lazyLoad('Claim');
export const Market = lazyLoad('Market');
export const MyAssets = lazyLoad('MyAssets');
export const Item = lazyLoad('Item');
const routers = [
  {
    path: '/',
    element: (
      <RequireAuth>
        <Market />
      </RequireAuth>
    ),
    meta: {
      title: '',
    },
  },

  {
    path: '/claim',
    element: (
      <RequireAuth>
        <Claim />
      </RequireAuth>
    ),
    meta: {
      title: '',
    },
  },
  {
    path: '/market',
    element: (
      <RequireAuth>
        <Market />
      </RequireAuth>
    ),
    meta: {
      title: '',
    },
  },
  {
    path: '/my-assets',
    element: (
      <RequireAuth>
        <MyAssets />
      </RequireAuth>
    ),
    meta: {
      title: '',
    },
  },
  {
    path: '/item/:id',
    element: (
      <RequireAuth>
        <Item />
      </RequireAuth>
    ),
    meta: {
      title: '',
    },
  },
  // {
  //   path: '/toolkit',
  //   element: (
  //     <RequireAuth>
  //       <ReduxToolkit />
  //     </RequireAuth>
  //   ),
  //   meta: {
  //     title: '',
  //   },
  // },
  {
    path: '/query',
    element: <ReactQuery />,
    meta: {
      title: '',
    },
  },
  {
    path: '*',
    element: <ErrorPage />,
    meta: {
      title: '',
    },
  },
];

export default routers;
