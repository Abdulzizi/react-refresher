import MainHeader from './components/MainHeader/MainHeader';
import PostList from './components/PostList/PostList';

const names = ['Alice', 'Bob', 'Charlie'];
const body = ['This is my first post on my blog.', 'This is my second post on my blog.', 'This is my third post on my blog.'];
const titles = ['My First Post', 'My Second Post', 'My Third Post'];

const choosenRandomElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
}

const posts = Array.from({ length: 6 }, () => ({
  title: choosenRandomElement(titles),
  body: choosenRandomElement(body),
  author: choosenRandomElement(names)
}));

function App() {
  return (
    <div className="App">
        <MainHeader />
      <main>
        <PostList posts={posts} />
      </main>
    </div>
  );
}

export default App;
