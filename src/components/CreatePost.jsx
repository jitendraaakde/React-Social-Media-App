import { useContext, useRef } from "react"
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
    const { addPost } = useContext(PostList)
    const userIdElement = useRef();
    const postTitleElement = useRef();
    const postBodyElement = useRef();
    const reactionsElement = useRef();
    const tagsElement = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const userId = userIdElement.current.value;
        const postTitle = postTitleElement.current.value;
        const postBody = postBodyElement.current.value
        const reactions = reactionsElement.current.value;
        const tags = tagsElement.current.value.split(" ")
        userIdElement.current.value = "";
        postTitleElement.current.value = "";
        postBodyElement.current.value = "";
        reactionsElement.current.value = "";
        tagsElement.current.value = "";
        addPost(userId, postTitle, postBody, reactions, tags)
    }

    return <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="userId" className="form-label">Your User Id</label>
            <input type="text" ref={userIdElement} placeholder="Write User ID" className="form-control" id="userId" />
        </div>

        <div className="mb-3">
            <label htmlFor="title" className="form-label">Post Title</label>
            <input type="text" ref={postTitleElement} placeholder="How are you feeling Today!!" className="form-control" id="title" />
        </div>

        <div className="mb-3">
            <label htmlFor="body" className="form-label">Post Content </label>
            <textarea type="text" ref={postBodyElement} rows={4} placeholder="Tell us about more" className="form-control" id="body" />
        </div>

        <div className="mb-3">
            <label htmlFor="reactions" className="form-label">Post reactions </label>
            <input type="text" ref={reactionsElement} placeholder="Numbe of reactions" className="form-control" id="reactions" />
        </div>

        <div className="mb-3">
            <label htmlFor="tags" className="form-label">Post Tags</label>
            <input type="text" ref={tagsElement} placeholder="Please Enter yout hashTags using space" className="form-control" id="tags" />
        </div>

        <button type="submit" className="btn btn-primary">Post</button>
    </form>
}
export default CreatePost
