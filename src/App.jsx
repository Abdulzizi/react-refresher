import { useState } from 'react';
import MainHeader from './components/MainHeader/MainHeader';
import PostList from './components/PostList/PostList';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalHandler = () => {
    setIsModalOpen(!isModalOpen);
  }

  const createPost = () => {
    setIsModalOpen(true);
  }
  
  return (
    <div className="App">
        <MainHeader onCreatePost={createPost} />
      <main>
        <PostList isModalOpen={isModalOpen} modalHandler={modalHandler} />
      </main>
    </div>
  );
}

export default App;
