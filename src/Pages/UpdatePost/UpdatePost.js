import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdatePost = () => {
    const { id } = useParams();
    const [post, setPost] = useState();
    const navigate = useNavigate()

    useEffect(() => {
        const url = `http://localhost:5000/post/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    const handleTitle = e =>{
        const updateTitle = e.target.value;
        const updatePost = {title: updateTitle, des: post.des}
        setPost(updatePost)
    }
    const handleDes = e =>{
        const updateDes = e.target.value;
        const updatePost = {title: post.title, des: updateDes}
        setPost(updatePost)
    }
    const handlefile = e =>{
        const updateFile = e.target.files[0];
        const updatePost = {title: post.title, des: post.des, image: updateFile}
        setPost(updatePost);
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append('title', post.title)
        formData.append('des', post.des)
        formData.append('image', post.image)
        const url = `http://localhost:5000/posts/${id}`
        fetch(url, {
            method: 'PUT',
            body: formData
        })
        .then(res =>res.json())
        .then(data =>{
            if(data.modifiedCount >0 ){
                alert('Updated Successfully')
            }
        })
        navigate('/update')
    }
    return (

        <div className='post-section'>
            <form className='input-filed' onSubmit={handleUpdate}>
                <h2>Update your post</h2>
                <label htmlFor=""> Post Title</label> <br />
                <input type="text"
                    name="title"
                    required
                    value={`${post?.title || ''}`}
                    onChange={handleTitle}
                /> <br />
                <label htmlFor="">Post Description</label> <br />
                <textarea
                    name="description"
                    cols="30"
                    rows="10"
                    required
                    value={`${post?.des || ''}`}
                    onChange={handleDes}
                >
                </textarea>
                <br />
                <label htmlFor="">Upload feature image</label>
                <input
                    type="file"
                    name='image'
                    onChange={handlefile}
                /> <br />

                <button type='submit'>Update Post</button>
            </form>
        </div>

    );
};

export default UpdatePost;