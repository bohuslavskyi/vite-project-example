import { useGetPostsQuery } from '../../app/services/postsApi/postsApi.js'
import { Typography } from 'antd'

import Loading from '../../widgets/loading/loading.jsx'

const PostsRTKQuery = () => {
    const { data = {}, isLoading } = useGetPostsQuery()
    const { posts = [] } = data

    const { Text } = Typography

    if (isLoading) return <Loading fontSize="60px" />

    return posts?.map((post) => (
        <div key={post.id}>
            <h2>
                <Text>{post.title}</Text>
            </h2>
            <p>
                <Text>{post.body}</Text>
            </p>
        </div>
    ))
}

export default PostsRTKQuery
