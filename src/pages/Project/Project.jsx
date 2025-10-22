import React from "react";
import "./Project.css";

import ParallaxImage from "../../components/ParallaxImage/ParallaxImage";
import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";

import ReactLenis from "lenis/react";

import Transition from "../../components/Transition/Transition";

const Project = () => {
  return (
    <ReactLenis root>
      <div className="page project">
        <section className="project-header">
          <AnimatedCopy
            delay={1}
            animateOnScroll={false}
            className="primary sm"
          >
            Moments
          </AnimatedCopy>
          <AnimatedCopy tag="h2" delay={1}>
            JOKER
          </AnimatedCopy>
        </section>

        <section className="project-banner-img">
          <div className="project-banner-img-wrapper">
            <ParallaxImage src="/work/joker.JPG" alt="" />
          </div>
        </section>

        <section className="project-details">
          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Captured by
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Siddharth Bhat
            </AnimatedCopy>
          </div>
        </section>

        <section className="project-images">
          <div className="project-images-container">
            <div className="project-img">
              <div className="project-img-wrapper">
                <ParallaxImage src="/project/project-1.jpg" alt="" />
              </div>
            </div>

            <div className="project-img">
              <div className="project-img-wrapper">
                <ParallaxImage src="/project/project-2.jpg" alt="" />
              </div>
            </div>

            <div className="project-img">
              <div className="project-img-wrapper">
                <ParallaxImage src="/project/project-3.jpg" alt="" />
              </div>
            </div>

            <div className="project-img">
              <div className="project-img-wrapper">
                <ParallaxImage src="/project/project-4.jpg" alt="" />
              </div>
            </div>

            <div className="project-img">
              <div className="project-img-wrapper">
                <ParallaxImage src="/project/project-5.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="next-project">
          <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
            02 - 04
          </AnimatedCopy>
          <AnimatedCopy tag="h3" animateOnScroll={true}>
            Next
          </AnimatedCopy>

          <div className="next-project-img">
            <div className="next-project-img-wrapper">
              <ParallaxImage src="/work/mj.JPG" alt="" />
            </div>
          </div>

          <AnimatedCopy tag="h4" animateOnScroll={true}>
            Micheal Jackson
          </AnimatedCopy>
        </section>
      </div>
    </ReactLenis>
  );
};

export default Transition(Project);
