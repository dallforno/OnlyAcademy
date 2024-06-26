import React, { useState } from 'react';
import { createProfile } from '../api';

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    bio: '',
    location: '',
    birthdate: '',
    profile_picture: '',
    cover_photo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await createProfile(formData);
    if (data) {
      console.log('Profile created successfully:', data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="first_name" placeholder="First Name" onChange={handleChange} required />
      <input type="text" name="last_name" placeholder="Last Name" onChange={handleChange} required />
      <textarea name="bio" placeholder="Bio" onChange={handleChange} required />
      <input type="text" name="location" placeholder="Location" onChange={handleChange} required />
      <input type="date" name="birthdate" onChange={handleChange} required />
      <input type="text" name="profile_picture" placeholder="Profile Picture URL" onChange={handleChange} required />
      <input type="text" name="cover_photo" placeholder="Cover Photo URL" onChange={handleChange} required />
      <button type="submit">Create Profile</button>
    </form>
  );
};

export default ProfileForm;
