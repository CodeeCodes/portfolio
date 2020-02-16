import React, { useState, useEffect, useRef } from "react";
import capstoneImage from "../assets/photos/capstone-mock.png";
import portfolioImage from "../assets/photos/portfolio.png";
import particleImage from "../assets/photos/particle.png";
import gitHub from "../assets/svg/github-logo.svg";
import liveImage from "../assets/svg/live.svg";
import nextSvg from "../assets/svg/next.svg";
import prevSvg from "../assets/svg/back.svg";

export default function PrevProjects() {
  const [projects, setProjects] = useState([
    {
      name: "Sprint",
      image: `${capstoneImage}`,
      url: "https://github.com/CodeeCodes/capstone-codee-palmer",
      techStack: "React, NodeJS, ExpressJS, MongoDb",
      summary:
        "  Sprint is an app, which allows anyone new to a city or new to the exercise world, connecting people in Vancouver about running routes around the city. See what people say about that route and follow yourself as you run these routes. Have up to date weather conditions and join the chat board to organize meetups and look up local races and runs around Vancouver .This is an app based around getting people moving with confidence and hopefully get like minded people connected."
    },
    {
      name: "Personal Portfolio",
      image: `${portfolioImage}`,
      url: "https://github.com/CodeeCodes/portfolio-codee-palmer",
      liveUrl: "https://www.codeecodes.com/",
      techStack: "React, CSS, JS, GoDaddy, Netlify",
      summary:
        "My first portfolio created using ReactJS and published using Github Pages. Using my foundations learnt at BrainStation Vancouver, I've built my portfolio to showcase my skills"
    },
    {
      name: "Particle React",
      image: `${particleImage}`,
      url: "https://github.com/CodeeCodes/particle-background",
      liveUrl: "https://codeecodes.github.io/particle-background/",
      techStack: "vanillaJS, CSS, Github Pages",
      summary:
        "A background animation of particles being connected. This was created with JavaScript and a JS library p5.JS. I'm exploring libraries and refreshing my JS skills"
    }
  ]);

  //map function if using backend functionality
  const galleryImage =
    projects.map &&
    projects.map((current, index) => {
      console.log(index);
      if (index === 0) {
        return (
          <li className="carousel__slide current-slide" key={index}>
            <h2 className="projects__heading-small-main">{current.name}</h2>
            <div className="projects__div">
              <div className="projects__div-images">
                <img
                  src={current.image}
                  alt="capstone-mock"
                  className="projects__image"
                />
                <div className="projects__div-move">
                  <a href={current.url}>
                    <div className="projects__div-button">
                      <img
                        src={gitHub}
                        alt="github-logo"
                        className="projects__image-svg"
                      />
                      <h3 className="projects__heading-small">
                        View Source Code
                      </h3>
                    </div>{" "}
                  </a>
                  <a href={current.liveUrl}>
                    <div className="projects__div-button">
                      <img
                        src={liveImage}
                        alt="github-logo"
                        className="projects__image-svg"
                      />
                      <h3 className="projects__heading-small">View Site</h3>
                    </div>
                  </a>{" "}
                </div>
              </div>
              <div className="projects__div-small">
                <h3 className="projects__summary-heading">Tech-stack:</h3>
                <p className="projects__tech">{current.techStack}</p>
                <h3 className="projects__summary-heading"> SUMMARY:</h3>
                <p className="projects__summary">{current.summary}</p>
              </div>
            </div>
          </li>
        );
      } else {
        return (
          <li className="carousel__slide" key={index}>
            <h2 className="projects__heading-small-main">{current.name}</h2>
            <div className="projects__div">
              <div className="projects__div-images">
                <img
                  src={current.image}
                  alt="capstone-mock"
                  className="projects__image"
                />{" "}
                <div className="projects__div-move">
                  <a href={current.url}>
                    <div className="projects__div-button">
                      <img
                        src={gitHub}
                        alt="github-logo"
                        className="projects__image-svg"
                      />
                      <h3 className="projects__heading-small">
                        View Source Code
                      </h3>
                    </div>{" "}
                  </a>
                  <a href={current.liveUrl}>
                    <div className="projects__div-button">
                      <img
                        src={liveImage}
                        alt="github-logo"
                        className="projects__image-svg"
                      />
                      <h3 className="projects__heading-small">View Site</h3>
                    </div>
                  </a>
                </div>
              </div>
              <div className="projects__div-small">
                <h3 className="projects__summary-heading">Tech-stack:</h3>
                <p className="projects__tech">{current.techStack}</p>
                <h3 className="projects__summary-heading"> SUMMARY:</h3>
                <p className="projects__summary">{current.summary}</p>
              </div>
            </div>
          </li>
        );
      }
    });
  //carousel JS
  const refInput = useRef();
  const slider = () => {
    const track = document.querySelector(".carousel__track");
    //create array from children of div class .carousel__track
    const slides = Array.from(track.children);
    console.log(slides);
    const slideWidth = slides[0].getBoundingClientRect().width;
    //Arrange slide so that they are next to each other
    const setSlidePosition = (slide, index) => {
      slide.style.left = slideWidth * index + "px";
    };
    slides.forEach(setSlidePosition);
  };
  useEffect(() => {
    slider();
  }, []);

  // move to slide
  const moveToSlide = (track, currentSlide, nextSlide) => {
    track.style.transform = "translateX(-" + nextSlide.style.left + ")";
  };

  //when I click left, move slides to the left
  const moveLeft = () => {
    const track = document.querySelector(".carousel__track");
    const currentSlide = track.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;
    const amountToMove = prevSlide.style.left;
    currentSlide.classList.remove("current-slide");
    prevSlide.classList.add("current-slide");
    //move to next slide
    track.style.transform = "translateX(-" + amountToMove + ")";
    currentSlide.style.transition = "ease 1s";
    track.style.height = "600px";
    currentSlide.style.opacity = "0";
    prevSlide.style.opacity = "1";
    moveToSlide(track, currentSlide, prevSlide);
  };

  //when I click right move slides to the right
  const moveRight = () => {
    const track = document.querySelector(".carousel__track");
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;
    currentSlide.classList.remove("current-slide");
    nextSlide.classList.add("current-slide");
    //move to next slide
    track.style.transform = "translateX(-" + amountToMove + ")";
    track.style.height = "600px";
    currentSlide.style.transition = "ease 1s";
    currentSlide.style.opacity = "0";
    nextSlide.style.opacity = "1";
    moveToSlide(track, currentSlide, nextSlide);
  };

  //when clicked on nav indicator, move to that slide
  const changeDots = e => {
    e.persist();

    //which indicator is clicked
    console.log(e);
    const targetDot = e.target.closest("button");
    if (!targetDot) return;
    const dotNav = document.querySelector(".carousel__nav");
    const dots = Array.from(dotNav.children);
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    console.log(targetIndex);
    e.target.style.background = "lightBlue";
  };

  //hiding arrows if at end of carousel
  const hideArrows = () => {
    const track = document.querySelector(".carousel__track");
    const slides = Array.from(track.children);
    const currentSlide = track.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;
    const prevButton = document.querySelector(".carousel__button--left");
    const nextButton = document.querySelector(".carousel__button--right");
    console.log(slides[0].attributes);
    if (currentSlide.previousSibling === null) {
      prevButton.classList.add("is-hidden");
      nextButton.classList.remove("is-hidden");
    } else if (currentSlide.nextSibling === null) {
      nextButton.classList.add("is-hidden");
      prevButton.classList.remove("is-hidden");
    }
  };

  return (
    <div className="carousel">
      <h1 className="projects__heading">Projects</h1>
      <button
        className="carousel__button carousel__button--left is-hidden"
        onClick={() => {
          hideArrows();
          moveLeft();
        }}
      >
        <img src={prevSvg} alt="" />
      </button>
      <div className="carousel__track-container">
        <ul className="carousel__track" ref={refInput}>
          {galleryImage}
        </ul>
      </div>
      <button
        className="carousel__button carousel__button--right"
        onClick={() => {
          hideArrows();
          moveRight();
        }}
      >
        <img src={nextSvg} alt="" />
      </button>
      <div className="carousel__nav">
        <button className="carousel__indicator" onClick={changeDots}></button>
        <button className="carousel__indicator" onClick={changeDots}></button>
        <button className="carousel__indicator" onClick={changeDots}></button>
      </div>
    </div>
  );
}
