import {Avatar, Button, Flex, Typography} from "antd";
import {EditOutlined, UserOutlined} from "@ant-design/icons";
import {MaleIcon} from "../../../../assets/maleIcon.jsx";
import {FemaleIcon} from "../../../../assets/femaleIcon.jsx";

const { Title, Text } = Typography;
export const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (_, record) => {
            const name = `${record.firstName || ''} ${record.lastName || ''} `
            return (
                <Flex gap="small">
                    <span>
                        <Avatar
                            size="small"
                            icon={<UserOutlined />}
                            // src={<img src={record.image} alt="avatar" />}
                        />
                    </span>
                    <Text ellipsis={{ tooltip: name }}>{name}</Text>
                </Flex>
            )
        },
    },
    {
        title: '',
        dataIndex: 'gender',
        key: 'gender',
        width: '50px',
        render: (text) => (
            <>{text === 'male' ? <MaleIcon /> : <FemaleIcon />}</>
        ),
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        ellipsis: true,
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
        ellipsis: true,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        ellipsis: true,
        render: (_, record) => <>{record.address?.address || ''}</>,
    },

    {
        title: '',
        dataIndex: 'edit',
        key: 'edit',
        width: '80px',
        render: () => (
            <Button type="text" shape="circle">
                <EditOutlined />
            </Button>
        ),
    },
]