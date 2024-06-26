import React, { useState } from 'react';
import { createPost } from '../api';

const PostForm = () => {
  const [formData, setFormData] = useState({
    post_type: '',
    content: '',
    number: '',
    image_url: '',
    video_url: '',
    likes: '0',
    shares: '0'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await createPost(formData);
    if (data) {
      console.log('Post created successfully:', data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="post_type" placeholder="Post Type" onChange={handleChange} required />
      <textarea name="content" placeholder="Content" onChange={handleChange} required />
      <input type="text" name="number" placeholder="Number" onChange={handleChange} required />
      <input type="text" name="image_url" placeholder="Image URL" onChange={handleChange} required />
      <input type="text" name="video_url" placeholder="Video URL" onChange={handleChange} required />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default PostForm;
