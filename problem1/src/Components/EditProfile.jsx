import React, { useState } from 'react';

const EditProfile = ({ name, email, bio, onSave }) => {
  const [formData, setFormData] = useState({ name, email, bio });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Bio:
          <textarea name="bio" value={formData.bio} onChange={handleChange} />
        </label>
        <button type="button" onClick={handleSave}>Save</button>
      </form>
    </div>
  );
};

export default EditProfile;
