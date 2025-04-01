import styles from "./norway.module.css";
import norway1 from "../../assets/n1.JPG";
import norway2 from "../../assets/n2.JPG";
import norway3 from "../../assets/n3.JPG";
import norway4 from "../../assets/n4.JPG";
import norway5 from "../../assets/n5.jpg";
import norway6 from "../../assets/n6.jpg";
import norway7 from "../../assets/n7.jpg";
import norway8 from "../../assets/n8.jpg";
import norway9 from "../../assets/n9.jpg";
import {useNavigate} from "react-router-dom";
import { useEffect } from "react";

const Norway = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.page}>
      <button
        className={styles.stickyBackButton}
        onClick={() => navigate("/destinations")}
      >
        ←
      </button>

      <h1 className={styles.header}>Norway - Land of the Fjords</h1>

      <div className={styles.container}>
        <div className={styles.leftText}>
          <h3 className={styles.sectionTitle}>Norwegian Fjords</h3>
          <p>
            Norway, a Scandinavian marvel, is renowned for its breathtaking
            fjords, dramatic mountains, and pristine natural beauty. The
            country&apos;s rugged landscape has been carved by glaciers over
            millennia, creating some of the world&apos;s most spectacular
            scenery.
          </p>
          <h3 className={styles.sectionTitle}>Norwegian Northen Lights</h3>
          <p>
            From the northern lights dancing across Arctic skies to the midnight
            sun illuminating summer nights, Norway offers unique natural
            phenomena that captivate visitors from around the globe.
          </p>
        </div>

        <div className={styles.imageStack}>
          <div
            className={styles.imageContainer}
            style={{ width: "340px", height: "340px", marginBottom: "-60px" }}
          >
            <div className={styles.flipContainer}>
              <img
                src={norway1}
                alt="Norwegian Fjord"
                className={styles.circleImage}
              />
              <div className={styles.back}>
                <p>Geirangerfjord - UNESCO World Heritage Site</p>
              </div>
            </div>
          </div>
          <div
            className={styles.imageContainer}
            style={{ marginBottom: "-60px" }}
          >
            <div className={styles.flipContainer}>
              <img
                src={norway3}
                alt="Northern Lights"
                className={styles.circleImage}
              />
              <div className={styles.back}>
                <p>Aurora Borealis in Tromsø</p>
              </div>
            </div>
          </div>
          <div
            className={styles.imageContainer}
            style={{ width: "340px", height: "340px" }}
          >
            <div className={styles.flipContainer}>
              <img
                src={norway2}
                alt="Norwegian Fjord"
                className={styles.circleImage}
              />
              <div className={styles.back}>
                <p>Norwegian Fjord</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.rightText}>
          <h3 className={styles.sectionTitle}>Norwegian Culture</h3>
          <p>
            Norwegian culture is deeply rooted in its Viking heritage and
            maritime traditions. The country&apos;s cities blend modern
            architecture with historic charm, while its rural communities
            preserve age-old customs and ways of life.
          </p>

          <h3 className={styles.sectionTitle}>Norwegian Wheather</h3>
          <p>
            Whether hiking through pristine wilderness, exploring coastal
            villages, or experiencing the vibrant cultural scene in Oslo, Norway
            offers unforgettable adventures in every season.
          </p>
        </div>
      </div>

      {/* New Section: Traveler Experiences */}
      <div className={styles.travelerSection}>
        <h2 className={styles.subHeader}>Norway: A Traveler&apos;s Perspective</h2>
        <p className={styles.description}>
          Traveling through Norway is like stepping into a fairytale—where
          snow-capped mountains, endless fjords, and cozy villages create an
          unforgettable experience. Here are some insights from those who have
          explored its beauty.
        </p>

        <div className={styles.travelerGallery}>
          <div className={styles.travelerContainer}>
            <img
              src={norway4}
              alt="Traveler in Norway"
              className={styles.circleImage}
            />
            <div className={styles.travelerName}>
              <h4>Preikestolen</h4>
            </div>
            <p>
              I still get chills thinking about the moment I stepped onto
              Preikestolen (Pulpit Rock)—a massive, almost perfectly flat
              plateau towering 604 meters above Lysefjord. It&apos;s one of Norway&apos;s
              most famous hikes, and trust me, it lives up to the hype.
            </p>
          </div>

          <div className={styles.travelerContainer}>
            <img
              src={norway5}
              alt="Northern Lights"
              className={styles.circleImage}
            />
            <div className={styles.travelerName}>
              <h4>Northern Lights</h4>
            </div>
            <p>
              It was pure magic.I forgot about the cold, the long journey, and
              everything else. It was just me, the universe, and this celestial
              phenomenon.If you ever get the chance to chase the Northern Lights
              in Norway, do it. Whether in Tromsø, Lofoten, or the remote Sval.
            </p>
          </div>

          <div className={styles.travelerContainer}>
            <img
              src={norway6}
              alt="Fiery Mountain Sunsets Norway"
              className={styles.circleImage}
            />
            <div className={styles.travelerName}>
              <h4>Fiery Mountain Sunsets</h4>
            </div>
            <p>
              One of the most mesmerizing sunsets I witnessed was in Lofoten,
              standing on a cliff overlooking the fjord. The sky slowly
              transformed into a burning masterpiece, the jagged mountain peaks
              glowing as if kissed by embers. The reflection on the calm Arctic
              waters doubled the magic, making it impossible to look away.
            </p>
          </div>

          <div className={styles.travelerContainer}>
            <img
              src={norway7}
              alt="Green Islands"
              className={styles.circleImage}
            />
            <div className={styles.travelerName}>
              <h4>Green Islands</h4>
            </div>
            <p>
              In Norway, summer unveils an entirely different paradise—a
              tapestry of lush green islands scattered along the coastline.
              These tiny gems feel like something from a fairytale, with rolling
              emerald hills, picturesque fishing villages, and crystal-clear
              waters glistening under the northern sun.
            </p>
          </div>

          <div className={styles.travelerContainer}>
            <img
              src={norway8}
              alt="crystal-clear waters"
              className={styles.circleImage}
            />
            <div className={styles.travelerName}>
              <h4>Crystal-clear waters</h4>
            </div>
            <p>
              Norway&apos;s crystal-clear waters are nothing short of mesmerizing.
              Whether it&apos;s the serene fjords reflecting towering cliffs or the
              turquoise bays surrounding its countless islands, the transparency
              of the water reveals a hidden world beneath the surface. In
              summer, the sun casts a golden glow, making the waters shimmer
              like liquid glass—an invitation for travelers to explore by kayak
              or boat.
            </p>
          </div>

          <div className={styles.travelerContainer}>
            <img
              src={norway9}
              alt="Breathtaking mountains"
              className={styles.circleImage}
            />
            <div className={styles.travelerName}>
              <h4>Breathtaking mountains</h4>
            </div>
            <p>
              Norway&apos;s mountains are a true adventure, with dramatic fjords,
              crystal-clear alpine lakes, and untouched wilderness. You&apos;ll find
              famous trails like Besseggen Ridge, or discover hidden paths
              through pristine valleys. Whether you&apos;re taking in the
              breathtaking views from a scenic drive or challenging yourself on
              a hike, the mountains offer an unforgettable journey into nature&apos;s
              raw beauty.
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "80%",
          height: "1px",
          backgroundColor: "#2c3e50",
          margin: "60px auto",
          maxWidth: "1200px",
        }}
      ></div>

       <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2055.6946274899165!2d6.186268726631706!3d58.98682618838981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463bd51bf654eb09%3A0x4a83e6bdbfa3b78b!2sPulpit%20Rock!5e0!3m2!1sen!2sdk!4v1739044037218!5m2!1sen!2sdk"
          width="600"
          height="450"
          style={{ border: "1px solid black", marginBottom: "40px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>  
    </div>
  );
};

export default Norway;