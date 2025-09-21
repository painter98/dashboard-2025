import { lazy } from 'react';
import UserOverview from '../pages/UserOverview';
const Index = lazy(() => import('../pages/Index'));

const routes = [
    // dashboard
    {
        path: '/',
        element: <Index />,
        layout: 'default',
    },
    //user overview
    {
        path: '/user/overview',
        element: <UserOverview />,
        layout: 'default',
    },

];

export { routes };
