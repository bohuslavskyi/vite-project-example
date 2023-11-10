import { Col, Row, Space, Layout, Button, Typography } from 'antd'
import { NavLink } from 'react-router-dom'

import NavigationList from './constants/navList.js'

import c from './header.module.scss'

const Header = ({ children }) => {
    const { Header } = Layout
    const { Text } = Typography

    return (
        <Header className={c.header}>
            <Row>
                <Col span={4} />
                <Col span={16}>
                    <Space className={c.headerWrap}>
                        <Space className={c.fontWhite}>
                            {NavigationList.map((navButton) => (
                                <Col key={navButton.id}>
                                    <NavLink to={navButton.linkTo}>
                                        <Button>
                                            <Text>{navButton.title}</Text>
                                        </Button>
                                    </NavLink>
                                </Col>
                            ))}
                        </Space>
                        <Space>{children}</Space>
                    </Space>
                </Col>
                <Col span={4} />
            </Row>
        </Header>
    )
}

export default Header
