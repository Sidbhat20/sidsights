import React, { useState, useEffect } from "react";
import "./About.css";

import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import { getImagePath } from "../../utils/getImagePath";

import ReactLenis from "lenis/react";

import Transition from "../../components/Transition/Transition";

const About = () => {
  // Array of available images from Sidsights folder
  const availableImages = [
    "/about/IMG_5909.JPG",
    "/about/IMG_5916.JPG",
    "/about/IMG_9857.JPG",
    "/about/IMG_9854.JPG",
    "/about/IMG_9849.JPG",
    "/about/IMG_9843.JPG",
    "/about/IMG_9983.JPG",
  ];

  // Function to get 6 random unique images with proper paths
  const getRandomImages = () => {
    const shuffled = [...availableImages].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 6).map(img => getImagePath(img));
  };

  const [toolImages, setToolImages] = useState(getRandomImages());

  useEffect(() => {
    // Update images on component mount
    setToolImages(getRandomImages());
  }, []);

  return (
    <ReactLenis root>
      <div className="page about">
        <section className="about-header">
          <h1>Est</h1>
          <h1>2020</h1>
        </section>

        <section className="about-hero">
          <div className="about-hero-img">
            <img src={getImagePath("/about/IMG_9850.JPG")} alt="" />
          </div>
        </section>


        <section className="about-me-copy">
          <div className="about-me-copy-wrapper">
            <AnimatedCopy animateOnScroll={true} tag="h3">
              I'm Siddharth Bhat — a filmmaker, photographer, and a student of Computer Science and Mathematics.
              Two worlds that might seem different, but for me, both chase the same thing — patterns, meaning, and truth.
            </AnimatedCopy>

            <AnimatedCopy animateOnScroll={true} tag="h3">
              My story with the camera began in 2020, following the quiet footsteps of my father — the one who always carried a lens. What started as imitation grew into instinct. Since then, I've photographed events, portraits, and stories that breathe between moments. I've directed ads, captured motion, and built narratives that live in silence as much as in sound.
            </AnimatedCopy>

            <AnimatedCopy animateOnScroll={true} tag="h3">
              For me, filmmaking isn't just a craft — it's a way of noticing. The flicker of light on someone's face, the way time pauses before emotion arrives.
              Whether I'm behind a lens or in front of a screen full of code, I'm searching for the same thing: connection.
            </AnimatedCopy>

            <AnimatedCopy animateOnScroll={true} tag="h3">
              Every frame, every cut, every story is a reminder — that even logic has rhythm, and even numbers can feel.
            </AnimatedCopy>
          </div>
        </section>        <section className="services">
          <div className="services-col">
            <div className="services-banner">
              <img src={getImagePath("/about/sidprofile.jpg")} alt="" />
            </div>
            <p className="primary">Crafted with Intention</p>
          </div>
          <div className="services-col">
            <h4>
              Every project is a chance to explore new visual language, push
              creative boundaries, and tell stories that feel real. I approach
              each film with care, precision, and purpose.
            </h4>

            <div className="services-list">
              <div className="service-list-row">
                <div className="service-list-col">
                  <h5>Filmmaking</h5>
                </div>
                <div className="service-list-col">
                  <p>
                    From short films to personal narratives, my work is driven
                    by emotion and atmosphere. I handle direction,
                    cinematography, and editing — crafting each piece with a
                    filmmaker’s eye for mood, movement, and meaning.
                  </p>
                </div>
              </div>

              <div className="service-list-row">
                <div className="service-list-col">
                  <h5>Visual Storytelling</h5>
                </div>
                <div className="service-list-col">
                  <p>
                    I create visuals that speak — whether it’s a quiet moment or
                    a bold idea. My work blends aesthetic choices with story
                    clarity, making sure the emotional core always comes
                    through.
                  </p>
                </div>
              </div>

              <div className="service-list-row">
                <div className="service-list-col">
                  <h5>Creative Direction</h5>
                </div>
                <div className="service-list-col">
                  <p>
                    From ideation to final cut, I guide the visual and narrative
                    tone of every project. I bring a cohesive, cinematic vision
                    that aligns story, style, and intention — grounded in
                    authenticity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-banner-img">
          <div className="about-banner-img-wrapper">
            <img src={getImagePath("/about/about-banner.jpg")} alt="" />
          </div>
        </section>

        <section className="fav-tools">
          <div className="fav-tools-header">
            <AnimatedCopy tag="h2" animateOnScroll={true} delay={0.25}>
              Sidsights
            </AnimatedCopy>
          </div>

          <div className="fav-tools-list">
            <div className="fav-tools-list-row">
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src={toolImages[0]} alt="" />
                </div>
              </div>
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src={toolImages[1]} alt="" />
                </div>
              </div>
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src={toolImages[2]} alt="" />
                </div>
              </div>
            </div>
            <div className="fav-tools-list-row">
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src={toolImages[3]} alt="" />
                </div>
              </div>
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src={toolImages[4]} alt="" />
                </div>
              </div>
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src={toolImages[5]} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactForm />

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Transition(About);
