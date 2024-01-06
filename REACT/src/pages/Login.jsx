// import React, { useState, useEffect } from 'react';

// const Login = () => {

//     const USERS_API_URL = "http://localhost:3000/users"

//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [loginData, setLoginData] = useState({});
//     const [usersList, setUsersList] = useState([]);
//     const [fetchError, setFetchError] = useState(null);
//     // const response = await fetch(USERS_API_URL);
//     // if (!response.ok) throw Error('Did not receive expected data');
//     // const usersList = await response.json();
//     // setUser(usersList);
//     // console.log(usersList)
//     // setFetchError(null);
//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 fetch(USERS_API_URL)
//                     .then(res => res.json())
//                     .then(users => {
//                         console.log(users);
//                         setUsersList(users)
//                     })
//             }
//             catch (err) {
//                 setFetchError(err.message);
//             }
//         }
//         setTimeout(() => fetchUsers(), 2000);
//     }, [] )

//     // useEffect(() => {

//     // fetch(USERS_API_URL)
//     // .then(res=>res.json())
//     // .then(users=>{
//     //   console.log(users);
//     //   setUsersList(users)
//     // })
//     //     setTimeout(() => fetchUsers(), 2000);

//     // }, []
//     // )

//     function handleLogin(username, password) {
//         const foundUser = usersList.find(u => u.username === username && u.website === password);

//         if (foundUser) {
//             // Successful login
//             alert("Login successful!");

//             // Store the user in local storage
//             localStorage.setItem('loggedInUser', JSON.stringify(foundUser));

//             // You can redirect the user to another page or perform any other necessary actions here
//         } else {
//             // Failed login
//             console.log("Login failed. Invalid username or password.");

//             // You can display an error message to the user
//         }
//     }


//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setLoginData({
//             ...loginData,
//             [name]: value,
//         });
//     };

//     return (
//         <div>
//             <h2>Login</h2>
//             <form>
//                 <div>
//                     <label>Username:</label>
//                     <input
//                         type="text"
//                         value={loginData.username}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input
//                         type="password"
//                         value={loginData.password}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <button type="button" onClick={() => handleLogin(loginData.username, loginData.password)}>
//                     Login
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Login;









import React, { useState, useEffect } from 'react';
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
      alert("Login successful!");

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
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={loginData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={() => handleLogin(loginData.username, loginData.password)}>
          Login
        </button>
      
      </form>
    </div>
  );
};

export default Login;