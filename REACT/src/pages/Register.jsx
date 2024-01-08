import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [userData, setUserData] = useState({
    username: '',
    website: '',
    password_verify: '',
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    
  };
  const ContinueDetails=(username,password,password_verify)=>{
    // if(!(username&&password)&&(password===password_verify)){
      navigate('/EndOfRegistration')
    // }
  }
 
  return (
    
    <div className="registerDiv">
    <h1>🌈 Join FriendsHub Today!</h1><br></br>
      <form className="registerForm">
        <div>
          <input
            placeholder="username"
            type="text"
            name="username"
            value={userData.username}
            onChange={handleChange}
          />
        </div><br></br>
      
        <div>
          <input
          placeholder="password"
            type="password"
            name="website"
            value={userData.website}
            onChange={handleChange}
          />
        </div><br></br>
        <div>
          <input
          placeholder="password verify"
            type="password"
            name="website_verify"
            // value={userData.password_verify} עובד רק אם זה ירוק משום מהה
            onChange={handleChange}
          />
        </div><br></br>
        <button type="button" onClick={() => ContinueDetails(userData.username, userData.password,userData.password_verify)}> 
          Continue filling in details
        </button>
      </form>
    </div>
  );
};

export default Register;



//מיכל
// import React, { useState, useEffect  } from 'react';
// import { Link } from 'react-router-dom';

// const Register = () => {

//   const USERS_API_URL = "http://localhost:3000/users";

//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [website_verify, setwebsite_verify] = useState('');
    
//     const [user, setUser] = useState([]);
//     const [fetchError, setFetchError] = useState(null);
//     const [isLogged, setIsLogged] = useState(false);


//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const response = await fetch(USERS_API_URL);
//                 if (!response.ok) throw Error('Did not receive expected data');
//                 const usersList = await response.json();
//                 setUser(usersList);
//                 setFetchError(null);
//             } catch (err) {
//                 setFetchError(err.message);
//             }
//         };

//         fetchUsers();
//     }, []);

//     const handleLogin = (username, password) => {
//         const foundUser = user.find(u => u.username === username && u.website === password);

//         if (foundUser) {
//             // Successful login
//             alert(`Login successful! Welcome back ${foundUser.name}😎`);

//             // Store the user in local storage
//             localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
//             setIsLogged(true);
//         } else {
//             // Failed login
//             alert("Login failed. You are not in the system.");          
//         }
//     };
//   return (
//     <div className='loginDiv'>
//             <h1>Register</h1><br></br>
//             <form className='loginForm'>
//                 <div>
//                     <input
//                     placeholder='username'
//                         type="text"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                     />
//                 </div><br></br>
//                 <div>
//                     <input
//                     placeholder='password'
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </div><br></br>
//                 <div>
//                     <input
//                     placeholder='website_verify'
//                         type="password"
//                         value={website_verify}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </div><br></br>

//             </form>
//         </div>
//   );
// };

// export default Register;