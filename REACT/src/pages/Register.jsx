import React from "react";

function Register() {


    return (
        <div>
            <h2>🌈 Join FriendsHub Today!</h2>
            <form>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        
                    />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        
                    />
                </div>
                {/* <button type="button" onClick={handleLogin}>
                    Login
                </button>
                {error && <p style={{ color: 'red' }}>{error}</p>} */}
            </form>
        </div>
    )
}

export default Register