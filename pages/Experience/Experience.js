import "./Experience.css";
import { cleanPage } from "../../utils/cleanPage";
import { experience } from "../../data/experience";
import { ExperienceCard } from "../../components/ExperienceCard/ExperienceCard";

export const Experience = () => {
    const main = document.querySelector("main");
    cleanPage(main);
    main.innerHTML = `
      <div class="container_experience">
      </div>
    `;
    const container = document.querySelector(".container_experience");
    for (const job of experience) {
    const div = document.createElement("div");
    div.classList.add("cont");
    div.innerHTML = ExperienceCard(job);
    container.appendChild(div);
    }
};