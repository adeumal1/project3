import './style.css';
import { linkPage } from "./utils/linkPage";
import { Navbar } from "./components/Navbar/Navbar";
import { hamburgerResponsive} from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { Projects } from "./pages/Projects/Projects";
import { getTitle } from "./components/TitleChange/TitleChange";


getTitle();

const header = document.querySelector("header");
header.innerHTML = Navbar();

hamburgerResponsive();

linkPage("#homelink", Home);

linkPage("#projectslink", Projects);

Home();
