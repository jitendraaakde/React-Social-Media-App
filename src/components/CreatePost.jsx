import { useContext, useRef } from "react"
import { PostList } from "../store/post-list-store";
import { Form, redirect, useNavigate } from "react-router-dom";

const CreatePost = () => {


    return <Form method="POST" className="create-post" >
        <div className="mb-3">
            <label htmlFor="userId" className="form-label">Your User Id</label>
            <input type="text" name="userId" placeholder="Write User ID" className="form-control" id="userId" />
        </div>

        <div className="mb-3">
            <label htmlFor="title" name='userId' className="form-label">Post Title</label>
            <input type="text" name='title' placeholder="How are you feeling Today!!" className="form-control" id="title" />
        </div>

        <div className="mb-3">
            <label htmlFor="body" className="form-label">Post Content </label>
            <textarea type="text" name='body' rows={4} placeholder="Tell us about more" className="form-control" id="body" />
        </div>

        <div className="mb-3">
            <label htmlFor="reactions" className="form-label">Post reactions </label>
            <input type="text" name='reactions' placeholder="Numbe of reactions" className="form-control" id="reactions" />
        </div>

        <div className="mb-3">
            <label htmlFor="tags" className="form-label">Post Tags</label>
            <input type="text" name='tags' placeholder="Please Enter yout hashTags using space" className="form-control" id="tags" />
        </div>

        <button type="submit" className="btn btn-primary">Post</button>
    </Form>
}

export async function createPostAction(data) {
    const formData = await data.request.formData();
    const postData = Object.fromEntries(formData)
    postData.tags = postData.tags.split(' ')
    console.log(postData)

    fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then((post) => console.log(post));

    return redirect('/')
}
export default CreatePost
