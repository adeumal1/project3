import "./ExperienceCard.css";

export const ExperienceCard = (job) => `
<div class="experience-card">
   <h2>${job.job}</h2>
   <h3>Company: ${job.company}</h3>       
</div>
`;