
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginBtn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 
  const navigate = useNavigate(); 

  // Handle input changes
  function emailChange(event) {
    setEmail(event.target.value);
  }

  function passChange(event) {
    setPassword(event.target.value);
  }

  // Handle form submission
  function funSubmit(event) {
    event.preventDefault();
  
    // Retrieve user info from localStorage
    const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
    let isValidUser = false;
  
    // Check if any user exists in localStorage
    if (storedUserInfo) {
      // Use a normal for loop to check each user's info
      for (let i = 0; i < storedUserInfo.length; i++) {
        if (storedUserInfo[i].userEmail === email && storedUserInfo[i].userPassword === password) {
          isValidUser = true;
          break;
        }
      }
    }
  
    if (isValidUser) {
      alert("Login successful!");
      navigate("/home"); // Redirect to another page, such as a home page
    } else {
      setError("Invalid email or password! Please try again.");
    }
  }
  

  return (
    <div>
      <form onSubmit={funSubmit}>
        <div>
          Email: <input type="email" value={email} onChange={emailChange} required />
        </div>
        <div>
          Password: <input type="password" value={password} onChange={passChange} required />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ marginTop: "10px" }}>
        <p>If you don't have an account, <Link to="/signup">Sign up here</Link></p>
      </div>
    </div>
  );
}

export default LoginBtn;
