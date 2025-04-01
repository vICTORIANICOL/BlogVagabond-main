import { useNavigate } from "react-router-dom";
import styles from "./TravelTips.module.css";
import travelImage from "../../assets/Ttips.jpg";
import s1 from "../../assets/s1.jpg";
import s2 from "../../assets/s2.jpg";
import s3 from "../../assets/s3.jpg";
import s4 from "../../assets/s4.jpg";
import s5 from "../../assets/s5.jpg";
import p1 from "../../assets/p1.jpg";
import p2 from "../../assets/p2.jpg";
import p3 from "../../assets/p3.jpg";
import { useEffect } from "react";

const TravelTips = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Main Section - Cheap Places to Travel */}
      <div className={styles.container}>
        {/* Left Section - Header & Text */}
        <div className={styles.textContainer}>
          <h1 className={styles.header}>Cheap Places to Travel in 2025</h1>
          <p className={styles.description}>
            Traveling on a budget doesn&apos;t mean you have to compromise on
            experiences. Discover stunning destinations where you can explore,
            eat, and stay without breaking the bank. From vibrant cities in
            Southeast Asia to hidden gems in Eastern Europe, 2025 is packed with
            affordable adventures for every traveler. <br />
            Whether you&apos;re backpacking, slow traveling, or just looking for
            a cost-effective getaway, there are plenty of places where your
            money stretches further. Imagine wandering through the colorful
            streets of Mexico City, indulging in delicious street food in
            Thailand, or exploring the ancient ruins of Albania—all without
            spending a fortune.
          </p>
        </div>

        {/* Right Section - Styled Image */}
        <div className={styles.imageContainer}>
          <img src={travelImage} alt="Travel Tips" className={styles.image} />
        </div>
      </div>

      <div className={styles.containerSpain}>
        <div className={styles.textContainerSpain}>
          <h1 className={styles.headerSpain}>1. Spain</h1>
          <p className={styles.descriptionSpain}>
            Europe as a whole isn&apos;t known for being a cheap place to
            travel. However, there are a few countries that are affordable, and
            Spain is certainly one of them! Whether it&apos;s Gaudi&apos;s art
            in Barcelona, Paella tasting in Valencia, or flamenco shows in
            Sevilla, there&apos;s something flamboyant and beautiful around
            every corner.
          </p>
        </div>

        <div className={styles.imageContainerSpain}>
          <img src={s1} alt="Spain scenery 1" className={styles.image} />
          <img src={s2} alt="Spain scenery 2" className={styles.image} />
        </div>

        <div className={styles.textContainerSpain}>
          <h1
            className={styles.headerSpain}
            style={{
              fontSize: "28px",
              textAlign: "left",
              marginLeft: "18px",
              marginTop: "-40px",
            }}
          >
            Food and Transport
          </h1>
          <p
            className={styles.descriptionSpain}
            style={{ marginBottom: "-20px" }}
          >
            Prices for food and drink vary in every city. However, you can find
            a &apos;menu del dia&apos; (starter, main, dessert) for as little as
            $9 USD and a beer for as low as $1.80 USD! Better still, head to
            places like Granada, where it&apos;s common to get free tapas when
            you buy a drink. Make sure to go with an empty belly!
          </p>
        </div>

        <div className={styles.parentSpain}>
          <div className={styles.div1Spain}>
            <img src={s5} alt="Spain scenery" className={styles.imageSpain} />
          </div>
          <div className={styles.div2Spain}>
            <img src={s3} alt="Spain scenery" className={styles.imageSpain} />
          </div>
          <div className={styles.div3Spain}>
            <img src={s4} alt="Spain scenery" className={styles.imageSpain} />
          </div>
        </div>

        <div className={styles.textContainerSpain}>
          <p className={styles.descriptionSpain} style={{ marginTop: "-75px" }}>
            Landscapes in Spain are stunning, from the wide-open bays of the
            South to the green mountains of the north. Choose a train from
            Barcelona to Madrid for $20 USD or a bus from Malaga to Granada for
            the small price of $10 USD. Alternatively, choose to lift share on
            blablacar.com – a very popular choice in Spain for those traveling
            on a budget.
          </p>
        </div>

        <div className={styles.textContainerSpain}>
          <h1
            className={styles.headerSpain}
            style={{
              marginTop: "-125px",
              fontSize: "28px",
              textAlign: "left",
              marginLeft: "15px",
            }}
          >
            Where to stay in Spain
          </h1>
          <p
            className={styles.descriptionSpain}
            style={{ marginBottom: "-20px" }}
          >
            Accommodation in Spain is generally very reasonable, particularly in
            smaller towns and villages. If you&apos;re looking for the cheapest
            cities to stay in Spain, choose more affordable options like
            Valencia and Seville over pricier, more popular cities like Madrid
            and Barcelona.
          </p>
        </div>

        <div
          className={styles.textContainerSpain}
          style={{ marginTop: "-130px" }}
        >
          <h1 className={styles.headerSpain} style={{ marginTop: "140px" }}>
            2. Poland
          </h1>
          <p
            className={styles.descriptionSpain}
            style={{ marginBottom: "-20px" }}
          >
            Poland is a budget traveler&apos;s dream, blending rich history with
            affordable experiences. From the medieval streets of Krakow to the
            bustling energy of Warsaw, you&apos;ll find vibrant cultural scenes,
            historical landmarks, and delicious local cuisine—all at a fraction
            of the cost compared to other European capitals.
            <br />
            Explore the Wieliczka Salt Mine, a UNESCO World Heritage Site, or
            take a reflective journey to Auschwitz-Birkenau for a powerful
            historical experience. Nature lovers can hike the Tatra Mountains,
            enjoy the serene Mazury Lake District, or relax on the sandy beaches
            along the Baltic Sea.
          </p>
        </div>

        <div className={styles.parentPoland}>
          <div className={styles.div1Poland}>
            <img src={p1} alt="Poland scenery" className={styles.imagePoland} />
          </div>
          <div className={styles.div2Poland}>
            <img src={p2} alt="Poland scenery" className={styles.imagePoland} />
          </div>
          <div className={styles.div3Poland}>
            <img src={p3} alt="Poland scenery" className={styles.imagePoland} />
          </div>
        </div>

        <div className={styles.textContainerSpain}>
          <h1
            className={styles.headerSpain}
            style={{
              marginTop: "-75px",
              fontSize: "28px",
              textAlign: "left",
              marginLeft: "15px",
            }}
          >
            Where to stay in Poland
          </h1>
          <p className={styles.descriptionSpain}>
            Your money will go far in cities like Krakow. Here, you can find
            accommodation from $10-60 USD (45-220 Polish Zloty) per night,
            depending on whether you&apos;re looking for budget or mid-range
            hotels.
          </p>
        </div>

        <div className={styles.textContainerSpain}>
          <h1
            className={styles.headerSpain}
            style={{
              marginTop: "-85px",
              fontSize: "28px",
              textAlign: "left",
              marginLeft: "15px",
            }}
          >
            Attractions & Transport
          </h1>
          <p className={styles.descriptionSpain}>
            What&apos;s more, the attractions in Poland are some of the most
            memorable in Europe. For example, the incredible Wieliczka Salt mine
            or the humbling experience of visiting Auschwitz; both of which have
            a well-priced ticket of around $25 USD (90 Polish Zloty).
          </p>
        </div>

        <div
          style={{
            width: "80%",
            height: "1px",
            backgroundColor: "#2c3e50",
            marginTop: "-70px",
            marginBottom: "20px",
            maxWidth: "1200px",
          }}
        ></div>

        <div className={styles.textContainerSpain}>
          <h1
            className={styles.headerSpain}
            style={{
              marginTop: "-20px",
              fontSize: "24px",
              textAlign: "center",
              fontWeight: 600,
            }}
          >
            Did you know that...
          </h1>
          <p
            className={styles.descriptionSpain}
            style={{
              fontSize: "18px",
              textAlign: "center",
              fontWeight: 400,
            }}
          >
            By purchasing through our links, you support us at no additional
            cost. Thank you for your support. ♥️
          </p>
        </div>

        <div className={styles.buttonContainer} style={{ textAlign: "center" }}>
          <button
            className={styles.supportButton}
            onClick={() => navigate("/support")}
          >
            Support Us
          </button>
        </div>


      </div>
    </div>
  );
};

export default TravelTips;
