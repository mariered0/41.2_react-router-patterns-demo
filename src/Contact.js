import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
// import {useHistory} from 'react-router-dom';

function Contact() {
  const [email, setEmail] = useState("");
  // const history = useHistory();
  const navigate = useNavigate();

  function handleChange(evt) {
    setEmail(evt.target.value);
  }

  function storeEmail() {
    console.log("jk, no email storage");
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    storeEmail(email);
    // imperatively redirect to homepage
    navigate('/');
  }

  return (
    <div>
      <h1>This is the contact page.</h1>
      <p>Enter email to get in touch</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}
// end

export default Contact;
