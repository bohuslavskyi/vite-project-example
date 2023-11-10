import { useCallback, useContext, useRef, useState } from 'react'
import { Typography } from 'antd'

import { LayoutContext } from '../../components/layout/layout.jsx'
import Loading from '../../widgets/loading/loading.jsx'
import { useScroll } from '../../hooks/useScroll.js'
import SearchInput from '../../components/input/searchInput.jsx'

const PostsLazyPagination = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    const [data, setData] = useState({})
    const [dataSearch, setDataSearch] = useState({})

    const isDataAll = !dataSearch.posts
    const { posts = [], total } = isDataAll ? data : dataSearch

    const observableRef = useRef(null)
    const scrollRef = useContext(LayoutContext)

    const { Text } = Typography

    const getPosts = useCallback(() => {
        if (!isDataAll || isLoading || (total && posts.length === total)) return
        setIsLoading(true)
        fetch(`https://dummyjson.com/posts?limit=30&skip=${posts.length}`)
            .then((res) => res.json())
            .then((data) => {
                setData({ posts: [...posts, ...data.posts], total: data.total })
                setIsLoading(false)
            })
    }, [posts, total])

    const search = useCallback(
        (searchVal) => {
            if (searchVal.length === 0) {
                setDataSearch({})
                return
            }
            setIsLoading(true)
            fetch(`https://dummyjson.com/posts/search?q=${searchVal}`)
                .then((res) => res.json())
                .then((data) => {
                    setDataSearch({
                        posts: data.posts,
                        total: data.posts.length,
                    })
                    setIsLoading(false)
                })
        },
        [searchValue],
    )

    const intersected = useScroll(scrollRef, observableRef, getPosts)

    if (isLoading && !posts.length)
        return (
            <div ref={observableRef}>
                {isLoading && <Loading fontSize="60px" />}
            </div>
        )

    return (
        <>
            <br />

            <SearchInput
                loading={isLoading}
                debounceDelay={400}
                placeholder="Search"
                allowClear={true}
                onChange={search}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            {posts?.map((post) => (
                <div key={post.id}>
                    <h2>
                        <Text>{post.title}</Text>
                    </h2>
                    <p>
                        <Text>{post.body}</Text>
                    </p>
                </div>
            ))}

            <div ref={observableRef} style={{ height: 50 }}>
                {isLoading && <Loading fontSize="20px" />}
            </div>
        </>
    )
}

export default PostsLazyPagination
