import { useContext, useEffect, useState } from "react"
import { PostList as PostListData } from "../store/post-list-store"
import Post from "./Post"
import ErrorMessage from "./ErrorMessage"
import LoadingSpinner from "./LoadingSpinner"

const PostList = () => {
    const { postList, addInitialPosts } = useContext(PostListData)
    const [fetching, setFetching] = useState(false)
    useEffect(() => {
        setFetching(true)
        const contoroller = new AbortController();
        const signal = contoroller.signal;

        fetch('https://dummyjson.com/posts', { signal })
            .then(res => res.json())
            .then(data => {
                addInitialPosts(data.posts)
                setFetching(false)
            })
        return () => {
            console.log("cleaning Up started")
            contoroller.abort()
        }
    }, [])

    return <>
        {fetching && <LoadingSpinner />}
        {!fetching && postList.length === 0 && < ErrorMessage />}
        {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>

}
export default PostList