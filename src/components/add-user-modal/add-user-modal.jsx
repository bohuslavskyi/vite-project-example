import { useState } from 'react'
import {
    Button,
    Cascader,
    Col,
    Flex,
    Form,
    Input,
    Modal,
    Row,
    Select,
    Space,
    Upload,
} from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import { useAddUserMutation } from '../../app/services/postsApi/usersApi.js'
import { setIsAddUserModal } from '../../features/users/usersSlice.js'
import { getBase64 } from '../../helper-functions/get-base64.js'
import { PlusOutlined } from '@ant-design/icons'

import c from './add-user-modal.module.scss'

const { Option } = Select

const residences = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
]

const AddUserModal = (props) => {
    const dispatch = useDispatch()
    const [confirmLoading, setConfirmLoading] = useState(false)
    const [form] = Form.useForm()

    const [previewOpen, setPreviewOpen] = useState(false)
    const [previewImage, setPreviewImage] = useState('')
    const [previewTitle, setPreviewTitle] = useState('')
    const [fileList, setFileList] = useState([])

    const isOpen = useSelector((state) => state.users.isAddUserModal)
    const [addNewUser, { isLoading }] = useAddUserMutation()


    const handleCancelPreview = () => setPreviewOpen(false)
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj)
        }
        setPreviewImage(file.url || file.preview)
        setPreviewOpen(true)
        setPreviewTitle(
            file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
        )
    }
    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList)

    const onFinish = (values) => {
        console.log('Received values of form: ', values)
        console.log('file: ', fileList)

        const {prefix, ["residence"]:residence, ...newUser} = values;

        newUser.phone = values.prefix + newUser.phone;
        newUser.address = {
            address: values.residence?.join('/')
        };
        console.log('newUser', newUser)
        addNewUser(JSON.stringify(newUser));
    }

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 80,
                }}
            >
                <Option value="+972">+972</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    )

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div>Upload avatar</div>
        </div>
    )

    return (
        <>
            <Modal
                open={previewOpen}
                title={previewTitle}
                footer={null}
                onCancel={handleCancelPreview}
            >
                <img
                    alt="example"
                    style={{
                        width: '100%',
                    }}
                    src={previewImage}
                />
            </Modal>
            <Modal
                centered
                title="AddUser"
                open={isOpen}
                destroyOnClose
                footer={null}
                onCancel={() => dispatch(setIsAddUserModal(false))}
            >
                <Form
                    form={form}
                    layout="vertical"
                    name="addUser"
                    onFinish={onFinish}
                    initialValues={{
                        prefix: '+972',
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    scrollToFirstError
                    requiredMark={false}
                >
                    <Space size={'large'} direction="vertical" style={{width: '100%'}}>
                        <Flex justify="center">
                            <Upload
                                className={c.uploaderWrap}
                                action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                                listType="picture-circle"
                                fileList={fileList}
                                maxCount={1}
                                onPreview={handlePreview}
                                onChange={handleChange}
                            >
                                {fileList.length >= 1 ? null : uploadButton}
                            </Upload>
                        </Flex>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="firstName"
                                    label="First name"
                                    tooltip="What do you want others to call you?"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                'Please input your first name!',
                                            whitespace: true,
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>

                            <Col span={12}>
                                <Form.Item
                                    name="lastName"
                                    label="First name"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                'Please input your first name!',
                                            whitespace: true,
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Space>

                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        label="Phone Number"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone number!',
                            },
                        ]}
                    >
                        <Input
                            addonBefore={prefixSelector}
                            style={{
                                width: '100%',
                            }}
                        />
                    </Form.Item>

                    <Space
                        size={'large'}
                        direction="vertical"
                        style={{ width: '100%' }}
                    >
                        <Row gutter={16}>
                            <Col span={6}>
                                <Form.Item
                                    name="gender"
                                    label="Gender"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please select gender!',
                                        },
                                    ]}
                                >
                                    <Select placeholder="">
                                        <Option value="male">Male</Option>
                                        <Option value="female">Female</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={18}>
                                <Form.Item
                                    name="residence"
                                    label="Habitual Residence"
                                    rules={[
                                        {
                                            type: 'array',
                                            required: true,
                                            message:
                                                'Please select your habitual residence!',
                                        },
                                    ]}
                                >
                                    <Cascader options={residences} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Flex justify={'center'}  gap={16}>
                            <Form.Item>
                                <Button type="default" htmlType="button" onClick={() => dispatch(setIsAddUserModal(false))}>
                                    Cancel
                                </Button>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Register
                                </Button>
                            </Form.Item>
                        </Flex>
                    </Space>
                </Form>
            </Modal>
        </>
    )
}

export default AddUserModal
