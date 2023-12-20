import { useGetPostsQuery } from '../../app/services/postsApi/postsApi.js'

import Loading from '../../widgets/loading/loading.jsx'
import PostCard from '../../components/post-card/postCard.jsx'
import c from '../posts-with-lazy-pagination/post-with-lazy.module.scss'
import CustomGridLayout from "../../widgets/custom-grid-layout/custom-grid-layout.jsx";

const PostsRTKQuery = () => {
    const { data = {}, isLoading } = useGetPostsQuery()
    const { posts = [] } = data

    if (isLoading) return <Loading fontSize="60px" />

    return (
        <CustomGridLayout>
        <div className={c.postCardsWrap}>
            {posts?.map((post) => (
                <PostCard key={post.id} title={post.title} body={post.body} />
            ))}
        </div>
        </CustomGridLayout>
    )
}

export default PostsRTKQuery
