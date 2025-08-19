import { useState, useEffect } from "react";
import NewPost from "../NewPost/NewPost";
import Post from "../Post/Post";
import classes from "./PostList.module.css";
import Modal from "../Modal/Modal";

function PostList({ isPosting, onStopPosting }) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            setLoading(true);
            try {
                const res = await fetch('http://localhost:8080/posts');
                const data = await res.json();
                setPosts(data.posts);
            } catch (error) {
                console.error("Failed to fetch posts", error);
            } finally {
                setLoading(false);
            }
        }

        fetchPosts();
    }, []);



    const handleAddPost = (post) => {
        // console.log("This is from postlist", post);
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            }
        });


        setPosts((existingPost) => [...existingPost, post]);
    }

    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost onCancel={onStopPosting} onAddPost={handleAddPost} />
                </Modal>
            )}

            {loading && <p style={{ textAlign: "center" }}>Loading...</p>}

            {!loading && posts.length === 0 && (
                <div className={classes.noPosts_container}>
                    <p className={classes.noPosts}>There is no posts.</p>
                </div>
            )}

            {!loading && posts.length > 0 && (
                <ul className={classes.postList}>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <Post title={post.title} body={post.body} author={post.author} />
                        </li>
                    ))}
                </ul>
            )}

        </>
    );
}

export default PostList;