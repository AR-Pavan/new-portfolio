import React from 'react'
import frontEndImg from "../../assets/images/front-end.png";
import backendImg from "../../assets/images/backend.png";
import appsImg from "../../assets/images/apps.png";


const Services = () => {
  return (
    <section id="skills">
       <div className="container lg:pt-5">
        <div className="text-center">
            <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
            My Expertise
            </h2>
            <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
            As a MERN stack developer, I have built a wide range of websites using this powerful technology stack. With MongoDB as the database, I have created scalable and efficient solutions that handle large amounts of data. Express.js has been instrumental in creating robust APIs that enable seamless communication between the frontend and backend. I have utilized React to develop intuitive and responsive user interfaces that provide an engaging user experience. Node.js has been a key player in the server-side programming aspect of my projects, enabling me to develop fast and efficient server-side code.
            </p>
        </div>

        <div className="flex flex-col justify-center sm:py-12">
            <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
                <div className="relative text-gray-700 antialiased text-sm font-semibold">

                    {/* =========== vertical line running through the middle============== */}
                    <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2">
                    </div>

                    {/* --------------------left card------------- */}
                    <div className="mt-6 sm:mt-0 sm:mb-12">
                        <div className="flex items-center flex-col sm:flex-row">
                            <div className="flex justify-start w-full mx-auto items-center">
                                <div className="w-full sm:w-1/2 sm:pr-8">
                                    <div className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                                    data-aos="fade-right"
                                    data-aos-delay="50"
                                    data-aos-duration="1300">
                                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                                            Frontend Development
                                        </h3>

                                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                                        HTML , CSS , JavaScript , React ,
                                        Bootstrap , 
                                        Material UI
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className=" rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                <figure>
                                    <img src={frontEndImg} alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>



                    {/* ===========right card====================== */}
                    <div className="mt-6 sm:mt-0 sm:mb-12">
                        <div className="flex items-center flex-col sm:flex-row">
                            <div className="flex justify-end w-full mx-auto items-center">
                                <div className="w-full sm:w-1/2 sm:pl-8">
                                    <div className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                                          data-aos="fade-left"
                                          data-aos-delay="50"
                                          data-aos-duration="1300">
                                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                                            BackEnd Development
                                        </h3>

                                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                                            Node.js , Express.js , MongoDB , Mongoose , JWT
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className=" rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                <figure>
                                    <img src={backendImg} alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>

                     {/* --------------------left card------------- */}
                     <div className="mt-6 sm:mt-0 sm:mb-12">
                        <div className="flex items-center flex-col sm:flex-row">
                            <div className="flex justify-start w-full mx-auto items-center">
                                <div className="w-full sm:w-1/2 sm:pr-8">
                                    <div data-aos="fade-right"
                                            data-aos-delay="50"
                                            data-aos-duration="1300"
                                            className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                                            Other Technologies
                                        </h3>

                                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                                            Redux , Axios , AWS , Socket.io , Netlify , Git
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className=" rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                <figure>
                                    <img src={appsImg} alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </section>
  )
}

export default Services