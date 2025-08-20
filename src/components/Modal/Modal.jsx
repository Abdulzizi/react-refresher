import classes from './Modal.module.css';

function Modal({ children, onModalClick }) {
    return(
        <>
            <div className={classes.backdrop} onClick={onModalClick} />
            <dialog open className={classes.modal}>
                {children}
            </dialog>
        </>
    )
}

export default Modal;