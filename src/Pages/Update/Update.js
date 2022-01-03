import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Update = () => {
    const {user} = useAuth();
    const [posts, setPosts] = useState([]);
    
    useEffect(()=>{
        const url = `http://localhost:5000/posts/email?email=${user?.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])

    return (
        <div>
            <h1>Your Post</h1>
            <div className='post-show'>
                {
                    posts.map(post => <div 
                    key={post._id}
                    className='post-details'>
                        <img src={`data:image/png;base64,${post.image}`} alt="" />
                        <h3> {post.title} </h3>
                        <p>{post.des} </p>
                        <Link to={`/updatepost/${post._id}`}><button>Update</button></Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Update;