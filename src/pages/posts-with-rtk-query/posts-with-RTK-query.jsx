import { useGetPostsQuery } from '../../app/services/postsApi/postsApi.js'

import Loading from '../../widgets/loading/loading.jsx'
import PostCard from '../../components/postCard/postCard.jsx'
import c from '../posts-with-lazy-pagination/post-with-lazy.module.scss'

const PostsRTKQuery = () => {
    const { data = {}, isLoading } = useGetPostsQuery()
    const { posts = [] } = data

    if (isLoading) return <Loading fontSize="60px" />

    return (
        <div className={c.postCardsWrap}>
            {posts?.map((post) => (
                <PostCard key={post.id} title={post.title} body={post.body} />
            ))}
        </div>
    )
}

export default PostsRTKQuery
