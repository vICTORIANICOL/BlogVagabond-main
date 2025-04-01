import { useState } from "react";
import styles from "./footer.module.css";
import booking from "../../assets/booking.png";
import expedia from "../../assets/expedia.png";
import hotels from "../../assets/hotels.webp";
import vikingdk from "../../assets/hotelviking.png";
import rejsegarantifonden from "../../assets/rejsegarantifonden.png";
import wolt from "../../assets/wolt.png";

const Footer = () => {
 const [sponsors] = useState([
   { id: 1, name: "Booking.com", logo: booking, url: "https://www.booking.com"},
   { id: 2, name: "Expedia", logo: expedia, url: "https://www.expedia.com" },
   { id: 3, name: "Hotels.com", logo: hotels, url: "https://www.hotels.com" },
   { id: 4, name: "Hotel Viking Denmark", logo: vikingdk, url: "https://hotelviking.dk"},
   { id: 5, name: "Rejsegarantifonden", logo: rejsegarantifonden, url: "https://www.rejsegarantifonden.dk"},
   { id: 6, name: "Wolt", logo: wolt, url: "https://www.wolt.com" },
 ]);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>ABOUT VAGABOND</h3>
          <p>
            Capturing the emotion and experience of adventures throughout the
            world.
          </p>
        </div>

        <div className={styles.footerSection}>
          <h3>CONTACT</h3>
          <p>Email: info@vagabond.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>

        <div className={styles.footerSection}>
          <h3>OUR PARTNERS</h3>
          <div className={styles.sponsorsGrid}>
            {sponsors.map((sponsor) => (
              <div key={sponsor.id} className={styles.sponsorItem}>
                <a 
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={sponsor.logo} alt={sponsor.name} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>
          &copy; {new Date().getFullYear()} Victoria Nicolenco
        </p>
        <p>
          CSS desktop and responsive web design by Victoria Nicolenco. All photographs,
          illustrations, sketches created by Marius Lisacovschi.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
