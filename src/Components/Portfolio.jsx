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
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Full stack trading app - Zerodha Clone",
    description: "A MERN-stack trading platform simulating core functionalities of real-world stock trading. It provides users with real-time stock data visualization, buying/selling capabilities, and portfolio tracking.",
    url: "https://mern-zerodha.netlify.app/",
  },
  {
    title: "Naye Pankh Fundraising Portal",
    description:"A dedicated platform designed to connect interns with funding opportunities for their projects. The portal simplifies the application process and enhances accessibility for aspiring professionals.",
    url: "https://naye-pankh.netlify.app/",
  },
  {
    title: "Spend Smartly Expense Tracker",
    description:"An intuitive app designed to help users manage their finances effectively by tracking expenses and income. It empowers users to make informed financial decisions and promotes smarter spending habits.",
    url: "https://spend-smartly.netlify.app/",
  },
  {
    title: "Sharp Mail",
    description:
      "A user-friendly mailbox client that allows users to send and receive emails seamlessly. With features such as email organization, multi-account support, and customizable notifications, it enhances productivity and simplifies email management.",
    url: "https://sharp-mail.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
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
