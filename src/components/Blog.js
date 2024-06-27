import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebaseConfig';

const PostsComponent = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsRef = ref(db, 'blog');
      onValue(postsRef, (snapshot) => {
        const postData = snapshot.val();
        if (postData) {
          const postArray = Object.keys(postData).map((key) => ({ id: key, ...postData[key] }));
          setPosts(postArray);
        }
      });
    };

    fetchPosts();
  }, []);

  // Calcola l'indice del primo post sulla pagina corrente
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Cambia pagina
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div class="projcard-container">
      {currentPosts.map((post) => (
        <div class="projcard projcard-blue" key={post.id}>
        <div class="projcard-innerbox">
            <img class="projcard-img" src={post.img} alt={post.title} />
            <div class="projcard-textbox">
                <div class="projcard-title">{post.title}</div>
                <div class="projcard-bar"></div>
                <div class="projcard-description">{post.text}</div>
            </div>
        </div>
    </div>
      ))}
      <div className="pagination">
        {Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, i) => (
          <button key={i + 1} onClick={() => paginate(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PostsComponent;

