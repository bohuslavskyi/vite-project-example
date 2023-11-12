import { Row, Col } from 'antd'

import c from './custom-grid-layout.module.scss'

const CustomGridLayout = ({ children }) => {
    return (
        <Row align="middle" className={c.defaultLeyoutGaps}>
            <Col sm={1} md={3} lg={4} xl={6} />
            <Col sm={22} md={18} lg={16} xl={12}>
                {children}
            </Col>
            <Col sm={1} md={3} lg={4} xl={6} />
        </Row>
    )
}

export default CustomGridLayout
