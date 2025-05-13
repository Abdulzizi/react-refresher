import { useState } from "react";
import NewPost from "../NewPost/NewPost";
import Post from "../Post/Post";
import classes from "./PostList.module.css";
import Modal from "../Modal/Modal";

function PostList({ isPosting, onStopPosting, body, author, setBody, setAuthor }) {
    const changeAuthorHandler = (event) => {
        setAuthor(event.target.value);
    };

    const changeBodyHandler = (event) => {
        // console.log('Previous body:', body);
        setBody(event.target.value);
        // console.log('Updated body:', event.target.value);
    };

    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost onBodyChange={changeBodyHandler} onAuthorChange={changeAuthorHandler} onCancel={onStopPosting} />
                </Modal>
            )}
            <ul className={classes.postList}>
                <li>
                    <Post title="Post 1" body={body} author={author} />
                </li>
                <li>
                    <Post title="Post 1" body="Ini adalah post 1" author="John Doe" />
                </li>
            </ul>
        </>
    );
}

export default PostList;