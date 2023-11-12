import {useState} from 'react'
import { Layout, Menu } from 'antd'

import c from './side-nav.module.scss'

const { Sider, Content } = Layout

const SideNuv = ({ items, setActiveNav }) => {
    const [collapsed, setCollapsed] = useState(true);

    const onClick = e => setActiveNav(e.key);


    return (
        <Sider
            theme={'light'}
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            breakpoint="lg"
            onBreakpoint={(broken) => console.log(broken)}
            className={c.siderStyle}
        >
            <div className={c.demoLogoVertical} />
            <Menu defaultSelectedKeys={['1']} mode="inline" items={items} onClick={onClick}/>
        </Sider>
    )
}

export default SideNuv
