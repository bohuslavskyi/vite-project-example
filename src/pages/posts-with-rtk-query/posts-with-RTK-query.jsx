import { useGetPostsQuery } from '../../app/services/postsApi/postsApi.js'
import { Typography } from 'antd'

import Loading from '../../widgets/loading/loading.jsx'
import PostCard from '../../components/postCard/postCard.jsx'
import c from '../posts-with-lazy-pagination/post-with-lazy.module.scss'

const PostsRTKQuery = () => {
    const { data = {}, isLoading } = useGetPostsQuery()
    const { posts = [] } = data

    const { Text } = Typography

    if (isLoading) return <Loading fontSize="60px" />

    return (
        <div className={c.postCardsWrap}>
            {posts?.map((post) => (
                <PostCard title={post.title} body={post.body} />
            ))}
        </div>
    )
}

export default PostsRTKQuery
