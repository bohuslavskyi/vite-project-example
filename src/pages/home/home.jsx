import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import CustomGridLayout from '../../widgets/custom-grid-layout/custom-grid-layout.jsx'
import { Typography, Button } from 'antd'
const { Title, Text } = Typography

import './home.scss'

function Home() {
    const [count, setCount] = useState(0)

    return (
        <CustomGridLayout>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <Title>Vite + React</Title>
            <div className="card">
                <Button onClick={() => setCount((count) => count + 1)}>
                    <Text>count is {count}</Text>
                </Button>
                <p>
                    <Text>
                        Edit <code>src/App.jsx</code> and save to test HMR
                    </Text>
                </p>
            </div>
            <p className="read-the-docs">
                <Text type="secondary">
                    Click on the Vite and React logos to learn more
                </Text>
            </p>
        </CustomGridLayout>
    )
}

export default Home
