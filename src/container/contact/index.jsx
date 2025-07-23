import React, { useState, useEffect } from "react";
import "./style.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsFillSendFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // success | error

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
      const res = await fetch("https://getform.io/f/bzynvmxa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact Me"
        icon={<BsFillSendFill size={40} />}
      />

      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="contact__form-group" data-aos="fade-up">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact__form-group" data-aos="fade-up">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact__form-group" data-aos="fade-up">
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="contact__form-group" data-aos="fade-up">
          <button type="submit" className="contact__submit-btn">
            Send Message
          </button>
        </div>

        {status === "success" && (
          <p className="contact__success">Thanks! Message sent successfully.</p>
        )}
        {status === "error" && (
          <p className="contact__error">Oops! Something went wrong.</p>
        )}
      </form>
    </section>
  );
};

export default Contact;
