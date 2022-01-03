import React, { useEffect, useState } from 'react';
import './Home.css'

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <div>
            <h1>Post by users </h1>
            <div className='post-show'>
                {
                    posts.map(post => <div 
                    key={post._id}
                    className='post-details'>
                        <img src={`data:image/png;base64,${post.image}`} alt="" />
                        <h3> {post.title} </h3>
                        <p>{post.des} </p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Home;