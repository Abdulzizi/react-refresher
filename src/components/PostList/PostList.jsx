import { useState } from "react";
import NewPost from "../NewPost/NewPost";
import Post from "../Post/Post";
import classes from "./PostList.module.css";
import Modal from "../Modal/Modal";

function PostList() {
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const changeAuthorHandler = (event) => {
        setAuthor(event.target.value);
    };

    const changeBodyHandler = (event) => {
        // console.log('Previous body:', body);
        setBody(event.target.value);
        // console.log('Updated body:', event.target.value);
    };

    const toggleModalHandler = () => {
        setIsModalOpen((prevState) => {
            if (!prevState) {
                return !prevState;
            }

            resetStateHandler();
            return !prevState;
        });
    };

    const resetStateHandler = () => {
        setBody('');
        setAuthor('');
    };

    return (
        <>
            {isModalOpen && (
                <Modal onClose={toggleModalHandler}>
                    <NewPost onBodyChange={changeBodyHandler} onAuthorChange={changeAuthorHandler} onCancel={toggleModalHandler} />
                </Modal>
            )}
            <button onClick={toggleModalHandler}>New Post</button>
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