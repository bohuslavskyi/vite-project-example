import { useCallback, useRef, useState } from 'react'
import { Space } from 'antd'

import Loading from '../../widgets/loading/loading.jsx'
import { useScroll } from '../../hooks/useScroll.js'
import SearchInput from '../../widgets/input/search-input.jsx'
import PostCard from '../../components/post-card/postCard.jsx'
import CustomGridLayout from '../../widgets/custom-grid-layout/custom-grid-layout.jsx'

import c from './post-with-lazy.module.scss'

const PostsLazyPagination = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    const [data, setData] = useState({})
    const [dataSearch, setDataSearch] = useState({})

    const isDataAll = !dataSearch.posts
    const { posts = [], total } = isDataAll ? data : dataSearch

    const scrollRef = useRef(null)
    const observableRef = useRef(null)

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
        <div className={c.postsLazyPaginationWrap} ref={scrollRef}>
            <CustomGridLayout>
                <br />
                <Space
                    direction="vertical"
                    size="middle"
                    style={{
                        display: 'flex',
                    }}
                >
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

                    <div className={c.postCardsWrap}>
                        {posts?.map((post) => (
                            <PostCard
                                key={post.id}
                                title={post.title}
                                body={post.body}
                            />
                        ))}
                    </div>
                </Space>

                <div
                    ref={observableRef}
                    style={{ height: 50 }}
                >
                    {isLoading && <Loading fontSize="20px" />}
                </div>
            </CustomGridLayout>
        </div>
    )
}

export default PostsLazyPagination
