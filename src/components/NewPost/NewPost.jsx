import classes from './NewPost.module.css';

function NewPost({onTitleChange, onBodyChange, onAuthorChange}) {

    return (
        <form className={classes.form}>
            <p>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" required onChange={onTitleChange} />
                {/* <p>{title}</p> */}
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={onAuthorChange} />
            </p>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={onBodyChange} />
            </p>

            <div className={classes.actions}>
                <button>Create it</button>
            </div>
        </form>
    );
}

export default NewPost;