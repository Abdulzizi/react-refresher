import Post from '../Post/Post';
import classes from "./PostList.module.css";

function PostList({posts}) {
    return (
        <ul className={classes.postList}> 
            {posts.map((post, index) => (
                <Post 
                    key={index} 
                    title={post.title}
                    body={post.body}
                    author={post.author}
                />
            ))}
        </ul>
    )
}

export default PostList;