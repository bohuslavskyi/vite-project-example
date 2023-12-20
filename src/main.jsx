import {useEffect, useState} from "react";
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { ConfigProvider, theme} from "antd";

import {Paths} from "./paths.js";
import {store} from "./app/store.js";
import {antdTheme} from "./antdTheme.js";
import AppLayout from "./widgets/layout/layout.jsx";
import Home from './pages/home/home.jsx'
import PostsRTKQuery from './pages/posts-with-rtk-query/posts-with-RTK-query.jsx'
import PostsLazyPagination from './pages/posts-with-lazy-pagination/posts-with-lazy.jsx'
import Dashboard from "./pages/dashboard/dashboard.jsx";

import './index.scss'

const App = () => {
    const [themeAlgorithm, setAlgorithm] = useState(localStorage.getItem("themeAlgorithm"));
    const algorithm = theme[themeAlgorithm];

    useEffect(() => {
        localStorage.setItem("themeAlgorithm", themeAlgorithm);
    }, [themeAlgorithm])

    const router = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout setAlgorithm={setAlgorithm} themeAlgorithm={themeAlgorithm} />,
            errorElement: <p>404</p>,
            children: [
                { index: true, element: <Home /> },
                { path: Paths.postsRTKQuery, element: <PostsRTKQuery /> },
                { path: Paths.postsLazyPagination, element: <PostsLazyPagination /> },
                { path: Paths.antdForm, element: <Dashboard /> },
            ],
        },
    ]);

    return (
        <ConfigProvider theme={{...antdTheme, algorithm: algorithm}} >
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </ConfigProvider>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)
