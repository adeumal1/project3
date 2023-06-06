import "./Navbar.css";

export const Navbar = () => `
<nav class="navbar">
    <div class="logo">
        <a href="/" class="logo"><i class="fa-solid fa-circle"></i> Aleix</a>
    </div>
    <div class="list-nav">
        <ul>
            <li ><a href="#" id="homelink">Home</a></li>
            <li ><a href="#" id="experiencelink">Experience</a></li>
            <li ><a href="#" id="projectslink">Projects</a></li>
        </ul>
    </div>
   
    <div id="menu" class="fas fa-bars"></div>
</nav>
`;

export const hamburgerResponsive = () => {
    const list = document.querySelector(".list-nav");
    list.style.display = "none";
    const hamburger = document.querySelector("#menu");
    const main = document.querySelector("main");
    main.style.display = "block";

    const toggle = () => {
        if (list.style.display === "none") {
            list.style.display = "block";
            main.style.display = "none";
        } else {
            list.style.display = "none";
            main.style.display = "block";
        }
    };

    const home = document.querySelector("#homelink");
    const experiencelink = document.querySelector("#experiencelink");
    const projectslink = document.querySelector("#projectslink");
    hamburger.addEventListener("click", toggle);
    home.addEventListener("click", toggle);
    experiencelink.addEventListener("click", toggle);
    projectslink.addEventListener("click", toggle);
};

