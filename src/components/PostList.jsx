import { useContext, useState } from "react"
import { PostList as PostListData } from "../store/post-list-store"
import Post from "./Post"
import ErrorMessage from "./ErrorMessage"

const PostList = () => {
    const { postList, addInitialPosts } = useContext(PostListData)
    const [fetchedData, setFetchedData] = useState(false)
    if (!fetchedData) {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data => addInitialPosts(data.posts));
        setFetchedData(true)
    }


    return <>
        {postList.length === 0 && < ErrorMessage />}
        {postList.map((post) => <Post key={post.id} post={post} />)}
    </>

}
export default PostList