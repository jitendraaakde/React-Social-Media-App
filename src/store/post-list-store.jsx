import { useReducer } from "react";
import { createContext } from "react";



const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { }
})
const postListReducer = (currPostList, action) => {
    return currPostList
}

const PostListProvider = ({ children }) => {


    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST)
    const addPost = () => { }
    const deletePost = () => { }

    return <PostList.Provider value={{
        postList, addPost, deletePost
    }}>
        {children}
    </PostList.Provider>
}
const DEFAULT_POST_LIST = [{
    id: '1',
    title: "Going to mumbai guys",
    body: 'Hope i will enjoy a lot',
    reactions: 3,
    userId: 'user-9',
    tags: ['vacation', 'enjoy', 'summer']
}, {
    id: '2',
    title: "Graduate Yeah !!!",
    body: 'Hope i will enjoy a lot',
    reactions: 3,
    userId: 'user-9',
    tags: ['vacation', 'enjoy', 'summer']
}
]

export default PostListProvider