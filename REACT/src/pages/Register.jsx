import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
  const [userData, setUserData] = useState({
    username: '',
    website: '',
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    
  };
  const gkhj=(username,password)=>{
    if(username&&password){return}
      navigate('/EndOfRegistration')
    
  }
 
  return (
    <div>
      <h2>Add User</h2>
      <form>
      
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleChange}
          />
        </div>
      
        {/* Website */}
        <div>
          <label>password:</label>
          <input
            type="text"
            name="website"
            value={userData.website}
            onChange={handleChange}
          />
        </div>
        
        <button type="button" onClick={() => gkhj(userData.username, userData.password)}> {/* צריך להפעיל את הקומפוננטה של המשך מילוי הפרטים ולשלוח לה את השם משתמש והסיסמה */}
          Continue filling in details
        </button>
      </form>
    </div>
  );
};

export default AddUser;