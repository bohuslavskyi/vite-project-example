import { Col, Row, Space, Layout } from "antd";
import { NavLink } from "react-router-dom";

import { Paths } from "../../paths.js";

import c from './header.module.scss'

const Header = () => {
    const { Header } = Layout;

    return (
        <Header className={c.header}>
            <Row>
                <Col span={4} />
                <Col span={16}>
                    <Space className={c.headerWrap}>
                        <Space className={c.fontWhite}>
                                <>
                                    <Col>
                                        <NavLink to={Paths.home}>
                                            <button type="button" > Home </button>
                                        </NavLink>
                                    </Col>

                                    <Col>
                                        <NavLink to={Paths.posts}>
                                            <button type="button"> Posts </button>
                                        </NavLink>
                                    </Col>
                                </>
                        </Space>
                    </Space>
                </Col>
                <Col span={4} />
            </Row>
        </Header>
    )
}

export default Header
