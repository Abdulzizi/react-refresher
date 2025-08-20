import NewPost from '../NewPost/NewPost';
import Post from '../Post/Post';
import classes from "./PostList.module.css";

function PostList() {
    return (
        <>
            <NewPost />
            <ul className={classes.postList}>
                <Post title="Test Title 1" body="Ini adalah body text" author="Abdul Jawad" />
                <Post title="Test Title 2" body="Ini adalah body text 2" author="Ahmad meredi" />
            </ul>
        </>
    )
}

export default PostList;