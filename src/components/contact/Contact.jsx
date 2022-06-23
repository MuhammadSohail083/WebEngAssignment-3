import "./contact.css";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";


const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
 

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rrvnzco",
        "template_3v5nih4",
        formRef.current,
        "user_DrriDPTGKO2Zj4RDXCA6W"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
       
        
        <div className="c-right">
          <p className="c-desc">
          <h1 className="c-title">Contact-Us</h1>
            
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input  type="text" placeholder="FirstName" name="user_name" />
            <input type="text" placeholder="LastName" name="user_name" />
            <input  type="text" placeholder="Country" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea  rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
