import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebaseConfig';
import Icon from './img/icon2.png'

function CardBlog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsRef = ref(db, 'blog');
    onValue(postsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Converti i dati in un array di post
        const postsArray = Object.keys(data).map(key => data[key]);
        // Ordina i post per data, dal più recente al meno recente
        postsArray.sort((a, b) => new Date(b.data) - new Date(a.data));
        // Imposta i primi tre post
        setPosts(postsArray.slice(0, 3));
      }
    });
  }, []);

  return (
    <div className="container">
      {posts.map((post, index) => (
        <div className="card" key={index}>
          <div className="card__header">
            <img src={post.img} alt="card__image" className="card__image" width="600" />
          </div>
          <div className="card__body">
            <h4>{post.title}</h4>
            <p>{post.text}</p>
          </div>
          <div className="card__footer">
            <div className="user">
              <img src={Icon} alt="user__image" className="user__image" />
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardBlog;
