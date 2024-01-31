import React from 'react';
import '../css/home.scss';
import bigStar from '../images/big-star.png';
import smallStar from '../images/small-star.png';
import phone from '../images/phone.svg';
import mail from '../images/mail.svg';
import address from '../images/address.svg';
import linkedin from '../images/linkedin.svg';
import PDF from '../files/resume.pdf';

const Home = () => {
  return (
    <div className="main__wrapper">
        <div className="home__background">
            <svg id="main__wrapper-background" width="100%" height="100%" viewBox="0 0 1920 1070" fill="#F4F0ED" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_33_29" maskUnits="userSpaceOnUse" x="0" y="0" width="1920" height="1080">
                <rect width="1920" height="1080" fill="#F4F0ED"/>
                </mask>
                <g mask="url(#mask0_33_29)">
                <path id="blob1" fill-rule="evenodd" clip-rule="evenodd" d="M548.12 844.383C774.438 836.822 981.745 948.407 1059.94 1121.52C1148.85 1318.36 1137.72 1561.11 925.559 1680C723.924 1792.99 465.709 1687.62 278.05 1559.66C132.09 1460.13 95.1161 1300.07 151.066 1151.89C210.413 994.711 346.359 851.124 548.12 844.383Z" fill="#DEDDEA"/>
                <path id="blob2" fill-rule="evenodd" clip-rule="evenodd" d="M-113.748 118.827C38.9637 122.576 175.558 220.378 247.621 336.46C306.932 432.003 232.826 540.64 214.668 647.858C200.87 729.329 215.054 815.502 155.578 879.94C89.7429 951.268 -10.6564 983.322 -113.748 1003.68C-258.903 1032.34 -438.365 1109.06 -543.176 1017.9C-648.027 926.71 -531.446 776.016 -522.862 647.858C-515.205 533.539 -570.002 413.487 -496.311 318.197C-410.4 207.104 -268.61 115.025 -113.748 118.827Z" fill="#EBA08B"/>
                <path id="blob3" fill-rule="evenodd" clip-rule="evenodd" d="M1759.17 689.975C1829.2 663.106 1926.17 628.466 1986.85 667.617C2054.27 711.127 2001.81 807.649 2039.27 870.717C2066.33 916.291 2161.69 926.074 2170.14 976.228C2178.86 1027.92 2097.06 1061.95 2079.98 1112.24C2063.93 1159.52 2113.17 1219.78 2074.65 1257.5C2035.84 1295.5 1944.5 1256.46 1899.14 1289.3C1828.74 1340.26 1842.42 1449.98 1759.17 1485.87C1687.7 1516.67 1582.91 1495.86 1523.43 1451.26C1460.45 1404.04 1488.11 1315.93 1449.54 1253.7C1420.23 1206.4 1327.26 1186.06 1326.23 1133.08C1325.12 1076.02 1418.97 1047.28 1444.5 994.128C1465.22 951.01 1424.33 894.364 1458.65 857.453C1492.79 820.743 1569.04 836.023 1615.71 810.017C1673.01 778.082 1696.36 714.076 1759.17 689.975Z" fill="#D0C3DC"/>
                <path id="blob4" fill-rule="evenodd" clip-rule="evenodd" d="M1557.59 -521.913C1714.94 -534.763 1889.07 -584.535 2021.62 -528.148C2154.52 -471.612 2158.62 -349.063 2198.33 -249.348C2235.32 -156.446 2272.99 -64.1806 2243.82 29.8824C2211.84 133.001 2167.85 251.595 2026.81 303.735C1887.26 355.323 1710.38 315.775 1557.59 283.566C1440.19 258.818 1375.31 183.125 1267.86 143.746C1137.99 96.151 944.581 113.455 867.553 30.6839C790.04 -52.6087 842.401 -162.997 898.429 -253.225C951.796 -339.167 1050.4 -409.375 1171.45 -458.718C1286.63 -505.665 1422.57 -510.886 1557.59 -521.913Z" fill="#D4E5D5"/>
                </g>
            </svg>
            <div className="home__wrapper-text home-text--center">
                <div className="home-text--first">
                    <div className="stars--left">
                        <img  src={bigStar} alt="star" className="big-star" />
                        <img  src={smallStar} alt="star" className="small-star--left" />
                        <img  src={smallStar} alt="star" className="small-star--right" />
                    </div>
                    <div>alexia</div>
                    <div className="stars--right">
                        <img  src={bigStar} alt="star" className="big-star" />
                        <img  src={smallStar} alt="star" className="small-star--left" />
                        <img  src={smallStar} alt="star" className="small-star--right" />
                    </div>
                </div>
                <div>armando</div>
                <div className="home-text--sub">WEB DEVELOPER</div>
            </div>
        </div>


        
        <div className="content__wrapper">

            {/* About */}
            <div className="content__about">
                <div className="content__about--left">
                    <div className="content__about-title text--title">hello!</div>
                    <div className="content__about-description text--normal">
                        I am Maria Alexia Armando, a web developer specializing in both front-end and back-end web development based in the Philippines. I have extensive experience with Laravel and Vue.js.
                    </div>
                    <div className="content__about-button"><a href={PDF} target="_blank" rel="noreferrer nofollow" className="text--normal">View Résumé</a></div>
                </div>
                <div className="content__about--right">
                    <div className="contacts__item">
                        <div className="contacts__item-child">
                            <img  src={phone} alt="phone" />
                        </div>
                        <div className="contacts__item-child text--normal">
                            +63 935 350 3567
                        </div>
                    </div>
                    <div className="contacts__item">
                        <div className="contacts__item-child">
                            <img  src={mail} alt="mail" />
                        </div>
                        <div className="contacts__item-child text--normal">
                            alexiaarmando04@gmail.com
                        </div>
                    </div>
                    <div className="contacts__item">
                        <div className="contacts__item-child">
                            <img  src={address} alt="address" />
                        </div>
                        <div className="contacts__item-child text--normal">
                            City of San Jose Del Monte, Bulacan
                        </div>
                    </div>
                    <div className="contacts__item">
                        <div className="contacts__item-child">
                            <img  src={linkedin} alt="linkedin" />
                        </div>
                        <div className="contacts__item-child text--normal">
                            <a href="https://www.linkedin.com/in/maria-alexia-armando-254045208/" target="_blank" rel="noreferrer nofollow" className="text--link">Maria Alexia Armando | LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Experience */}
            <div className="content__experience">
                <div className="content__experience-title text--title">experience</div>
                <div className="timeline">
                    <div className="timeline__component--left">
                        <a href="https://cafe24corp.com.ph/" target="_blank" rel="noreferrer nofollow" className="timeline__company-name">Cafe24 Philippines</a>
                        <div className="timeline__company-date">Sep 2022 - 2023</div>
                    </div>
                    <div className="timeline__middle">
                        <div className="timeline__point"></div>
                    </div>
                    <div className="timeline__component--right">
                        <div className="timeline__component--company-name">
                            <a href="https://cafe24corp.com.ph/" target="_blank" rel="noreferrer nofollow" className="timeline__company-name">Cafe24 Philippines</a>
                            <div className="timeline__company-date">Sep 2022 - 2023</div>
                        </div>
                        <div className="timeline__title">Senior Web Developer</div>
                        <ul className="timeline__responsibilities">
                            <li>Revamp a high priority legacy project - &nbsp;
                                <a href="https://experts.cafe24.com/client" target="_blank" rel="noreferrer nofollow">Cafe24 Experts</a>
                            </li>
                            <li>Onboard teammates to the project.</li>
                            <li>Developed one of the main parts of the high priority project.</li>
                            <li>Deployed the project in the production and maintain it.</li>
                        </ul>
                        <div className="timeline__experience">
                            <ul className="timeline__experience-tags">
                                <li>Laravel</li>
                                <li>Vue.js</li>
                                <li>Git</li>
                                <li>Jira</li>
                                <li>Confluence</li>
                                <li>Figma</li>
                                <li>Jenkins</li>
                                <li>Docker</li>
                                <li>Npm</li>
                                <li>RESTful API</li>
                                <li>TDD</li>
                                <li>MariaDB</li>
                            </ul>
                        </div>
                    </div>
                    <div className="timeline__component--left">
                        <a href="https://cafe24corp.com.ph/" target="_blank" rel="noreferrer nofollow" className="timeline__company-name">Cafe24 Philippines</a>
                        <div className="timeline__company-date">Jul 2019 - Aug 2022</div>
                    </div>
                    <div className="timeline__middle">
                        <div className="timeline__point"></div>
                    </div>
                    <div className="timeline__component--right">
                        <div className="timeline__component--company-name">
                            <a href="https://cafe24corp.com.ph/" target="_blank" rel="noreferrer nofollow" className="timeline__company-name">Cafe24 Philippines</a>
                            <div className="timeline__company-date">Jul 2019 - Aug 2022</div>
                        </div>
                        <div className="timeline__title">Junior Web Developer</div>
                        <ul className="timeline__responsibilities">
                            <li>Maintained internal project of the company. - Meeting Master (Company's Calendar)</li>
                            <li>Maintained products of the company. - &nbsp;
                                <a href="https://recipe.cafe24.com/" target="_blank" rel="noreferrer nofollow">Cafe24 Recipe Google Sheets and Google Calendar.</a> And internal applications of the company.
                            </li>
                            <li>Developed an internal website for the company and created a browser extension for web scraping.</li>
                            <li>Creation of 4 WordPress themes project from scratch.</li>
                            <li>Maintained a high priority project. - Cafe24 Experts Version 1</li>
                            <li>Developed a project as a part of a team. - &nbsp;
                                <a href="https://d.cafe24.com/experts?action=design_experts_list" target="_blank" rel="noreferrer nofollow">Cafe24 Design Experts</a>
                            </li>
                            <li>Support in migrating the website API from Apiato to Laravel Lumen.</li>
                        </ul>
                        <div className="timeline__experience">
                            <ul className="timeline__experience-tags">
                                <li>Wordpress</li>
                                <li>Laravel</li>
                                <li>Lumen</li>
                                <li>Vue.js</li>
                                <li>Git</li>
                                <li>Jira</li>
                                <li>Confluence</li>
                                <li>Jenkins</li>
                                <li>XAMP</li>
                                <li>Npm</li>
                                <li>RESTful API</li>
                                <li>Unit Testing</li>
                                <li>MariaDB</li>
                                <li>MySQL</li>
                                <li>Redis</li>
                                <li>3rd-party API</li>
                                <li>Web scraping</li>
                            </ul>
                        </div>
                    </div>
                    <div className="timeline__component--left">
                        <a href="https://elosoftbiz.com/" target="_blank" rel="noreferrer nofollow" className="timeline__company-name">Elosoft Inc.</a>
                        <div className="timeline__company-date">May - Jun 2019</div>
                    </div>
                    <div className="timeline__middle">
                        <div className="timeline__point"></div>
                        <div className="timeline__point timeline__point--bottom"></div>
                    </div>
                    <div className="timeline__component--right timeline__component--bottom">
                        <div className="timeline__component--company-name">
                            <a href="https://elosoftbiz.com/" target="_blank" rel="noreferrer nofollow" className="timeline__company-name">Elosoft Inc.</a>
                            <div className="timeline__company-date">May - Jun 2019</div>
                        </div>
                        <div className="timeline__title">Web Developer</div>
                        <ul className="timeline__responsibilities">
                            <li>Engaged in a project-based system.</li>
                            <li>Maintained the framework of the company.</li>
                            <li>Improved over-all system.</li>
                        </ul>
                        <div className="timeline__experience">
                            <ul className="timeline__experience-tags">
                                <li>PHP</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>jQuery</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            

            {/* Recent Projects */}
            <div className="content__projects">
                <div className="content__projects-title text--title">recent projects</div>
                <div className='project__content'>
                    <div className='project__item'>
                        <a href="http://3.107.0.200/" target="_blank" rel="noreferrer nofollow" className="project__item__company-name">MERN Book Inventory</a>
                        <p className='project__item__description'>
                            Book Inventory web application that can create, read, update, and delete books. 
                            It was created using the <span className="description--normal">MERN stack </span> 
                            (MongoDB, Express.js, React.js, and Node.js) and deployed it using <span className="description--normal">AWS</span>.
                        </p>
                    </div>
                    <div className='project__item'>
                        <a href="https://alexia-armando.vercel.app/" target="_blank" rel="noreferrer nofollow" className="project__item__company-name">Portfolio</a>
                        <p className='project__item__description'>
                            My Portfolio was created using <span className="description--normal">React.js</span> and deployed with <span className="description--normal">Vercel</span>.
                        </p>
                    </div>
                    <div className='project__item'>
                        <a href="https://experts.cafe24.com/client" target="_blank" rel="noreferrer nofollow" className="project__item__company-name">Cafe24 Experts</a>
                        <p className='project__item__description'>
                            It is a web application designed exclusively for the company's clients, addressing their specific needs. 
                            Essentially, it serves as a platform where clients can submit project requests, and experts or professionals can apply to work on those projects.
                            The application was created using <span className="description--normal">Laravel</span> and <span className="description--normal">Vue.js</span>.
                        </p>
                    </div>
                </div>
            </div>

            {/* Certifications */}
            <div className="content__projects">
                <div className="content__projects-title text--title">certifications</div>
                <div className='project__content'>
                    <div className='project__item'>
                        <a href="https://www.udemy.com/certificate/UC-e7bff472-89b3-4305-bd3d-edc6db49717c/" target="_blank" rel="noreferrer nofollow" className="project__item__company-name">
                            Node.js - The Complete Guide (MVC, REST APIs, GraphQL, Deno)
                        </a>
                        <div className='project__item__description'>
                            January 29, 2024 | 40.5 hours
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer__info text--fade">
                Designed in <span className="text--normal">Figma</span> and coded in <span className="text--normal">Visual Studio Code</span>. 
                Built with <span className="text--normal">React.js</span>, deployed with <span className="text--normal">Vercel</span>.
            </div>

        </div>
    </div>
    
  );
};

export default Home;