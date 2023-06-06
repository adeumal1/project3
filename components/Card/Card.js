import "./Card.css";

export const ProjectCard = (project) => `
<div class="project-card" style="background:#${project.color};">
    <div class="title_card">
        <h4>${project.title}</h4>
        <p>${project.description}</p>
    </div>
    <img src="./public/img/smartphone-apps.gif">
</div>
`;