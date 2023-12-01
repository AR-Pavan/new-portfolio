import React from "react";
import heroImg from "../../assets/images/AvatarMaker-3.png";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* ---------------hero left content-------------- */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px]"
            >
              Hello Welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              I'm Annam Raghu Pavan <br />
              MERN Stack Developer
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button
                  className="bg-primaryColor text-white font-[500] flex items-center gap-2 
                        hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]"
                >
                  <i className="ri-mail-line"></i>Hire Me
                </button>
              </a>
              <a
                href="https://drive.google.com/file/d/1ap_dhlAmpg02V_nIz5dNQ_f5pDgg855A/view?usp=drive_link"
                target="_blank"
                className="text-smallTextColor font-[600] text-[16px]
                      border-b border-solid border-smallTextColor"
              >
                See Resume
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-headingColor mt-14 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
            >
              <span>
                <i className="ri-apps-2-line"></i>
              </span>
              I possess a deep understanding of web development principles and
              am committed to delivering high-quality work that meets the needs
              of the client.
            </p>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-headingColor mt-14 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
            >
              <span>
                <i className="ri-apps-2-line"></i>
              </span>
              In addition to my technical skills, I am an excellent communicator
              who enjoys collaborating with team members to achieve results.
              Additionally, I strive to remain up-to-date on the latest
              developments in web development by continuing to learn.
            </p>

            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor text-[15px] font-[600]">
                follow me:
              </span>
              <span>
                <a
                  href="https://github.com/AR-Pavan"
                  target="_blank"
                  rel="noreferrer"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i className="ri-github-line"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/annam-raghu-pavan-8b3848232/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i className="ri-linkedin-fill"></i>
                </a>
              </span>
            </div>
          </div>
          {/* ---------------hero left end-------------- */}
          {/* ---------------hero img-------------- */}
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center">
              <img className="rounded-full" src={heroImg} alt="" />
            </figure>
          </div>
          {/* ---------------hero img end-------------- */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
