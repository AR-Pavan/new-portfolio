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
    description:
      "There is a fully responsive application in which users can register, log in, and upload images securely.In addition to following friends in this application, it features a light and dark mode that enhances the user experience",
    technologies: ["React", "Material UI", "Node.js", "MongoDB"],
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
    description:
      "This is responsive app where student can register,login and attend the classes,Submit the assignments,Check his score and attendance.",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
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
    description:
      "This is a simple Quiz Application with beautiful UI",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
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
    description:
      "This Dashboard mainly focusus on getting data from backend and displaying it beautifully.",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://grand-cranachan-73fecf.netlify.app/",
    frontEndUrl:"https://github.com/AR-Pavan/admin-dashboard-frontend",
    backEndUrl:"https://github.com/AR-Pavan/admin-dashboard-backend",
    credentials:false,
  },
  
];

export default portfolios;