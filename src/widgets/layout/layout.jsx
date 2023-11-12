import { createContext, useRef } from 'react'
import { Col, Row, Radio, Layout } from 'antd'
import { Outlet } from 'react-router-dom'

import { SunSVG } from '../../assets/sun.jsx'
import { MoonSVG } from '../../assets/moon.jsx'
import Header from '../header/header.jsx'

import c from './layout.module.scss'
import AddUserModal from "../../components/add-user-modal/add-user-modal.jsx";

export const LayoutContext = createContext()
const AppLayout = ({ themeAlgorithm, setAlgorithm }) => {
    const scrollRef = useRef(null)

    return (
        <div className={c.layoutMiddleware}>
            <AddUserModal />
            <Layout>
                <Header>
                    <Radio.Group
                        value={themeAlgorithm}
                        onChange={(e) => setAlgorithm(e.target.value)}
                    >
                        <Radio.Button value="defaultAlgorithm">
                            <SunSVG />
                        </Radio.Button>
                        <Radio.Button value="darkAlgorithm">
                            <MoonSVG />
                        </Radio.Button>
                    </Radio.Group>
                </Header>

                <div className={c.outletWrap}>
                    <LayoutContext.Provider value={scrollRef}>
                        <Outlet />
                    </LayoutContext.Provider>
                </div>
            </Layout>
        </div>
    )
}

export default AppLayout
