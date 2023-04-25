import React, { useState } from 'react'
import { useForm } from "react-hook-form";

import "./Contact.css";
const Contact = () => {
    
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        message: ''
      });

      const handleInputChange = (event) => {
        setFormValues({
          ...formValues,
          [event.target.name]: event.target.value
        });
      }

      const handleSubmit = async (event) => {
        event.preventDefault();

      try {
        const response = await fetch('https://formsubmit.co/022abcf45ce91ad6ba1df812238bf2ea', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formValues)
        });
        
        if (response.ok) {
          alert('Thank you for submitting the form!');
          setFormValues({
            name: '',
            email: '',
            message: ''
          });
        } else {
          alert('Error submitting form. Please try again later.');
        }
      } catch (error) {
        console.error(error);
        alert('Error submitting form. Please try again later.');
      }
    }

  return <section id="contact" className='pb-16'>
    <div className="container">
        <h2 className='text-headingColor font-[700] text-[2.5rem] mb-8'>Get in Touch</h2>
        <div className="md:flex justify-between items-center">
            <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe title='google-maps' 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.90089970882!2d77.46612549485897!3d12.953945613736227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1682242849648!5m2!1sen!2sin"
            className='border-0 w-full h-full'
            allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            
            </div>
            <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
                
                
                <form target="_blank"
                      onSubmit={handleSubmit}
                      className="w-full">
                    <div className="mb-5">
                        <input type="text" name="name"placeholder='Enter you Name'value={formValues.name} onChange={handleInputChange}
                         className='w-full p-3 focus:outline-none rounded-[5px]'  required/>
                    </div>
                    <div className="mb-5">
                        <input type="email" name="email" placeholder='Enter you email' value={formValues.email} onChange={handleInputChange}
                        className='w-full p-3 focus:outline-none rounded-[5px]'  required/>
                    </div>
                    <div className="mb-5"> 
                        <textarea type="text" rows={3} name="message" placeholder='Write yout message' value={formValues.message} onChange={handleInputChange}
                        className='w-full p-3 focus:outline-none rounded-[5px]' required/>
                    </div>
                    <input type="hidden" name="_subject" placeholder='Subject' className='w-full p-3 focus:outline-none rounded-[5px]' value="New Submission"/>
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_captcha" value="false" />
                    <button type="submit"className='w-full p-3 focus:outline-none rounded=[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150'>Send Message</button>
                    
                </form>
            </div>
        </div>
        
    </div>
  </section>
}

export default Contact