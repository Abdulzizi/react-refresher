import MainHeader from './components/MainHeader/MainHeader';
import Post from './components/Post/Post';

function App() {
  return (
    <div className="App">
        <MainHeader />
      <main>
        <Post title="My First Post" body="This is my first post on my blog." author="John Doe" />
      </main>
    </div>
  );
}

export default App;
