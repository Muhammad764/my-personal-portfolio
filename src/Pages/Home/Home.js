import React from 'react';
import pic1 from './edit1.png'


const Home = () => {
    return (
        <div className='bg-primary rounded shadow-lg transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black hover:duration-300 hover:transform lg:flex my-20 lg:mx-20 shadow-black'>
            <div>
            <div class="avatar py-6 lg:my-24 mx-8">
                <div class="w-72 rounded-full">
               <img src={pic1} alt='myPic' />
              </div>
           </div>
            </div> 
            <div className='lg:my-20 my-10 mx-10 text-lg'>
                <p className='font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-slate-50 to-slate-500'>Hello There, I'm </p>
                <p className='font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-slate-50 to-slate-500 my-3'>Rakibul Islam Farhad</p>
                <p style={{fontWeight:'300',fontSize:'1.4em',color:'#b2becd'}} className='text-slate-50 text-lg'>I am a front-end web developer. I love to use my creativity and make something new. That's why I love to work with React.js and Tailwindcss. Over the last year, I gather knowledge in various parts of web development by myself. My ultimate goal is to become an awesome full-stack web developer who can make beautiful UIs and also can handle the back-end smoothly.
                </p> 
     <button class="btn btn-wide rounded-full lg:mt-10 my-6 bg-gradient-to-r from-pink-500 to-yellow-500 text-white hover:from-slate-50 hover:to-slate-400 hover:text-black text-lg shadow shadow-black transform duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black hover:duration-300 hover:transform">
            <a  href="https://drive.google.com/file/d/1K0E0-l1RRnx5mZ0A3j4M2qiIinzHx1PZ/view?usp=sharing" >Download Resume</a>
     </button>
    </div>
            
        </div>
    );
};

export default Home;