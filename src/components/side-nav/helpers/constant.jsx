import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons'

export const SUB1 = [
    ['4', 'Team 1'],
    ['5', 'Team 2'],
]

export const MENU_ITEMS = [
    ['1', 'Dashboard', <PieChartOutlined />],
    ['2', 'Option', <DesktopOutlined />],
    ['3', 'Users', <UserOutlined />],
    ['sub2', 'Team', <TeamOutlined />, SUB1],
    ['6', 'File', <FileOutlined />],
]

