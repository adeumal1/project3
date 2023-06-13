import './style.css';
import { linkPage } from "./utils/linkPage";
import { Navbar } from "./components/Navbar/Navbar";
import { hamburgerResponsive} from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { Projects } from "./pages/Projects/Projects";
import { Experience } from "./pages/Experience/Experience";
import { getTitle } from "./components/TitleChange/TitleChange";
import { Footer } from "./components/Footer/Footer";

getTitle();

const header = document.querySelector("header");
header.innerHTML = Navbar();

hamburgerResponsive();

linkPage("#homelink", Home);

linkPage("#projectslink", Projects);

linkPage("#experiencelink", Experience);

Home();

const footer = document.querySelector("footer");
footer.innerHTML = Footer();

