import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";

import {Paths} from "./paths.js";
import {store} from "./app/store.js";
import Layout from "./components/layout/layout.jsx";
import App from './pages/app/App.jsx'
import Posts from './pages/posts/posts.jsx'

import './index.scss'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <p>404</p>,
        children: [
            { index: true, element: <App /> },
            { path: Paths.posts, element: <Posts /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>,

)
