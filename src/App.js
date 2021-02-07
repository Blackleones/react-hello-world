import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import PostList from './components/PostList';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const postsFromServer = await fetchData();
      setPosts(postsFromServer);
    }

    getPosts();
  }, [])

  const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return data;
  }

  return (
    <div className="App">
      <Header />
      <div className="p-3">
        <PostList posts={posts} />
      </div>
    </div>
  );
}

export default App;
