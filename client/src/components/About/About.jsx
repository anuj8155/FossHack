import React, { useState } from "react";
import "./about.css";
import {
  FaPlus,
  FaMinus,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import img1 from "./assets/nancy.jpg"
import img2 from "./assets/pragya.jpg"
import img3 from "./assets/abhinav.jpg"
import img4 from "./assets/anuj.jpg"

const About = () => {
  const [showFaq, setShowfaq] = useState({});

  const toggleFaq = (index) => {
    setShowfaq((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const scrollToFaq = () => {
    document
      .getElementById("faq-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { value: "99%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" },
    { value: "100+", label: "Projects Completed" },
  ];

  const faqs = [
    {
      question: "What is OmniCast all about?",
      answer:
        "OmniCast is an open-source live-streaming platform that allows users to broadcast simultaneously on multiple social media platforms while managing all interactions in one place.",
    },
    {
      question: "How does OmniCast work?",
      answer:
        "OmniCast connects to various streaming platforms, enabling you to go live on multiple channels at once while aggregating viewer comments into a unified chat interface.",
    },
    {
      question: "Can I see where each chat message is coming from?",
      answer:
        "Yes! The live chat section labels each comment with its source platform, allowing you to engage efficiently.",
    },
    {
      question: "Do I need special software to use OmniCast?",
      answer:
        "No, OmniCast is a web-based platform with an intuitive interface, so you can start streaming instantly without additional software.",
    },
  ];

  const developers = [
    {
      name: "Anuj Kumar Singh",
      image: img4,
      mail: "anujkumar37055@gmail.com",
      linkedin: "https://www.linkedin.com/in/anuj-kumar-singh-64a81125a",
      github: "https://github.com/anuj8155",
    },
    {
      name: "Nancy Gupta",
      image: img1,
      mail: "nancyg8029@gmail.com",
      linkedin: "http://www.linkedin.com/in/nancy-gupta-784b5025a",
      github: "https://github.com/Nancy0801",
    },
    {
      name: "Pragya Sharma",
      image: img2,
      mail: "pragyaxibs4834@gmail.com",
      linkedin: "https://www.linkedin.com/in/pragya-sharma-4a2136260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/pragya79",
    },
    {
      name: "Abhinav",
      image: img3,
      mail: "abhinav234765@gmail.com",
      linkedin: "https://www.linkedin.com/in/abhinav-kumar-jha-7b406b260",
      github: "https://github.com/Abhinav-alec",
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>About OmniCast</h1>
          <p>
            OmniCast is an innovative live-streaming platform designed to
            empower content creators, businesses, and influencers by enabling
            seamless multi-platform broadcasting. With OmniCast, users can go
            live across multiple social media platforms simultaneously,
            expanding their reach and engagement without the hassle of managing
            multiple streams individually.
          </p>
          <p>
            <h2>Our Mission</h2>
            Our goal is to revolutionize live streaming by providing a unified,
            efficient, and interactive broadcasting experience. We aim to break
            platform limitations and help users connect with their audience
            effortlessly, no matter where they are.
          </p>
          <button className="learn-more" onClick={scrollToFaq}>
            Learn More
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-box">
              <h2>{stat.value}</h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq-section" className="faq-section">
        <div className="faq-heading">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-box">
              <div className="faq-question" onClick={() => toggleFaq(index)}>
                <h3>{faq.question}</h3>
                {showFaq[index] ? <FaMinus /> : <FaPlus />}
              </div>
              {showFaq[index] && <p className="faq-answer">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* Meet the Developers Section */}
      <div className="team-section">
        <h2 className="team-heading">Meet the Developers</h2>
        <div className="team-container">
          {developers.map((dev, index) => (
            <div key={index} className="team-card">
              <img src={dev.image} className="team-image" />
              <div className="team-info">
                <h3>{dev.name}</h3>
                <div className="team-socials">
                  <a href={dev.mail} target="_blank" rel="noopener noreferrer">
                    <FaEnvelope className="social-icon" />
                  </a>
                  <a
                    href={dev.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="social-icon" />
                  </a>
                  <a
                    href={dev.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="social-icon" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 OmniCast. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
