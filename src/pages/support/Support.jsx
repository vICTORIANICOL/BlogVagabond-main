import { useEffect } from "react";
import styles from "./support.module.css"; 
import supportImage from "../../assets/support.jpg";

import s1 from "../../assets/support3.jpg";
import s2 from "../../assets/support4.jpg";
import s3 from "../../assets/support5.webp";
import s4 from "../../assets/support6.png";
import s5 from "../../assets/support7.jpg";
import s6 from "../../assets/support8.png";
import s7 from "../../assets/support9.jpg";
import s8 from "../../assets/support10.png";
import s9 from "../../assets/support11.png";
import s10 from "../../assets/support12.png";
import s11 from "../../assets/support13.png";
import s12 from "../../assets/support14.png";
import s13 from "../../assets/support15.png";
import s14 from "../../assets/support16.png";

const Support = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.supportContainer}>
      <div className={styles.supportHeader}>
        <img src={supportImage} alt="Support" className={styles.supportImage} />
        <div className={styles.supportOverlay} />

        {/* Container for the left and right titles */}
        <div className={styles.titleContainer}>
          <h2 className={styles.supportTitle2}>Support</h2>
          <h1 className={styles.supportTitle1}>VAGABOND</h1>
        </div>
      </div>

      <div className={styles.supportText}>
        <h3 className={styles.supportHeading}>By Supporting VAGABOND...</h3>
        <div className={styles.supportParagraph}>
          you help us continue our journey and create more exciting content. Use
          our exclusive <span style={{ color: "rgb(215, 55, 55)" }}>code</span>{" "}
          when booking your hotels, meals, cars, or flights. Every booking made
          through us directly supports our mission to bring you more incredible
          travel experiences and inspiring stories.
        </div>

        <div className={styles.supportDiscount}>
          Use our VAGABONDDK code for embracing -10% discount
        </div>
      </div>

      <div className={styles.supportLogos}>
        <div className={styles.logoCard}>
          <img src={s1} alt="Support Logo 1" className={styles.logo} />
          <p
            className={styles.logoText}
            onClick={() => window.open("https://heymondo.com/", "_blank")}
          >
            VAGABONDDK
          </p>
        </div>
        <div className={styles.logoCard}>
          <img src={s2} alt="Support Logo 2" className={styles.logo} />
          <p
            className={styles.logoText}
            onClick={() => window.open("https://www.sunnycars.com/", "_blank")}
          >
            VAGABONDDK
          </p>
        </div>
        <div className={styles.logoCard}>
          <img src={s3} alt="Support Logo 3" className={styles.logo} />
          <p
            className={styles.logoText}
            onClick={() =>
              window.open(
                "https://da.hotels.com/?locale=da_DK&pos=HCOM_DK&siteid=300000013",
                "_blank"
              )
            }
          >
            VAGABONDDK
          </p>
        </div>
        <div className={styles.logoCard}>
          <img src={s4} alt="Support Logo 4" className={styles.logo} />
          <p
            className={styles.logoText}
            onClick={() =>
              window.open(
                "https://all.accor.com/a/en/brands/ibis.html",
                "_blank"
              )
            }
          >
            VAGABONDDK
          </p>
        </div>
        <div className={styles.logoCard}>
          <img src={s5} alt="Support Logo 5" className={styles.logo} />
          <p
            className={styles.logoText}
            onClick={() => window.open("https://wolt.com/", "_blank")}
          >
            VAGABONDDK
          </p>
        </div>
        <div className={styles.logoCard}>
          <img src={s6} alt="Support Logo 6" className={styles.logo} />
          <p
            className={styles.logoText}
            onClick={() => window.open("https://www.booking.com/", "_blank")}
          >
            VAGABONDDK
          </p>
        </div>
        <div className={styles.logoCard}>
          <img src={s7} alt="Support Logo 7" className={styles.logo} />
          <p
            className={styles.logoText}
            onClick={() =>
              window.open(
                "https://www.johnsofromford.co.uk/food-delivery",
                "_blank"
              )
            }
          >
            VAGABONDDK
          </p>
        </div>
        <div className={styles.logoCard}>
          <img src={s8} alt="Support Logo 8" className={styles.logo} />
          <p
            className={styles.logoText}
            onClick={() => window.open("https://www.cardeal.dk/", "_blank")}
          >
            VAGABONDDK
          </p>
        </div>
        <div className={styles.logoCard}>
          <img src={s9} alt="Support Logo 9" className={styles.logo} />
          <p
            className={styles.logoText}
            onClick={() =>
              window.open("https://www.budget.com/en/home", "_blank")
            }
          >
            VAGABONDDK
          </p>
        </div>
        <div className={styles.logoCard}>
          <img src={s10} alt="Support Logo 10" className={styles.logo} />
          <p
            className={styles.logoText}
            onClick={() =>
              window.open("https://www.onlycars.com.au/", "_blank")
            }
          >
            VAGABONDDK
          </p>
        </div>
        <div className={styles.logoCard}>
          <img src={s11} alt="Support Logo 11" className={styles.logo} />
          <p
            className={styles.logoText}
            onClick={() =>
              window.open("https://www.cignaglobal.com/", "_blank")
            }
          >
            VAGABONDDK
          </p>
        </div>
        <div className={styles.logoCard}>
          <img src={s12} alt="Support Logo 12" className={styles.logo} />
          <p
            className={styles.logoText}
            onClick={() => window.open("https://www.europaeiske.dk/", "_blank")}
          >
            VAGABONDDK
          </p>
        </div>
        <div className={styles.logoCard}>
          <img src={s13} alt="Support Logo 13" className={styles.logo} />
          <p
            className={styles.logoText}
            onClick={() => window.open("https://news.klm.com/", "_blank")}
          >
            VAGABONDDK
          </p>
        </div>
        <div className={styles.logoCard}>
          <img src={s14} alt="Support Logo 14" className={styles.logo} />
          <p
            className={styles.logoText}
            onClick={() => window.open("https://www.flysas.com/", "_blank")}
          >
            VAGABONDDK
          </p>
        </div>
      </div>

      <p className={styles.supportText}>
        When you book hotels, meals, car rentals, or flights with our special
        codes, you&apos;re contributing to the growth of Vagabond and helping us
        continue this exciting journey. Plus, we partner with some of the most
        trusted brands in travel to ensure you have the best deals available
      </p>

      {/*donation*/}
      <div className={styles.donationCard}>
        <h3 className={styles.donationTitle}>Buy Me a Coffee ☕</h3>
        <select className={styles.inputField} id="amount" defaultValue="">
          <option value="">40 (DKK)</option>
          {[...Array(100)].map(
            (
              _,
              i //create options for 1 to 100 coffes //value is the number of coffes
            ) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} {i + 1 === 1 ? "coffee" : "coffees"} ({(i + 1) * 40}{" "}
                DKK)
              </option>
            )
          )}
        </select>
        <input
          type="text"
          placeholder="First Name"
          className={styles.inputField}
          id="firstName"
        />
        <input
          type="text"
          placeholder="Last Name"
          className={styles.inputField}
          id="lastName"
        />
        <select className={styles.inputField} id="gender">
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input
          type="number"
          placeholder="Age"
          className={styles.inputField}
          min="1"
          id="age"
        />
        <button
          className={styles.donationButton}
          onClick={() => {
            //when button is clicked
            const coffees = document.getElementById("amount").value; //get the nr of coffes
            const amount = coffees * 40; // Calculate total amount (40 DKK per coffee)
            const firstName = document.getElementById("firstName").value; //get the first name
            const lastName = document.getElementById("lastName").value;
            const gender = document.getElementById("gender").value;
            const age = document.getElementById("age").value;

            console.log("Donation Details:", {
              coffees: coffees + " coffee(s)", //log the details
              amount: amount + " DKK", //log the amount
              firstName,
              lastName,
              gender,
              age,
            });
          }}
        >
          Buy me a Coffee
        </button>
      </div>
    </div>
  );
};

export default Support;
