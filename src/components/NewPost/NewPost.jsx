import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost({ cancelHandler, onPostAdded }) {

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

    const submitHandler = (e) => {
        e.preventDefault();
        
        const postData = {
            title: title,
            body: body,
            author: author
        }

        console.log('postData', postData);   

        if (onPostAdded) {
            onPostAdded(postData);
        }

        cancelHandler();
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" required onChange={titleHandler} />
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={authorHandler} />
            </p>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={bodyHandler} />
            </p>

            <div className={classes.actions}>
                <button onClick={cancelHandler} id='Cancel' type='button'>Cancel</button>
                <button>Create it</button>
            </div>
        </form>
    );
}

export default NewPost;