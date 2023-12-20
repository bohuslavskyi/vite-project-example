import { Button, Flex, Space, Table } from 'antd'

import { PlusOutlined, DeleteOutlined } from '@ant-design/icons'
import { useAllUsersQuery } from '../../../app/services/postsApi/usersApi.js'
import { columns } from './table-column/table-column.jsx'
import SearchInput from '../../../widgets/input/search-input.jsx'
import {useDispatch, useSelector} from "react-redux";
import {setIsAddUserModal} from "../../../features/users/usersSlice.js";

import c from './users.module.scss'

const Users = ({ items }) => {
    const dispatch = useDispatch();
    const usersData = useAllUsersQuery()
    const { data = {} } = usersData
    const { users = [] } = data

    const handleAddUserModal = () => {
        dispatch(setIsAddUserModal(true))
    }

    return (
        <div className={c.users}>
            <Space direction="vertical" size="large">
                <Flex justify={"space-between"}>
                    <SearchInput width={{ width: '250px' }} />

                    <Space size={"small"}>
                        <Button type="primary" danger icon={<DeleteOutlined />}>
                            Delete
                        </Button>
                        <Button onClick={handleAddUserModal} type="primary" icon={<PlusOutlined />}>
                            Add User
                        </Button>
                    </Space>
                </Flex>

                <Table columns={columns} dataSource={users} />
            </Space>
        </div>
    )
}

export default Users
