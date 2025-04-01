import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaTiktok,
} from "react-icons/fa";
import head1 from "../assets/head1.jpg";
import head2 from "../assets/head2.jpg";
import head3 from "../assets/head3.jpg";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.JPG";
import img8 from "../assets/8.JPG";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const images = [
  {
    src: head1,
    heading: "The Wonders of Greece",
    subheading: ["Ancient ruins, stunning islands,", "and Mediterranean charm"],
    buttonLink: "/crete",
  },
  {
    src: head2,
    heading: "The Beauty of Australia",
    subheading: ["Vast landscapes, unique wildlife,", "and coastal wonders"],
    buttonLink: "/australia",
  },
  {
    src: head3,
    heading: "The Mysteries of Norway",
    subheading: ["Majestic fjords, northern lights,", "and Viking heritage"],
    buttonLink: "/norway",
  },
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  //It keeps track of the index of the currently displayed image in a slideshow.
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  //initialized to store user input for email and message for the contact form
  const navigate = useNavigate(); // React Router hook used for programmatic navigation within the app.

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); //useEffect hook creates a slideshow effect by changing the currentImageIndex every 3 seconds. %*(modulo operator)used to loop back to 0 after reaching the last image

    return () => clearInterval(interval);
  }, []); //empty dependency array ([]) makes sure this effect runs only once when the component mounts

  const { src, heading, subheading, buttonLink } = images[currentImageIndex];

  // Handle email subscription
  const handleSubscribe = (e) => {
    e.preventDefault(); //stops the form from refreshing the page upon submission
    if (email) { //checks if the email input is not empty
      console.log("Subscribed with email:", email); //logs the email to the console
      setMessage("Thank you for subscribing!");
      setEmail(""); //clears the email input field
    } else {
      setMessage("Please enter a valid email address.");
    }
  };

  return (
    <>
      <header className="hero-section">
        <div className="image-overlay">
          <img src={src} alt={heading} className="hero-image" />
        </div>

        <div className="logo-name">
          <h1 className="logo-anime">VAGABOND</h1>
        </div>

        <div className="overlay">
          <h1>{heading}</h1>
          <p className="subheading">
            {subheading[0]}
            <br />
            {subheading[1]}
          </p>
          <div className="outbutton">
            <button
              className="corner-button"
              onClick={() => navigate(buttonLink)}
            >
              <span>More Info</span>
            </button>
          </div>
        </div>
      </header>

      <section className="home-section">
        <p className="home-section-text">
          Vagabond is an online journal featuring a limited collection of
          personal stories of adventure travel, journeys, and expeditions. The
          concept is simple: to capture the emotion and experience of adventures
          and expeditions throughout the world… and to inspire.
        </p>
        <h2 className="home-header">EXPLORE</h2>
        <MdKeyboardDoubleArrowDown className="home-icon-down" />
      </section>

      <section className="galleri-section">
        <div className="gallery-row">
          <div className="gallery-item">
            <p className="gallery-text">Drifting into the golden horizon</p>
            <img src={img1} alt="Australia" />
          </div>
          <div className="gallery-item">
            <p className="gallery-text">Sunset sky-high dreams</p>
            <img src={img2} alt="Australia" />
          </div>
        </div>

        <div className="gallery-row">
          <div className="gallery-item">
            <p className="gallery-text">Dark waters, endless depths</p>
            <img src={img3} alt="Crete" />
          </div>
          <div className="gallery-item">
            <p className="gallery-text">Desert landscapes</p>
            <img src={img4} alt="Crete" />
          </div>
        </div>

        <div className="gallery-row">
          <div className="gallery-item">
            <p className="gallery-text">City lights glow</p>
            <img src={img5} alt="Zakynthos" />
          </div>
          <div className="gallery-item">
            <p className="gallery-text">Majestic rocks, tranquil waters</p>
            <img src={img6} alt="Zakynthos" />
          </div>
        </div>

        <div className="gallery-row">
          <div className="gallery-item">
            <p className="gallery-text">Where the world falls away</p>
            <img src={img7} alt="Norway" style={{ height: "400px" }} />
          </div>
          <div className="gallery-item">
            <p className="gallery-text">Hidden treasures</p>
            <img src={img8} alt="Norway" style={{ height: "400px" }} />
          </div>
        </div>
      </section>

      <section className="social-section">
        <h2 className="social-header">FOLLOW US</h2>
        <div className="social-icons">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="social-icon" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="social-icon" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="social-icon" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="social-icon" />
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPinterest className="social-icon" />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok className="social-icon" />
          </a>
        </div>
      </section>

      <section className="subscribe-section">
        <h2 className="subscribe-header">SIGN UP FOR NEWS</h2>
        <form className="subscribe-form" onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email"
            className="subscribe-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="outbutton">
            <button type="submit" className="corner-button">
              <span>Subscribe</span>
            </button>
          </div>
        </form>
        {message && <p className="subscribe-message">{message}</p>}
      </section>
    </>
  );
};

export default Home;
