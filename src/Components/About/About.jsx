import React from "react";
import "./About.css";
import { Type } from "./Type";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaTwitter } from 'react-icons/fa';
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";

export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">GURANK VERMA</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          Passionate and creative Front-end Developer having proficiency in
          MERN Stack. Attired with a variety of tools & technologies and keen to
          learn new ones.
          <br />
          “To obtain a challenging Front-end Developer position where my creativity, problem-solving skills, and experience in Front-end engaging and user-friendly interfaces can be utilized to enhance 
User experience and drive business objectives.”

        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/gurank789"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <FaGithub />
          </a>
          <a
            href="gurank7890verma@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <FaEnvelope />
          </a>
          <a
            href="tel:+919455000373"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <FaPhone />
          </a>
          <a
            href="https://www.linkedin.com/in/gurank-verma-212283261/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/GurankV64163"
            aria-label="twitter"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
        </div>

        <button
          className="btnResume"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1b_cIYNVvfnZATlkmi_-GnVEBKK7JwhfC/view?usp=sharing"
            );
          }}
        >
          Resume
        </button>
      </div>
      <Introduction />
      <Timeline />
      <section id="skills">
        <Techstacks />
      </section>
    </>
  );
};