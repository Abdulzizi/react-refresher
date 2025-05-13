import classes from './NewPost.module.css';

import { useState } from "react";

function NewPost({ onCancel, onAddPost }) {
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const [title, setTitle] = useState('');

    const changeAuthorHandler = (event) => {
        setAuthor(event.target.value);
    };

    const changeBodyHandler = (event) => {
        // console.log('Previous body:', body);
        setBody(event.target.value);
        // console.log('Updated body:', event.target.value);
    };

    const changeTitleHandler = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const post = {
            title,
            author,
            body,
        };

        onAddPost(post);
        onCancel();
    }
    return (

        <form className={classes.form} onSubmit={handleSubmit}>
            <p>
                <label htmlFor="name">Title</label>
                <input type="text" id="title" required onChange={changeTitleHandler} />
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={changeAuthorHandler} />
            </p>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={changeBodyHandler} />
            </p>

            <div className={classes.actions}>
                <button type='button' onClick={onCancel}>Exit</button>
                <button>Create</button>
            </div>
        </form>
    );
}

export default NewPost;