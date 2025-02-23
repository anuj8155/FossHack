import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUsers, FaVideo, FaGlobe } from "react-icons/fa";
import "./starter.css";
import Cube from "../Cube/Cube";
import Circle from "../Circle/Circle";

const Starter = ({ userCount, isLoggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(".parallax");
      const gridSection = document.querySelector(".sec");

      if (heroSection && gridSection) {
        let scrollY = window.scrollY;
        heroSection.style.transform = `translateY(${scrollY * 0.5}px)`;
        heroSection.style.opacity = `${1 - scrollY * 0.002}`;

        if (scrollY > gridSection.offsetTop - 100) {
          heroSection.style.opacity = "0";
        } else {
          heroSection.style.opacity = "1";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <section className="parallax">
        <div className="hero-container">
          <div className="left-heading-container">
            <h2 id="text" className="left-heading">OmniCast</h2>
            <h4 id="text-down">One Broadcast, Infinite Reach.</h4>
            <button id="login-btn" onClick={() => navigate(isLoggedIn ? "/services" : "/login")}>
              {isLoggedIn ? "Start Streaming" : "Get Started"}
            </button>
          </div>
          <div className="right-heading">
            <Cube />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          {/* Header Section */}
          <div className="header">
            <h1 className="title">Explore the Future of Streaming</h1>
            <p className="subtitle">
              Elevate your entertainment experience with high-quality live streaming and interactive engagement.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid">
            {/* Site Overview Card */}
            <div className="card">
              <div className="icon"><FaGlobe className="my-icon"/></div>
              <h2 className="card-title">Global Reach</h2>
              <p className="card-text">
                Connect with a worldwide audience. Our platform ensures seamless and high-quality streaming for users across the globe.
              </p>
            </div>

            {/* User Registration Card */}
            <div className="card">
              <div className="icon"><FaUsers className="my-icon"/></div>
              <h2 className="card-title">{<Circle userCount={17} />}</h2>
              <p className="card-text">
                Join a growing community of creators and viewers. Set up your profile in minutes and start engaging instantly.
              </p>
            </div>

            {/* Live Streaming Card */}
            <div className="card">
              <div className="icon"><FaVideo className="my-icon" /></div>
              <h2 className="card-title">{<Circle userCount={100} />}</h2>
              <p className="card-text">
                Experience top-tier live streams with unmatched quality. Our advanced technology ensures an uninterrupted experience.
              </p>
            </div>
          </div>
        </div>
        <button id="login-btn" onClick={() => navigate("/about")}>
          Learn More
        </button>
      </section>
    </div>
  );
};

export default Starter;
