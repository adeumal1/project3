import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
    const main = document.querySelector("main");
    cleanPage(main);
    main.innerHTML = `
    <div class="main-content">
        <div class="main-home__img">
            <img src="/img/avatar.png" alt="avatar"></img> 
        </div>
        <div class="main-home">
            <div class="main-home__content">
                <span class="title-main">Hello, I’m Aleix, a website Designer With 2 years of experience.</span>     
                <p>I care a lot about using design for positive impact. and enjoy creating user-centric, delightful, and human experiences.</p>
            </div>
            <div class="main-home__content2">
                <div class="button-contact__main">
                    <a class="btn-contact">Contact me</a>
                </div>
                <div class="button-sn__main">
                    <a class="btn-github"><i class="fa-brands fa-github"></i></a>
                    <a class="btn-instagram"><i class="fa-brands fa-instagram"></i></a>
                    <a class="btn-twitter"><i class="fa-brands fa-twitter"></i></a>
                    <a class="btn-linkedin"><i class="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    </div>
    `;
};