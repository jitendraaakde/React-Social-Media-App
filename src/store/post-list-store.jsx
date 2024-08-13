import { useReducer } from "react";
import { createContext } from "react";
export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { },
    addInitialPosts: () => { }

})
const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if (action.type === "DELETE_POST") {
        newPostList = currPostList.filter((post) => post.id !== action.payload.postId)
    } else if (action.type === "ADD_POST") {
        newPostList = [action.payload, ...currPostList]
    }
    else if (action.type === "ADD_INITIAL_POSTS") {
        newPostList = action.payload.posts;
    }
    return newPostList
}

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, [])
    const addPost = (userId, postTitle, postBody, reactions, tags) => {
        dispatchPostList({
            type: "ADD_POST",
            payload: {
                id: Date.now(),
                title: postTitle,
                body: postBody,
                reactions: reactions,
                userId: userId,
                tags: tags
            }
        })

    }

    const addInitialPosts = (posts) => {
        dispatchPostList({
            type: "ADD_INITIAL_POSTS",
            payload: {
                posts,
            }
        })

    }
    const deletePost = (postId) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                postId,
            }
        })
    }

    return <PostList.Provider value={{
        postList, addPost, deletePost, addInitialPosts
    }}>
        {children}
    </PostList.Provider>
}
// const DEFAULT_POST_LIST = [{
//     id: '1',
//     title: "Going to Mumbai guys",
//     body: 'Hope I will enjoy a lot while exploring the vibrant culture, delicious street food, and iconic landmarks of Mumbai. Looking forward to a memorable adventure with amazing experiences.',
//     reactions: 3,
//     userId: 'user-9',
//     tags: ['vacation', 'enjoy', 'summer']
// }, {
//     id: '2',
//     title: "Graduate Yeah !!!",
//     body: 'Hope I will enjoy a lot as I celebrate this major milestone in my life. Graduating feels incredible, and I’m thrilled about the future opportunities and the new journey ahead.',
//     reactions: 3,
//     userId: 'user-9',
//     tags: ['vacation', 'enjoy', 'summer']
// }, {
//     id: '3',
//     title: "Excited for New Job!",
//     body: 'Can’t wait to start my new position next month. I’m excited about the challenges and opportunities that lie ahead, and I’m looking forward to growing professionally in this new role.',
//     reactions: 12,
//     userId: 'user-12',
//     tags: ['career', 'excited', 'newbeginnings']
// }, {
//     id: '4',
//     title: "Summer BBQ Party",
//     body: 'Planning a big BBQ party this weekend. We’ll have delicious food, great music, and plenty of fun. Can’t wait to catch up with friends and make some unforgettable memories together.',
//     reactions: 7,
//     userId: 'user-15',
//     tags: ['party', 'summer', 'food']
// }];


export default PostListProvider