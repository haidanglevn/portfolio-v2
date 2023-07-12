import React from "react";
import styles from "../styles/Projects.module.css";
import exoveMain from "../assets/projectExove/main.png";
import countriesMain from "../assets/projectCountries/main.png";
import moviesMain from "../assets/projectMovies/seats.png";
import recipeMain from "../assets/projectTasteIt/allRecipes.png";
import travelMain from "../assets/projectTravel/planner.png";
import speedgameMain from "../assets/projectSpeedgame/main.png";
import github from "../assets/Github.svg";
import web from "../assets/web.svg";
import webInactive from "../assets/webinactive.svg";

function Projects() {
  const projects = [
    {
      image: exoveMain,
      title: "Exove Collegue Feedback",
      tags: [
        "TypeScript",
        "React",
        "Material UI",
        "ExpressJS",
        "MongoDB",
        "OpenLDAP",
        "Team Project",
      ],
      text: "A fullstack app made in collaboration with Exove to create a solution for the company's colleague feedback process. This two-man team project is made with React front-end and ExpressJS back-end. Main features are OpenLDAP authentication, notification system, feedback authorization and graph creation.",
      githubLink:
        "https://github.com/Colleague-Feedback-Team-1/colleague-feedback-frontend",
      livePage: null,
    },
    {
      image: countriesMain,
      title: "Countries App with React & Redux",
      tags: [
        "React",
        "Redux",
        "Bootstrap",
        "Sass",
        "Firebase",
        "API",
        "Toastify",
      ],
      text: "A countries app made in React Advance class in Full-stack Developer program in Helsinki Business College. Using REST Country API, the app is a practice of using Redux with React to better manage states, and trying different ways to style UI elements with Bootstrap and SASS.",
      githubLink: "https://github.com/haidanglevn/countries-react",
      livePage: "https://countries-react-haidanglevn.netlify.app/countries",
    },
    {
      image: moviesMain,
      title: "Movie Theater App",
      tags: [
        "TypeScript",
        "React",
        "JSON server",
        "API",
        "Firebase",
        "Movie Theater",
        "Seat map",
        "Buying Tickets",
      ],
      text: "This app is a project in REACT22S TypeScript class. The app uses The Movie Database API for the movies's information, stores them in a local database served by JSON-server. User can see each movie's details and buy a ticket if there is available seats. The bought tickets can be found in user profile, which can be logged in by Google Authentication provided by Firebase.",
      githubLink: "https://github.com/haidanglevn/MovieTheaterApp-ts",
      livePage: null,
    },
    {
      image: recipeMain,
      title: "TasteIt Recipe App",
      tags: [
        "React",
        "JSON server",
        "Recipe",
        "REST Country API",
        "Country Flags API",
      ],
      text: "TasteIT is recipe app made in REACT22S group React lessons. The app serves all the recipes from a local JSON databases, and recipes can be sorted by name and country of origin. The countries are from REST Country API, and their flags are fetched from CountryFlagsAPI.",
      githubLink: "https://github.com/haidanglevn/react-tasteit",
      livePage: null,
    },
    {
      image: travelMain,
      title: "Travel Planner App",
      tags: [
        "React",
        "Firebase",
        "Authentication",
        "Planner",
        "Team Project",
        "WeatherAPI",
        "MapBox API",
      ],
      text: "A tablet-layout travel planner web app in React. This is a team project for the basic React app, where students practice basic React concepts like routing, components and working with APIs. Main features are weather info for all Finnish cities, Google authentication and travel planner page. ",
      githubLink: "https://github.com/haidanglevn/BCH_Team5_TravelPlanner",
      livePage: "https://delightful-sherbet-1b7473.netlify.app/",
    },
    {
      image: speedgameMain,
      title: "Halloween Speed Game",
      tags: [
        "JavaScript",
        "HTML",
        "CSS",
        "Halloween",
        "Scoreboard",
        "Game",
        "Adjust Difficulties",
      ],
      text: "A Halloween-themed speed game made in pure Javascript, HTML & CSS. Player can change the name on the scoreboard and difficulties. Scores is stored on local storage. This is the most fun and my most proud project in the early day of coding. Try it and have fun!",
      githubLink: "https://github.com/haidanglevn/",
      livePage: "https://public.bc.fi/s2200738/speedgame/",
    },
  ];
  return (
    <div className={styles.projects_section}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.projects_wrapper}>
        {projects.map((project) => {
          return (
            <div className={styles.project_card}>
              <img
                src={project.image}
                alt=""
                className={styles.project_card_img}
              />
              <h2>{project.title}</h2>
              <div className={styles.tags_wrapper}>
                {project.tags.map((tag) => {
                  return <div className={styles.card_tags}>{tag}</div>;
                })}
              </div>
              <p className={styles.card_text}>{project.text}</p>
              <div className={styles.buttons_wrapper}>
                <div>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className={`${styles.button_left} ${styles.active_button}`}
                    >
                      <img
                        src={github}
                        alt="button-icon"
                        className={styles.button_icon}
                      />
                      GitHub Repository
                    </button>
                  </a>
                  {project.livePage ? (
                    <a
                      href={project.livePage}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className={`${styles.button_left} ${styles.active_button}`}
                      >
                        <img
                          src={web}
                          alt="button-icon"
                          className={styles.button_icon}
                        />
                        Live Web Page
                      </button>
                    </a>
                  ) : (
                    <button
                      className={`${styles.button_left} ${styles.inactive_button}`}
                    >
                      <img
                        src={webInactive}
                        alt="button"
                        className={styles.button_icon}
                      />
                      Live Web Page
                    </button>
                  )}
                </div>
                <button className={styles.button_right}>Read more</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
