import classes from "./Post.module.css";

function Post({ title, body, author }) {
  return (
    <>
      <div className={classes.post}>
        <h1>{title}</h1>
        <p>{body}</p>
        <p className={classes.author}>Written by {author}</p>
      </div>
    </>
  );
}

export default Post;
