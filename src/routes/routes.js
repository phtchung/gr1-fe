import * as Pages from '../pages';
//
// export const UserRoutes = [];

// export const AdminRoutes = [
//     {path: '/admin', element: <Pages.Home/>}
// ];

export const GuestRoutes = [
    {path: '/login', element: <Pages.Login/>},
    {path: '/register', element: <Pages.Register/>},
];


export const NormalRoutes = [
    {path: '/', element: <Pages.Home/>},
    {path: '/login', element: <Pages.Login/>},
    {path: '/register', element: <Pages.Register/>},
    {path: '/search', element: <Pages.Search/>},
    {path: '/profile',element: <Pages.Profile/>},
    {path: '/overview',element: <Pages.Overview/>},
    {path: '/profile',element: <Pages.Profile/>},
    {path: '/detail/:id', element: <Pages.Detail/>},
    {path: '/tasklist',element: <Pages.TaskList/>},

    // {path: '/tutor/:id', element: <Pages.Tutor/>},
    // {path: '/profile/:id', element: <Pages.Profile/>}
];
