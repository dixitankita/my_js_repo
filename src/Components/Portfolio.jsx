/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/socials/project1.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "CALCULATOR",
    description:
      "Created a dynamic calculator utilizing HTML, CSS, and JavaScript, showcasing expertise in front-end development and effective problem-solving abilities",
    url: "https://github.com/dixitankita/Calculator.git",
  },
  {
    title: " ANIMATED LANDING PAGE",
    description:
      "I have developed a dynamic and engaging web project using HTML, CSS, and JavaScript,enhanced with Locomotive.js for a smooth scroll effect. ",
    url: "https://github.com/dixitankita/AnimatedLandingPage.git",
  },
  {
    title: "WEATHER APP ",
    description:
      "Developed a weather app utilizing HTML, CSS, and JavaScript, integrating API functionality to provide real-time weather updates. Achieved hands-on experience in front-end development and API integration through this project.",
    url: "https://github.com/dixitankita/weatherApp.git",
  },
  // {
  //   title: "Docs",
  //   description:
  //     "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
  //   url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  // },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "50%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "80vh", width: "100%", objectFit: "cover", borderRadius:"5%" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
