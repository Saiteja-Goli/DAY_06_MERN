import React, { useState } from 'react';
import EditProfile from './Components/EditProfile';
import UserProfile from './Components/UserProfile';

const App = () => {
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  });

  const toggleMode = () => {
    setEditMode(prevMode => !prevMode);
  };

  const handleSave = (newUserData) => {
    setUserData(newUserData);
    setEditMode(false);
  };

  return (
    <div>
      <button onClick={toggleMode}>{editMode ? 'View Mode' : 'Edit Mode'}</button>
      {editMode ? (
        <EditProfile {...userData} onSave={handleSave} />
      ) : (
        <UserProfile {...userData} />
      )}
    </div>
  );
};

export default App;
