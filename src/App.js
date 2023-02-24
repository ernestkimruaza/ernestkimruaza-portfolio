import { useState } from 'react';
import './App.css';
import Navbar from './Navbar'
import {AiFillFacebook, AiFillGithub,  AiFillMail, AiFillEnvironment, AiFillPhone} from 'react-icons/ai'

function App() {
  return (
    <main className='px-8 md:px-20 lg:px-40'>
    
    <Navbar />

    <section id='home' className='min-h-screen text-center mt-4 flex flex-col justify-center '>
        <div className="mx-auto bg-black-500 rounded-full w-56 h-56 relative overflow-hidden md:h-96 md:w-96 mb-2">
          <img src='/me.png' layout="fill" objectFit="cover" />
        </div>
        <h1 className='text-3xl md:text-5xl font-medium text-teal-500'>Ernest Kim Ruaza</h1>
        <h3 className='text-xl md:text-2xl'>Computer Science Student</h3>
        <p className='text-md py-1 text-gray-800 md:text-xl'>I studied now the course of Bachelor Science in Computer Science in North Eastern Mindanao University Lianga Campus. I lived in Diatagon Lianga Surigao del sur.</p>
        <div className='text-5xl py-4 flex justify-center gap-16 text-gray-600'>
          <AiFillFacebook /> 
          <AiFillGithub />
          <AiFillMail />
        </div>
    </section>

    <section id='service' className=''>
     

    </section>

    <section id='portfolio' className='mt-10'>


    </section>
    
    <section id='honor' className='mt-10'>
   
    
    </section>

    <section id="footer" className='mt-5 rounded bg-white py-8 px-8'>
      <div className='text-black md:text-center'>
        <h1 className='font-medium text-lg'>Contact Me</h1>
        <p>Wanna talk anything?</p>

        <ul className='md:flex justify-center gap-4'>
          <li className='flex items-center gap-2'>
            <AiFillMail />
            <p>ernestkimkimar@gmail.com</p>
          </li>
          <li className='flex items-center gap-2'>
            <AiFillEnvironment />
            <p>Diatagon Lianga Surigao Del Sur </p>
          </li>
          <li className='flex items-center gap-2'>
            <AiFillPhone/>
            <p>09501886956</p>
          </li>
        </ul>

        <div className='flex text-xl text-white gap-4 mt-2 md:justify-center'>
          <AiFillFacebook /> 
          <AiFillGithub />
          <AiFillMail />
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>

        <p className="text-center text-sm text-black sm:text-center">
          © 2022
        
        </p>

      </div>
      
    </section>

    </main>
  );
}

export default App;
