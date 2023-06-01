import "./Projects.css";
import { cleanPage } from "../../utils/cleanPage";

export const Projects = () => {
    const main = document.querySelector("main");
    cleanPage(main);
    main.innerHTML = `
    <h2>Featured Projects</h2>
    `;
};