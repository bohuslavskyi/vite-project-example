import { Col, Row } from "antd";
import { Outlet } from "react-router-dom";

import c from "./layout.module.scss";

const Layout = () => {
    return (
        <Outlet />
    );
}

export default Layout;
