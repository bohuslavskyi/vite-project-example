import { Form, Input, Button } from 'antd'

const AntdForm = () => {
    const onFinish = (values) => {
        onSubmit(values)
    }

    return (
        <Form onFinish={onFinish}>
            <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Email"
                name="email"
                rules={[
                    { required: true, message: 'Please input your email!' },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Add User
                </Button>
            </Form.Item>
        </Form>
    )
}

export default AntdForm
