import styles from "./zakynthos.module.css";
import zakynthos1 from "../../assets/z1.jpg";
import zakynthos2 from "../../assets/z2.jpg";
import zakynthos3 from "../../assets/z3.jpg";
import zakynthos4 from "../../assets/z4.jpg";
import zakynthos5 from "../../assets/z5.jpg";
import zakynthos6 from "../../assets/z6.jpg";
import zakynthos7 from "../../assets/z7.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Zakynthos = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <button
        className={styles.stickyBackButton}
        onClick={() => navigate("/destinations")}
      >
        ←
      </button>

      <div className={styles.container}>
        <h1 className={styles.header}>
          Zakynthos, <br />
          the most beautiful Ionian Island
        </h1>

        <div className={styles.containerLeft}>
          <div className={styles.imageGrid}>
            <div
              className={styles.imageContainer}
              style={{ gridColumn: "1 / span 2", marginBottom: "10px" }}
            >
              <img
                src={zakynthos1}
                alt="Caretta Caretta in Zakynthos"
                className={styles.largeImage}
              />
              <div className={styles.figcaption}>Caretta Caretta Turtle</div>
            </div>

            <div
              className={styles.imageContainer}
              style={{ gridColumn: "1 / span 2" }}
            >
              <img
                src={zakynthos2}
                alt="Caretta Caretta Turtles in Zakynthos"
                className={styles.largeImage}
              />
              <div className={styles.figcaption}>Baby Turtles Hatching</div>
            </div>

            <div className={styles.sideBySide}>
              <div className={styles.imageContainer}>
                <img
                  src={zakynthos3}
                  alt="Keri Caves in Zakynthos"
                  className={styles.smallImage}
                />
                <div className={styles.figcaption}>Keri Caves</div>
              </div>
              <div className={styles.imageContainer}>
                <img
                  src={zakynthos4}
                  alt="Caretta Caretta in Zakynthos"
                  className={styles.tallImage}
                />
                <div className={styles.figcaption}>Shipwreck Beach</div>
              </div>
            </div>

            <div className={styles.sideBySide}>
              <div className={styles.imageContainer}>
                <img
                  src={zakynthos5}
                  alt="Shipwreck Beach (Anafonitrisa) in Zakynthos"
                  className={styles.tallImage}
                />
                <div className={styles.figcaption}>Swimming with Turtles</div>
              </div>
              <div className={styles.imageContainer}>
                <img
                  src={zakynthos6}
                  alt="Laganas Bay in Zakynthos"
                  className={styles.smallImage}
                />
                <div className={styles.figcaption}>Laganas Bay</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Text Content and Extra Image */}
        <div className={styles.containerRight}>
          <p className={styles.textContent}>
            Zakynthos, also known as Zante, is one of the most beautiful Ionian
            Islands. Its golden beaches, dramatic cliffs, and turquoise waters
            make it a must-visit destination. Whether you are looking to relax
            under the sun, explore hidden caves, or experience thrilling water
            sports, Zakynthos has something for everyone.
          </p>

          <p className={styles.textContent}>
            The island is home to Navagio Beach, one of the most famous beaches
            in the world, known for its white sand, crystal-clear waters, and an
            iconic shipwreck. The Blue Caves, another must-visit, are
            breathtaking rock formations that reflect mesmerizing shades of blue
            in the sea.
          </p>

          <p className={styles.textContent}>
            Zakynthos has a rich cultural heritage with deep-rooted traditions.
            The locals celebrate numerous festivals, including the feast of
            Saint Dionysios, the islands patron saint. During this event,
            processions, music, and traditional dances fill the streets,
            bringing people together in celebration.
          </p>

          <div className={styles.imageContainer}>
            <img
              src={zakynthos7}
              alt="Laganas Bay in Zakynthos"
              className={styles.extraImage}
            />
            <div className={styles.figcaption}>Laganas Bay</div>
          </div>

          <div className={styles.description}>
            <h3>Top Attractions</h3>
            <ul>
              <li>• Navagio Beach</li>
              <li>• The Blue Caves</li>
              <li>• Turtle Island</li>
              <li>• Bochali Hill</li>
              <li>• Porto Limnionas Beach</li>
              <li>• Xigia Beach</li>
              <li>• Marathonisi Island</li>
              <li>• Porto Vromi</li>
              <li>• Tsilivi Water Park</li>
              <li>• Venetian Castle</li>
              <li>• Solomos Square</li>
              <li>• Keri Caves</li>
              <li>• Gerakas Beach</li>
              <li>• St. Denis Monastery</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.quoteSection}>
        <article className={styles.quote}>
          &ldquo;It felt like stepping away from life for a while... or stepping
          into LIFE for a while might be a better description&rdquo;
          <span className={styles.attribution}>-from Creator&apos;s Tour-</span>
        </article>
      </div>

      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d201245.08661394392!2d20.575318944544787!3d37.78927074650094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sNavagio%20Beach%2C%20Blue%20Caves%2C%20Marathonisi%20Turtle%20Island%2C%20Zakynthos%2C%20Greece!5e0!3m2!1sen!2sdk!4v1708959729464!5m2!1sen!2sdk"
          width="600"
          height="450"
          style={{ border: "1px solid black" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Zakynthos;
