import { Card, Typography } from 'antd'
const { Paragraph, Text } = Typography

import c from './postCard.module.scss'

const PostCard = (props) => {
    const {
        title,
        body,
        ellipsis = { rows: 7, expandable: true, symbol: 'more' },
    } = props

    return (
        <Card title={title} bordered={false} className={c.customCard}>
            <Paragraph ellipsis={ellipsis}>{body}</Paragraph>
        </Card>
    )
}
export default PostCard
