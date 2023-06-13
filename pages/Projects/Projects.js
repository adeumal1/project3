import "./Projects.css";
import { cleanPage } from "../../utils/cleanPage";
import { projects } from "../../data/projects";
import { ProjectCard } from "../../components/Card/Card";

export const Projects = () => {
const main = document.querySelector("main");
cleanPage(main);
main.innerHTML = `
<section class="projects">
<div class="projects-container"></div>
</section>`;
const container = document.querySelector(".projects-container");
for (const project of projects) {
const div = document.createElement("div");
div.classList.add("figure");
div.innerHTML = ProjectCard(project);
container.appendChild(div);
}
};