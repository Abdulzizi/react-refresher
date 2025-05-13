import PostList from "./components/PostList/PostList";
import MainHeader from "./components/MainHeader/MainHeader";

import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const toggleModalHandler = () => {
    setIsModalOpen((prevState) => {
      if (!prevState) {
        return !prevState;
      }

      return !prevState;
    });
  };


  return (
    <>
      <MainHeader onCreatePost={toggleModalHandler} />
      <main>
        <PostList
          isPosting={isModalOpen}
          onStopPosting={toggleModalHandler}
        />
      </main>
    </>
  );
}

export default App;
