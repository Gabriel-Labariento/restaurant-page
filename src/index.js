import "./styles.css";
import {pageLoad} from "./initial.js";
import { displayMenu } from "./menu.js";
import { displayAbout } from "./about.js";
pageLoad();

const homeButton = document.querySelector(".home-button");
const menuButton = document.querySelector(".menu-button");
const aboutButton = document.querySelector(".about-button");

homeButton.addEventListener("click", () => pageLoad());
menuButton.addEventListener("click", () => displayMenu());
aboutButton.addEventListener("click", () => displayAbout());    
