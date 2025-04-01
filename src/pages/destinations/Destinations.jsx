import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./destinations.module.css";
import videoSrc from "../../assets/video.mp4";
import zakynthosImg from "../../assets/zakynthos.jpg";
import norwayImg from "../../assets/norway.JPG";
import creteImg from "../../assets/crete.jpg";
import australiaImg from "../../assets/australia.JPG";

const Destinations = () => {
  const [showTitle, setShowTitle] = useState(false); //manages visibility of the title and pharagraph text
  const [showParagraph, setShowParagraph] = useState(false); //manages visibility of the title and pharagraph
  const [showGradient, setShowGradient] = useState(false);//manages visibility of the gradient overlay
  const [showBoxes, setShowBoxes] = useState(false);//manages visibility of the boxes
  const [videoTranslate, setVideoTranslate] = useState(0);//manages position of the video

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    const handleScroll = () => {
      //function to handle the scroll efect
      const titleElement = document.getElementById("scroll-title");
      const paragraphElement = document.getElementById("scroll-paragraph");
      const boxContainer = document.getElementById("box-container");
      const gradientContainer = document.getElementById("gradient-container");

      if (titleElement) {
        //checks if the title elem is in viewport
        setShowTitle(
          titleElement.getBoundingClientRect().top < window.innerHeight * 0.7 //if the title is in the viewport, it sets the showtitle to true
        );
      }

      if (paragraphElement) {
        setShowParagraph(
          paragraphElement.getBoundingClientRect().top <
            window.innerHeight * 0.7
        );
      }

      if (boxContainer) {
        setShowBoxes(
          boxContainer.getBoundingClientRect().top < window.innerHeight * 0.8
        );
      }

      if (gradientContainer) {
        const gradientPosition = gradientContainer.getBoundingClientRect().top; //checks if the gradient is in viewport
        setShowGradient(gradientPosition < window.innerHeight * 0.9); //if is in the viewport, then it sets to true

        if (gradientPosition <= 0) {
          //if the grad is in viewport, it sets  the videoTranslate to the absolute value of the gradient position
          setVideoTranslate(Math.abs(gradientPosition)); //this makes the video to move up
        } else {
          setVideoTranslate(0); //if the gradient is not in the viewport, the videoTranslate is set to 0
        }
      }
    };

    window.addEventListener("scroll", handleScroll); //event listener to handle the scroll effect
    return () => window.removeEventListener("scroll", handleScroll); //removes the event listener when the component unmounts
  }, []);

  return (
    <section className={styles.videoSection}>
      {/* Background Video */}
      <div
        className={styles.gradientOverlay}
        id="gradient-container"
        style={{ opacity: showGradient ? 1 : 0 }}
      ></div>

      <video
        autoPlay
        loop
        muted
        className={styles.backgroundVideo}
        style={{ transform: `translateY(-${videoTranslate}px)` }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Logo */}
      <div className={styles.logoName}>
        <h1 className={styles.logoAnime}>VAGABOND</h1>
      </div>

      {/* Scroll-In Text */}
      <div className={styles.textContainer}>
        <h2
          id="scroll-title"
          className={`${styles.scrollText} ${showTitle ? styles.visible : ""}`}
        >
          <span style={{ fontSize: "1.5em" }}>DISCOVER</span> <br /> UNCHARTED
          DESTINATIONS
        </h2>

        <p
          id="scroll-paragraph"
          className={`${styles.paragraphText} ${
            showParagraph ? styles.visible : ""
          }`}
        >
          Explore the hidden gems of the world, where adventure awaits
        </p>
      </div>

      {/* Black Gradient Section (Now contains Boxes) */}
      <div className={styles.blackSection}>
        <div
          id="box-container"
          className={`${styles.boxContainer} ${
            showBoxes ? styles.visible : ""
          }`}
        >
          <p className={styles.boxText}>
            YOUR JOURNEY <br /> BEGINS HERE{" "}
          </p>

          <div className={styles.boxWrapper}>
            <Link to="/zakynthos" className={styles.redBox}>
              <img src={zakynthosImg} alt="Zakynthos" />
              <div className={styles.boxTitle}>Zakynthos</div>
            </Link>

            <Link to="/norway" className={styles.redBox}>
              <img src={norwayImg} alt="Norway" />
              <div className={styles.boxTitle}>Norway</div>
            </Link>

            <Link to="/crete" className={styles.redBox}>
              <img src={creteImg} alt="Crete" />
              <div className={styles.boxTitle}>Crete</div>
            </Link>

            <Link to="/australia" className={styles.redBox}>
              <img src={australiaImg} alt="Australia" />
              <div className={styles.boxTitle}>Australia</div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
