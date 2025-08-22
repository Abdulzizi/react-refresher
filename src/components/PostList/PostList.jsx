import NewPost from '../NewPost/NewPost';
import Post from '../Post/Post';
import classes from "./PostList.module.css";
import Modal from '../Modal/Modal';
import { useState } from 'react';

function PostList({isModalOpen, modalHandler }) {
    const [posts, setPosts] = useState([]);

    const addPostHandler = (post) => {
        setPosts((prevPosts) => [...prevPosts, post]);
    }

    return (
        <>
            {isModalOpen && (
                <Modal onModalClick={modalHandler} >
                    <NewPost onPostAdded={addPostHandler} cancelHandler={modalHandler} />
                </Modal>
            )}
            {posts.length > 0 ? (
                <ul className={classes.postList}>
                    {
                        posts.map((post, index) => (
                            <Post
                                key={index}
                                title={post.title}
                                body={post.body}
                                author={post.author}
                            />
                        ))
                    }
                </ul>
            ) : (
                <p className={classes.noPosts}>No posts yet! Create one!</p>
            )}
        </>
    )
}

export default PostList;