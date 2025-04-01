import { useEffect, useState } from "react";
import styles from "./about.module.css";
import aboutVideo from "../../assets/about.mp4";
import profile1 from "../../assets/profile1.jpg";
import profile2 from "../../assets/profile2.jpg";
import profile3 from "../../assets/profile3.jpg";
import profile4 from "../../assets/profile4.jpg";
import profile5 from "../../assets/profile5.jpg";
import profile6 from "../../assets/profile6.jpg";

const About = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    comment: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); // updates a state object (formData) with the new value entered by the user in a form input field
  };

  const handleSubmit = (e) => {
    //(e) the form submission event
    e.preventDefault(); //prevents the default action of form submission, which is to reload the page
    console.log("Form Data:", formData);
    setFormData({ firstName: "", lastName: "", comment: "" });
  };

  return (
    <div className={styles.aboutContainer}>
      <header className={styles.videoHeader}>
        <video autoPlay loop muted className={styles.backgroundVideo}>
          <source src={aboutVideo} type="video/mp4" />
        </video>
        <div className={styles.videoOverlay} />
        <div className={styles.headerContent}>
          <h1 className={styles.headerTitle}>Discover VAGABOND</h1>
          <p className={styles.headerSubtitle}>
            Explore the world with us and make unforgettable memories...
          </p>
        </div>
      </header>

      <div className={styles.mainContent}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          <h2>About Vagabond</h2>
          <p>
            Vagabond started as a dream—a dream born from my insatiable
            curiosity and love for exploring the world. It all began when I took
            my first solo trip, stepping out of my comfort zone and immersing
            myself in new cultures, faces, and stories. That journey changed me,
            igniting a passion for travel that I couldn&apos;t ignore. <br />
            <br />
            Building Vagabond wasn&apos;t easy. It took countless hours,
            dedication, and a lot of learning along the way. But seeing how it
            helps others navigate their adventures, how it brings people closer
            to the world and to each other, makes every effort worth it.
            <br />
            <br />
            Today, Vagabond is more than just a travel blog. It&apos;s a
            platform where stories are shared, experiences are celebrated, and
            wanderlust is ignited. It&apos;s a place for dreamers, explorers,
            and anyone curious about the world.
          </p>

          <h2>Get Help</h2>
          <p>
            Need guidance on making your travels more affordable and secure?
            We&apos;re here to help! Share your travel plans, questions, or
            concerns in the form below. Whether you&apos;re looking for
            budget-friendly destinations, safety tips, or insider
            recommendations for getting the best deals on flights and
            accommodations, our experienced team will provide personalized
            advice to enhance your travel experience. <br />
            <br /> We can also guide you through using our exclusive VAGABONDDK
            discount code to save on bookings and travel insurance.
          </p>
          <form onSubmit={handleSubmit} className={styles.helpForm}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <textarea
              name="comment"
              placeholder="Your Comment"
              value={formData.comment}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>

        {/* Right Column */}
        <div className={styles.rightColumn}>
          <h3>Visit Also...</h3>
          <div className={styles.profiles}>
            <div
              className={styles.profile}
              onClick={() =>
                window.open("https://www.nomadicmatt.com/", "_blank")
              }
            >
              <img src={profile1} alt="Nomadic Matt" />
              <p>Nomadic Matt</p>
            </div>
            <div
              className={styles.profile}
              onClick={() =>
                window.open("https://www.theblondeabroad.com/", "_blank")
              }
            >
              <img src={profile2} alt="The Blond Abroad" />
              <p>The Blond Abroad</p>
            </div>
            <div
              className={styles.profile}
              onClick={() =>
                window.open("https://www.danflyingsolo.com/", "_blank")
              }
            >
              <img src={profile3} alt="Dan Flying Solo" />
              <p>Dan Flying Solo</p>
            </div>
            <div
              className={styles.profile}
              onClick={() =>
                window.open("https://www.travel-break.net/", "_blank")
              }
            >
              <img src={profile4} alt="Travel Break" />
              <p>Travel Break</p>
            </div>
            <div
              className={styles.profile}
              onClick={() =>
                window.open("https://www.heynadine.com/", "_blank")
              }
            >
              <img src={profile5} alt="Hey Nadine" />
              <p>Hey Nadine</p>
            </div>
            <div
              className={styles.profile}
              onClick={() =>
                window.open("https://www.indietraveller.co/", "_blank")
              }
            >
              <img src={profile6} alt="Indie Traveller" />
              <p>Indie Traveller</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
