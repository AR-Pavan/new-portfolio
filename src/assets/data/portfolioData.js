import portfolioImg01 from "../images/Untitled-1.jpg";
import portfolioImg02 from "../images/Untitled-2.jpg";
import portfolioImg03 from "../images/Untitled-3.jpg";
import portfolioImg04 from "../images/Untitled-4.jpg";


const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "Responsive",
    title: "Social Media App",
    timePeriod:"2-3 Weeks",
    description:
      "There is a fully responsive application in which users can register, log in, and upload images securely.In addition to following friends in this application, it features a light and dark mode that enhances the user experience",
    technologies: ["React", "Node.js", "Mongoose","Redux","JsonWebToken"],
    siteUrl: "https://deerdo.netlify.app/",
    frontEndUrl:"https://github.com/AR-Pavan/social-media-frontend",
    backEndUrl:"https://github.com/AR-Pavan/social-media-backend",
    credentials:true,
    },
  {
    id: "02",
    imgUrl: portfolioImg02,
    category: "web Design",
    title: "Student and Mentor Dashboard",
    timePeriod:"2-3 Weeks",
    description:
      "This is responsive app where student can register,login and attend the classes,Submit the assignments,Check his score and attendance.",
    technologies: ["React", "Node.js", "JsonWebToken", "MongoDB"],
    siteUrl: "https://zenclass-capstone-project.netlify.app/",
    frontEndUrl:"https://github.com/AR-Pavan/capstone-frontend",
    backEndUrl:"https://github.com/AR-Pavan/capstone-backend",
    credentials:true,

  },
  {
    id: "03",
    imgUrl: portfolioImg03,
    category: "Web Design",
    title: "Simple Quiz Application",
    timePeriod:"1-2 Weeks",
    description:
      "This is a simple quiz application where the user answers five questions and the results are displayed once the answers have been submitted. The application is designed to be simple and easy to use.",
    technologies: ["React", "Redux", "Node.js", "Mongoose"],
    siteUrl: "https://my-simple-quiz-app-007.netlify.app/",
    frontEndUrl:"https://github.com/AR-Pavan/quiz-app-frontend",
    backEndUrl:"https://github.com/AR-Pavan/quiz-app-backend",
    credentials:false,
  },
  {
    id: "04",
    imgUrl: portfolioImg04,
    category: "Responsive",
    title: "Admin Dashboard",
    timePeriod:"2-3 Weeks",
    description:
      "A beautiful admin dashboard application that gathers data from the backend and displays the data using charts and dashboards.",
    technologies: ["React", "Redux", "Node.js", "Material UI","Mongoose"],
    siteUrl: "https://grand-cranachan-73fecf.netlify.app/",
    frontEndUrl:"https://github.com/AR-Pavan/admin-dashboard-frontend",
    backEndUrl:"https://github.com/AR-Pavan/admin-dashboard-backend",
    credentials:false,
  },
  
];

export default portfolios;