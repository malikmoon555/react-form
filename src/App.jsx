import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    gender: "",
    subject: "",
    resume: "",
    about: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.table(formData);
  };
  return (
    <div className="container">
      <h1> Form in React</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          placeholder="Enter your first Name"
          name="firstName"
          value={formData.firstname}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          placeholder="Enter your last Name"
          name="lastName"
          value={formData.lastname}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Enter your email"
          name="email"
          value={formData.email}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <label htmlFor="contact">Contact</label>
        <input
          type="#"
          value={formData.contact}
          name="contact"
          placeholder="Enter your Phone no"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <div>
          <label htmlFor="gender">Gender</label>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={(e) => handleChange(e)}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={(e) => handleChange(e)}
          />
          Female
          <input
            type="radio"
            name="gender"
            value="Custom"
            onChange={(e) => handleChange(e)}
          />
          Custom
        </div>
        <br />
        <br />
        <label htmlFor="Subject">Subject</label>
        <select name="subject" id="subject" onChange={(e) => handleChange(e)}>
          <option value="MAth">Math</option>
          <option value="English">English</option>
          <option value="Urdu">Urdu</option>
        </select>
        <br />
        <br />
        <label htmlFor="Resume">Resume</label>
        <input
          type="file"
          placeholder="Resume"
          name="resume"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <label htmlFor="About">About</label>
        <textarea
          name="about"
          id="about"
          cols="30"
          row="10"
          value={formData.about}
          onChange={(e) => handleChange(e)}
          placeholder="Enter Descripstion"
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
