import { useMemo, useState } from 'react'

import { Layout, Typography, theme, Breadcrumb } from 'antd'
import { navBuilder } from '../../helper-functions/navBuilder.js'

import NavContent from "./nav-content/nav-content.jsx";
import SideNuv from '../../components/side-nav/side-nav.jsx'
import { MENU_ITEMS } from '../../components/side-nav/helpers/constant.jsx'

import c from './dashboard.module.scss'

const { Title, Text } = Typography
const { Sider, Content } = Layout
const Dashboard = () => {
    const [activeNavId, setActiveNav] = useState('1')

    const {
        token: { colorBgContainer },
    } = theme.useToken()

    const items = useMemo(() => navBuilder(MENU_ITEMS), [])

    console.log(activeNavId)

    return (
        <Layout hasSider className={c.userMenagerLeyout}>
            <SideNuv items={items} setActiveNav={setActiveNav} />
            <Content className={c.contentStyle}>
                <Layout
                    style={{
                        padding: '0 24px 24px',
                        maxHeight: 'calc(100vh - 64px)',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className={c.navContentWrap}
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >
                        <NavContent activeNavId={activeNavId} />
                    </Content>
                </Layout>
            </Content>
        </Layout>
    )
}

export default Dashboard
