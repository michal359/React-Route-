import React from 'react'

function EndOfRegistration(username,password) {
    const [userData, setUserData] = useState({
        id: null, // The server will automatically assign an id
        name: '',
        username: 'username',
        email: '',
        address: {
          street: '',
          suite: '',
          city: '',
          zipcode: '',
          geo: {
            lat: '',
            lng: '',
          },
        },
        phone: '',
        website: 'password',
        company: {
          name: '',
          catchPhrase: '',
          bs: '',
        },
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        // Use the spread operator to maintain the structure of the nested objects
        setUserData((prevUserData) => ({
          ...prevUserData,
          [name]: value,
        }));
      };
    
      const handleAddUser = async () => {
        
        try {
          const response = await fetch('http://localhost:3000/users', {
            
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
          });
    
          if (response.ok) {
            // Handle successful response (e.g., show a success message)
            console.log('User added successfully!');
          } else {
            // Handle unsuccessful response (e.g., show an error message)
            console.error('Failed to add user.');
          }
        } catch (error) {
          console.error('Error adding user:', error);
        }
      };
  return (<>

    <div>
      <h2>End of registration</h2>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
        </div>
        {/* <h4>Address</h4>  */}
        <div>
          <label>Street:</label>
          <input
            type="text"
            name="address.street"
            value={userData.address.street}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Suite:</label>
          <input
            type="text"
            name="address.suite"
            value={userData.address.suite}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            name="address.city"
            value={userData.address.city}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Zipcode:</label>
          <input
            type="text"
            name="address.zipcode"
            value={userData.address.zipcode}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Geo Lat:</label>
          <input
            type="text"
            name="address.geo.lat"
            value={userData.address.geo.lat}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Geo Lng:</label>
          <input
            type="text"
            name="address.geo.lng"
            value={userData.address.geo.lng}
            onChange={handleInputChange}
          />
        </div>
        {/* Phone */}
        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={userData.phone}
            onChange={handleInputChange}
          />
        </div>
       
        {/* Company */}
        <div>
          <label>Company Name:</label>
          <input
            type="text"
            name="company.name"
            value={userData.company.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Catch Phrase:</label>
          <input
            type="text"
            name="company.catchPhrase"
            value={userData.company.catchPhrase}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>BS:</label>
          <input
            type="text"
            name="company.bs"
            value={userData.company.bs}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={handleAddUser}>
          Add User
        </button>
      </form>
    </div>
    </>
  )
}

export default EndOfRegistration