import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./signup.scss";

const Signup = () => {
  const navigate = useNavigate();
  const [FormData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/signup", FormData);
      if (response.status == 200) {
        navigate("/");
      }
    } catch (error) {
      console.log("signup error", error);
    }
  };

  return (
    <div className="container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1>Join Skill Swap Community</h1>
        <p>
          Connect, learn, and share skills in a supportive community. Expand
          your knowledge and grow together!
        </p>
        <h2>Signup with</h2>
        <div className="social-icons">
          <div className="icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </div>
          <div className="icons">
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-google"></i>
            </a>
          </div>
          <div className="icons">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="divider">
          <hr />
          <span>OR</span>
          <hr />
        </div>

        <div className="form-control">
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            value={FormData.fullname}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={FormData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={FormData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Join Now</button>
        <div className="add-sec">
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
