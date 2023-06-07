import "./Card.css";

export const ProjectCard = (project) => `
<div class="project-card" style="background:#${project.color};">
    <a href="${project.github}">
        <div class="zoom">
            <div class="title_card">
                <h4>${project.title}</h4>
                <p>${project.description}</p>
            </div>
            <div class="img_card">
                <img src="${project.image}">
            </div>
        </div>
    </a>
</div>
`;