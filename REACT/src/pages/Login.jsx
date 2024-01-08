import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const USERS_API_URL = "http://localhost:3000/users";
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();
  const [usersList, setUsersList] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(USERS_API_URL);
        if (!response.ok) throw new Error('Did not receive expected data');
        const users = await response.json();
        console.log(users);
        setUsersList(users);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      }
    };

    // Fetch users after 2 seconds
    setTimeout(() => {
      fetchUsers();
    }, 2000);
  }, []);

  function handleLogin(username, password) {
    const foundUser = usersList.find(u => u.username === username && u.website === password);
    if (foundUser) {
      // Successful login
      alert(`Login successful! Welcome back ${foundUser.name}😎`);

      // Store the user in local storage
      localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
      setLoginData({
        username: '',
        password: '',
      });

      navigate('/home')
      // You can redirect the user to another page or perform any other necessary actions here
    } else {
      // Failed login
      alert("Login failed. Invalid username or password.")
      // setLoginData({
      //   username: '',
      //   password: '',
      // });
      console.log("Login failed. Invalid username or password.");

      // You can display an error message to the user
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  return (

    <div className='loginDiv'>
      <h1>Login</h1><br></br>
      <form className='loginForm'>
        <div>
          <input
            placeholder='username'
            type="text"
            name="username"
            value={loginData.username}
            onChange={handleChange}
          />
        </div><br></br>
        <div>
          <input
            placeholder='password'
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
          />
        </div><br></br>
        <button type="button" onClick={() => handleLogin(loginData.username, loginData.password)}>
          Login
        </button>

      </form>
    </div>

  );
};

export default Login;



// import React, { useState, useEffect  } from 'react';
// import { Link } from 'react-router-dom';
// import Home from './Home';

// const Login = () => {
//     const USERS_API_URL = "http://localhost:3000/users";

//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
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

//     return (
//         <div className='loginDiv'>
//             <h1>Login</h1><br></br>
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
//                 <Link type='button' to='/' onClick={() => handleLogin(username, password)}>
//                     Login
//                 </Link>

//             </form>
//         </div>
//     );
// };

// export default Login;