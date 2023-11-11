import {useGetPostsQuery} from "../../app/services/postsApi/postsApi.js";

const Posts = () => {
    const {data = {}, isLoading} = useGetPostsQuery();

    const {posts = []} = data

    if(isLoading) return <p>Loading...</p>

    return (
        posts?.map(post => (
            <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        ))
    )
}

export default Posts