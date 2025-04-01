import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styles from "./australia.module.css";
import australia1 from "../../assets/a1.JPG";
import australia2 from "../../assets/a2.JPG";
import australia3 from "../../assets/a3.JPG";
import australia4 from "../../assets/a4.JPG";
import australia5 from "../../assets/a5.JPG";
import australia6 from "../../assets/a6.JPG";
import australia7 from "../../assets/a7.JPG";
import australia8 from "../../assets/a8.JPG";
import australia9 from "../../assets/a9.JPG";
import australia10 from "../../assets/a10.JPG";
import australia11 from "../../assets/a11.JPG";
import australia12 from "../../assets/a12.JPG";
import australia13 from "../../assets/a13.JPG";
import australia14 from "../../assets/a14.JPG";
import australia15 from "../../assets/a15.JPG";
import australia16 from "../../assets/a16.JPG";
import australia17 from "../../assets/a17.JPG";
import australia18 from "../../assets/a18.JPG";
import australia19 from "../../assets/a19.JPG";
import australia20 from "../../assets/a20.JPG";
import australia21 from "../../assets/a21.JPG";
import australia22 from "../../assets/a22.JPG";

const Australia = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Back Button */}
      <button
        className={styles.stickyBackButton}
        onClick={() => navigate("/destinations")}
      >
        ←
      </button>

      {/* Header Section */}
      <div className={styles.page}>
        <div className={styles.header}>
          <h1>Australia</h1>
          <h2 className={styles.subHeader}>Land Down Under</h2>
        </div>

        {/* Hero Image Section */}
        <div className={styles.heroImageContainer}>
          <img
            src={australia1}
            alt="Australia landscape"
            className={styles.heroImage}
          />
          <div className={styles.imageOverlay}></div>
        </div>

        <div className={styles.descriptionContainer}>
          <p className={styles.description}>
            Australia is a vast and diverse country known for its stunning
            landscapes, vibrant cities, and unique wildlife. From the iconic
            Sydney Opera House and Great Barrier Reef to the rugged Outback,
            Australia offers a wide range of natural beauty and cultural
            experiences.
          </p>

          <hr className={styles.divider} />

          <p className={styles.descriptionText}>
            Sydney, the capital of New South Wales, is one of the most iconic
            cities in the world. With its stunning harbor, world-famous
            landmarks, and lively culture, Sydney attracts millions of visitors
            every year. <br />
            <br />
            The Sydney Opera House is a masterpiece of modern architecture and a
            UNESCO World Heritage Site. One of the most recognizable buildings
            in the world, it offers guided tours and world-class performances.{" "}
            <br />
            <br />
            The Sydney Harbour Bridge, known as the &quot;Coathanger,&quot; is a
            massive steel bridge connecting the northern and southern parts of
            the city. Adventure seekers can climb to the top for breathtaking
            views. <br />
            <br />
            Bondi Beach is one of the world&apos;s most famous beaches, known
            for its golden sands and excellent surf. A scenic coastal walk from
            Bondi to Coogee offers stunning ocean views.
          </p>
        </div>

        <div className={styles.container}>
          <h2 className={styles.header}>
            <h1
              style={{
                fontSize: window.innerWidth <= 768 ? "1.5rem" : "2.5rem",
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
                Unique Wildlife
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
          </h2>
        </div>

        <div className={styles.descriptionContainer}>
          <p className={styles.descriptionText}>
            Australia is home to some of the most unique wildlife in the world,
            with many species found nowhere else on Earth. Its diverse
            ecosystems, ranging from lush rainforests to arid deserts, support
            an incredible variety of animals. <br />
            <br />
            One of the most famous Australian animals is the kangaroo, a
            powerful marsupial that symbolizes the country’s wildlife. Alongside
            it, the koala is another iconic creature, spending most of its life
            nestled in eucalyptus trees, feeding on their leaves. <br />
            <br />
            Australia is also known for its fascinating monotremes, such as the
            platypus, an egg-laying mammal with a duck-like bill, and the
            echidna, a spiny anteater. <br />
            <br />
            The country is home to some of the world’s most dangerous creatures,
            including the saltwater crocodile, the largest reptile on the
            planet, and the redback spider, one of the most venomous arachnids.
            The oceans surrounding Australia are equally impressive, hosting the
            Great Barrier Reef, where colorful coral and marine life thrive,
            including the clownfish, sea turtles, and reef sharks.
          </p>
        </div>

        <div className={styles.parent}>
          <div className={styles.div1}>
            <img
              src={australia4}
              alt="Australia wildlife"
              className={styles.heroImage}
            />
          </div>
          <div className={styles.div2}>
            <img
              src={australia5}
              alt="Australia wildlife"
              className={styles.heroImage}
            />
          </div>
          <div className={styles.div3}>
            <img
              src={australia2}
              alt="Australia wildlife"
              className={styles.heroImage}
            />
          </div>
          <div className={styles.div4}>
            <img
              src={australia3}
              alt="Australia wildlife"
              className={styles.heroImage}
            />
          </div>
          <div className={styles.div5}>
            <img
              src={australia6}
              alt="Australia wildlife"
              className={styles.heroImage}
            />
          </div>
          <div className={styles.div6}>
            <img
              src={australia7}
              alt="Australia wildlife"
              className={styles.heroImage}
            />
          </div>
          <div className={styles.div7}>
            <img
              src={australia8}
              alt="Australia wildlife"
              className={styles.heroImage}
            />
          </div>
          <div className={styles.div8}>
            <img
              src={australia9}
              alt="Australia wildlife"
              className={styles.heroImage}
            />
          </div>
        </div>

        <div className={styles.container}>
          <h2 className={styles.header}>
            <h1
              style={{
                fontSize: window.innerWidth <= 768 ? "1.5rem" : "2.5rem",
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
                Architectural Marvels
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
          </h2>
        </div>

        <div className={styles.descriptionContainer}>
          <p className={styles.descriptionText}>
            Australia&quot;s cities are a blend of modern innovation and
            historic charm, each offering a unique architectural landscape.
            Sydney&quot;s skyline is dominated by the world-famous Sydney Opera
            House, a masterpiece of modern architecture, and the Harbour Bridge,
            an engineering marvel offering breathtaking views. <br />
            <br />
            Melbourne, known for its European-style laneways and artistic flair,
            boasts Federation Square, a striking cultural hub, and the historic
            Flinders Street Station. <br />
            <br />
            Adelaide&quot;s colonial-style buildings and churches give it a
            charming, historic feel, while Canberra, the nation&quot;s capital,
            is home to the Australian Parliament House, an architectural icon
            blending seamlessly into the landscape. <br />
            <br />
            From cutting-edge skyscrapers to well-preserved historic sites,
            Australia&quot;s cities offer a fascinating mix of architecture that
            reflects its rich history and dynamic future.
          </p>
        </div>

        <div className={styles.parentArchitect}>
          <div className={styles.div9}>
            <img
              src={australia13}
              alt="Australia wildlife"
              className={styles.heroImage}
            />
          </div>
          <div className={styles.div10}>
            <img
              src={australia14}
              alt="Australia wildlife"
              className={styles.heroImage}
            />
          </div>
          <div className={styles.div11}>
            <img
              src={australia15}
              alt="Australia wildlife"
              className={styles.heroImage}
            />
          </div>
          <div className={styles.div12}>
            <img
              src={australia12}
              alt="Australia wildlife"
              className={styles.heroImage}
            />
          </div>
          <div className={styles.div13}>
            <img
              src={australia11}
              alt="Australia wildlife"
              className={styles.heroImage}
            />
          </div>
          <div className={styles.div14}>
            <img
              src={australia10}
              alt="Australia wildlife"
              className={styles.heroImage}
            />
          </div>
        </div>

        <div className={styles.container}>
          <h2 className={styles.header}>
            <h1
              style={{
                fontSize: window.innerWidth <= 768 ? "1.2rem" : "2.5rem",
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
                National Parks
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
          </h2>
        </div>

        <div className={styles.descriptionContainer}>
          <p className={styles.descriptionText}>
            Australia is home to some of the most breathtaking national parks in
            the world, showcasing its diverse landscapes, unique wildlife, and
            stunning natural wonders. From lush rainforests to vast deserts,
            these protected areas offer visitors a chance to experience the
            country’s raw beauty. <br />
            <br />
            Kakadu National Park in the Northern Territory is one of Australia’s
            most famous parks, known for its ancient Aboriginal rock art, vast
            wetlands, and incredible biodiversity, including saltwater
            crocodiles and hundreds of bird species. <br />
            <br />
            In Western Australia, Karijini National Park features dramatic
            gorges, stunning waterfalls, and crystal-clear rock pools, offering
            a rugged yet awe-inspiring landscape perfect for adventure seekers.
          </p>
        </div>

        <div className={styles.parentParks}>
          <div className={styles.div16}>
            <img
              src={australia16}
              alt="Australia wildlife"
              className={styles.heroImage}
            />
          </div>
          <div className={styles.div17}>
            <img
              src={australia17}
              alt="Australia wildlife"
              className={styles.heroImage}
            />
          </div>
          <div className={styles.div18}>
            <img
              src={australia18}
              alt="Australia wildlife"
              className={styles.heroImage}
            />
          </div>
          <div className={styles.div19}>
            <img
              src={australia19}
              alt="Australia wildlife"
              className={styles.heroImage}
            />
          </div>
          <div className={styles.div20}>
            <img
              src={australia20}
              alt="Australia wildlife"
              className={styles.heroImage}
            />
          </div>
          <div className={styles.div21}>
            <img
              src={australia21}
              alt="Australia wildlife"
              className={styles.heroImage}
            />
          </div>
          <div className={styles.div22}>
            <img
              src={australia22}
              alt="Australia wildlife"
              className={styles.heroImage}
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
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29734365.651830666!2d111.87571699964418!3d-24.531038489728477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2sAustralia!5e0!3m2!1sen!2sdk!4v1739261389393!5m2!1sen!2sdk"
            className={styles.map}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Australia;
