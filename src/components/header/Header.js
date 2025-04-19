import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  contactInfo,
  blogSection,
  talkSection,
  achievementSection,
  resumeSection
} from "../../config";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences?.display || false;
  const viewOpenSource = false; // openSource removed
  const viewSkills = skillsSection?.display || false;
  const viewAchievement = achievementSection?.display || false;
  const viewBlog = blogSection?.display || false;
  const viewTalks = talkSection?.display || false;
  const viewResume = resumeSection?.display || false;
  const viewContact = contactInfo?.display || false;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}
          {viewOpenSource && false && (
            <li>
              <a href="#opensource">Open Source</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">Blogs</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">Talks</a>
            </li>
          )}
          {viewResume && greeting.resumeLink && (
            <li>
              <a href={greeting.resumeLink} target="_blank" rel="noopener noreferrer">Resume</a>
            </li>
          )}
          {viewResume && !greeting.resumeLink && (
            <li>
              <a href="#resume">Resume</a>
            </li>
          )}
          {viewContact && (
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          )}
          <li>
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
