import PostList from "./components/PostList/PostList";
import MainHeader from "./components/MainHeader/MainHeader";

import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');

  const toggleModalHandler = () => {
    setIsModalOpen((prevState) => {
      if (!prevState) {
        return !prevState;
      }

      resetStateHandler();
      return !prevState;
    });
  };

  const resetStateHandler = () => {
    setBody('');
    setAuthor('');
  };

  return (
    <>
      <MainHeader onCreatePost={toggleModalHandler} />
      <main>
        <PostList
          isPosting={isModalOpen}
          onStopPosting={toggleModalHandler}
          body={body}
          author={author}
          setBody={setBody}
          setAuthor={setAuthor}
        />
      </main>
    </>
  );
}

export default App;
