import { Col, Row } from "antd";
import { Outlet } from "react-router-dom";

import Header from "../../widgets/header/header.jsx";

import c from "./layout.module.scss";

const Layout = () => {
    return (
        <>
            <div className={c.layoutMiddleware}>
                <Header />
                <main>
                    <Row align="middle">
                        <Col sm={1} md={3} lg={4} xl={6} />
                        <Col sm={22} md={18} lg={16} xl={12}>
                            <Outlet />
                        </Col>
                        <Col sm={1} md={3} lg={4} xl={6} />
                    </Row>
                </main>
            </div>
        </>
    );
}

export default Layout;
