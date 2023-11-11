import {createContext, useRef} from "react";
import {Col, Row, Radio, Layout} from "antd";
import {Outlet} from "react-router-dom";

import {SunSVG} from "../../assets/sun.jsx";
import {MoonSVG} from "../../assets/moon.jsx";
import Header from "../../widgets/header/header.jsx";

import c from "./layout.module.scss";

export const LayoutContext = createContext();
const AppLayout = ({themeAlgorithm, setAlgorithm}) => {
    const scrollRef = useRef(null);

    return (
        <div className={c.layoutMiddleware}>
            <Layout>
                <Header>
                    <Radio.Group
                        value={themeAlgorithm}
                        onChange={e => setAlgorithm(e.target.value)}
                    >
                        <Radio.Button value='defaultAlgorithm'><SunSVG /></Radio.Button>
                        <Radio.Button value='darkAlgorithm'><MoonSVG /></Radio.Button>
                    </Radio.Group>
                </Header>
                <Row
                    ref={scrollRef}
                    align="middle"
                    className={c.outletWrap}
                >
                    <Col sm={1} md={3} lg={4} xl={6} />
                    <Col sm={22} md={18} lg={16} xl={12}>
                        <LayoutContext.Provider value={scrollRef}>
                            <Outlet />
                        </LayoutContext.Provider>
                    </Col>
                    <Col sm={1} md={3} lg={4} xl={6} />
                </Row>
            </Layout>
        </div>
    );
}

export default AppLayout;
