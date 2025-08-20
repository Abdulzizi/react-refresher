import { useState } from 'react';
import NewPost from '../NewPost/NewPost';
import Post from '../Post/Post';
import classes from "./PostList.module.css";
import Modal from '../Modal/Modal';

function PostList({isModalOpen, modalHandler }) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    
    const titleHandler = (e) => {
        setTitle(e.target.value);
    }

    const bodyHandler = (e) => {
        setBody(e.target.value);
    }

    const authorHandler = (e) => {
        setAuthor(e.target.value);
    }

    return (
        <>
            {isModalOpen && (
                <Modal onModalClick={modalHandler} >
                    <NewPost onTitleChange={titleHandler} onBodyChange={bodyHandler} onAuthorChange={authorHandler} />
                </Modal>
            )}
            <ul className={classes.postList}>
                <Post title={title} body={body} author={author} />
                <Post title="Test Title 2" body="Ini adalah body text 2" author="Ahmad meredi" />
            </ul>
        </>
    )
}

export default PostList;