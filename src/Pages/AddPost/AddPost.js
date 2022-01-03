import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import useAuth from '../Hooks/useAuth';
import './addpost.css'

const AddPost = () => {
    const { user } = useAuth();
    const [title, setTitle] = useState('');
    const [des, setDes] = useState('')
    const [image, setImage] = useState()
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!image) {
            return
        }
        const formData = new FormData();

        formData.append('title', title)
        formData.append('des', des)
        formData.append('image', image)
        formData.append('email', user?.email)

        fetch('http://localhost:5000/posts', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully add your post')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
            navigate('/home')
    }


    return (
        <div className='post-section'>
            <form className='input-filed' onSubmit={handleSubmit}>
                <h2>Add your post here</h2>
                <label htmlFor=""> Post Title</label> <br />
                <input type="text"
                    name="title"
                    required
                    onBlur={e => setTitle(e.target.value)}
                    placeholder='Post Title'
                /> <br />
                <label htmlFor="">Post Description</label> <br />
                <textarea
                    name="description"
                    cols="30"
                    rows="10"
                    required
                    onBlur={e => setDes(e.target.value)}
                >
                </textarea>
                <br />
                <label htmlFor="">Upload feature image</label>
                <input
                    type="file"
                    onBlur={e => setImage(e.target.files[0])}
                /> <br />

                <button type='submit'>Add Post</button>
            </form>
        </div>
    );
};

export default AddPost;