import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styles from "./crete.module.css"; 
import c1 from "../../assets/c1.jpg";
import c2 from "../../assets/c2.jpg";
import c3 from "../../assets/c3.jpg";
import c12 from "../../assets/c12.jpg";
import c5 from "../../assets/c5.jpg";
import c6 from "../../assets/c6.jpg";
import c7 from "../../assets/c7.jpg";
import c8 from "../../assets/c8.jpg";
import c9 from "../../assets/c9.jpg";
import c10 from "../../assets/c10.jpg";
import c11 from "../../assets/c11.jpg";
import c13 from "../../assets/c13.jpg";
import c15 from "../../assets/c15.jpg";
import c19 from "../../assets/c19.jpg";
import c18 from "../../assets/c18.jpg";

const Crete = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.page}>
      {/* Back Button */}
      <button
        className={styles.stickyBackButton}
        onClick={() => navigate("/destinations")}
      >
        ←
      </button>

      {/* Header Section */}
      <div className={styles.header}>
        <h1>The island of Crete</h1>
        <h2 className={styles.subHeader}>A location like no other</h2>
      </div>

      {/* Main Container */}
      <div className={styles.container}>
        {/* Left Container */}
        <div className={styles.leftContainer}>
          <p>
            Crete, the largest island in Greece, is a destination that blends
            ancient history, breathtaking landscapes, and a vibrant local
            culture.
            <br />
            Known as the birthplace of the Minoan civilization, Crete is home to
            fascinating archaeological sites like the Palace of Knossos, where
            legends of King Minos and the Minotaur come to life.
            <br />
            <i style={{ marginTop: "20px", display: "block" }}>
              Welcome to Crete.
            </i>
          </p>
          <img
            src={c1}
            alt="Scenic Landscape of Crete"
            className={styles.imageLeft}
          />
        </div>

        {/* Right Container */}
        <div className={styles.rightContainer}>
          <div className={styles.imageContainer}>
            <img
              src={c2}
              alt="Crete Image 2"
              className={styles.imageRightSmall}
            />
            <img
              src={c3}
              alt="Crete Image 3"
              className={styles.imageRightLarge}
            />
          </div>
          <div className={styles.rightContainerP}>
            <p>
              Crete&apos;s nightlife offers something for everyone, from vibrant
              beach bars and wild nightclubs to cozy tavernas with live Cretan
              music. Whether you&apos;re looking to dance until sunrise or enjoy
              a relaxed evening by the sea, the island has it all.
              <br />
              <div style={{ marginTop: "20px" }}>
                For a more authentic experience, head to a local taverna where
                live Cretan music, folk dancing, and endless rounds of raki
                (local spirit) create an unforgettable atmosphere. Places like
                Anogeia and Archanes offer incredible cultural nights.
              </div>
              <div style={{ marginTop: "20px" }}>
                Whether you&apos;re sipping cocktails on a beach, dancing under
                the stars, or enjoying live bouzouki music, Crete&apos;s
                nightlife is diverse, exciting, and full of energy!
              </div>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <h2 className={styles.header}>
          <h1
            style={{
              fontSize: window.innerWidth <= 768 ? "1.5rem" : "3rem",
              marginTop: window.innerWidth <= 768 ? "60px" : "150px",
              marginBottom: window.innerWidth <= 768 ? "45px" : "30px",
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <hr
                style={{
                  width: "50px",
                  height: "1px",
                  border: "none",
                  backgroundColor: "#2c3e50",
                  margin: 0,
                }}
              />
              Crete Beaches
              <hr
                style={{
                  width: "50px",
                  height: "1px",
                  border: "none",
                  backgroundColor: "#2c3e50",
                  margin: 0,
                }}
              />
            </span>
          </h1>
          <p
            style={{
              fontSize: window.innerWidth <= 768 ? "1rem" : "1.4rem",
              fontWeight: 300,
              marginTop: "-25px",
              marginBottom: "30px",
              fontFamily: '"Montserrat", sans-serif',
            }}
          >
            Pink sand shores and hidden coves with crystal-clear waters
          </p>
        </h2>
      </div>

      <div className={styles.gridContainer}>
        <div className={styles.parent}>
          <img
            src={c5}
            alt="Beach 1"
            className={`${styles.gridItem} ${styles.div1}`}
          />
          <img
            src={c6}
            alt="Beach 2"
            className={`${styles.gridItem} ${styles.div2}`}
          />
          <img
            src={c7}
            alt="Beach 3"
            className={`${styles.gridItem} ${styles.div3}`}
          />
          <img
            src={c8}
            alt="Beach 4"
            className={`${styles.gridItem} ${styles.div4}`}
          />
          <img
            src={c9}
            alt="Beach 5"
            className={`${styles.gridItem} ${styles.div5}`}
          />
          <img
            src={c10}
            alt="Beach 6"
            className={`${styles.gridItem} ${styles.div6}`}
          />
          <img
            src={c11}
            alt="Beach 7"
            className={`${styles.gridItem} ${styles.div7}`}
          />
          <img
            src={c12}
            alt="Beach 8"
            className={`${styles.gridItem} ${styles.div8}`}
          />
          <img
            src={c13}
            alt="Beach 8"
            className={`${styles.gridItem} ${styles.div9}`}
          />
        </div>
      </div>
      <div className={styles.container}>
        <h2 className={styles.header}>
          <h1
            style={{
              fontSize: window.innerWidth <= 768 ? "1.5rem" : "3rem",
              marginTop: window.innerWidth <= 768 ? "60px" : "150px",
              marginBottom: window.innerWidth <= 768 ? "45px" : "30px",
              textAlign: "center",
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                margin: "0 auto",
                maxWidth: "fit-content",
              }}
            >
              <hr
                style={{
                  width: "50px",
                  height: "1px",
                  border: "none",
                  backgroundColor: "#2c3e50",
                  margin: 0,
                }}
              />
              Crete Food
              <hr
                style={{
                  width: "50px",
                  height: "1px",
                  border: "none",
                  backgroundColor: "#2c3e50",
                  margin: 0,
                }}
              />
            </span>
          </h1>
          <p
            style={{
              fontSize: window.innerWidth <= 768 ? "1rem" : "1.4rem",
              fontWeight: 300,
              marginTop: "-25px",
              marginBottom: "30px",
              fontFamily: '"Montserrat", sans-serif',
              textAlign: "center",
            }}
          >
            Where Tradition Meets Flavor
          </p>
        </h2>

        <div className={styles.foodSection}>
          <div className={styles.textLeft}>
            <p>
              And the food? Let&apos;s talk about Cretan food. On this large and
              fertile island, the centuries have allowed residents to cultivate
              a unique cuisine and their own style of cheeses and wines.
              It&apos;s a very seasonal diet, consisting of greens, fruits,
              fish, a little protein, legumes, barley rusks, and plenty of olive
              oil. You&apos;ll dine on a lot of fish, lamb, pork, and even a
              local escargot cooked in oil and thyme.
            </p>
          </div>
          <div className={styles.imageRight}>
            <img src={c18} alt="Cretan Dish" className={styles.foodImage} />
          </div>
        </div>

        {/* Second Row: Text Right, Image Left */}
        <div className={styles.foodSection}>
          <div className={styles.imageLeft}>
            <img src={c15} alt="Dakos Dish" className={styles.foodImage} />
          </div>
          <div className={styles.textRight}>
            <p>
              Probably one of the most famous dishes is dakos, a crusty
              whole-grain bread you&apos;ll find everywhere, sort of like a
              bruschetta. It&apos;s often served by itself, but when ordered as
              an appetizer, mostly it&apos;s topped with a tomato puree and
              cheese (either feta or mizithra, which is whey cheese).
            </p>
          </div>
        </div>

        {/* Third Row: Text Left, Image Right */}
        <div className={styles.foodSection}>
          <div className={styles.textLeft}>
            <p>
              If you&apos;re like me, the quickest way to your heart is through
              your stomach. The crunchy dakos, the sweetness of local cheese,
              the flavor of the grilled fish, and the diversity of the wine —
              Crete had some of the best food I had my entire time in Greece.
            </p>
          </div>
          <div className={styles.imageRight}>
            <img
              src={c19}
              alt="Cretan Food Variety"
              className={styles.foodImage}
            />
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26042.82707142833!2d25.096102306359448!3d35.32204516509054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149a586bd068e13f%3A0x400bd2ce2b9b6f0!2sHeraklion%2C%20Greece!5e0!3m2!1sen!2sdk!4v1739198697997!5m2!1sen!2sdk"
            width="600"
            height="450"
            style={{ border: "1px solid black" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Crete;
