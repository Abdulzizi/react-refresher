import { useState } from "react";
import NewPost from "../NewPost/NewPost";
import Post from "../Post/Post";
import classes from "./PostList.module.css";
import Modal from "../Modal/Modal";



function PostList({ isPosting, onStopPosting }) {

    const [posts, setPosts] = useState([]);

    const handleAddPost = (post) => {
        console.log("This is from postlist", post);
        setPosts((existingPost) => [...existingPost, post]);
    }

    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost onCancel={onStopPosting} onAddPost={handleAddPost} />
                </Modal>
            )}
            {!posts.length && <div className={classes.noPosts_container}>
                <p className={classes.noPosts}>There is no posts.</p>
            </div>}

            <ul className={classes.postList}>
                {
                    posts.map((post, index) => {
                        return (
                            <li>
                                <Post key={index} title={post.title} body={post.body} author={post.author} />
                            </li>
                        )
                    })
                }
            </ul>
        </>
    );
}

export default PostList;