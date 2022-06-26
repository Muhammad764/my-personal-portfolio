import React from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault()
        emailjs.sendForm('service_wmqdisi', 'template_uvwhq6u', e.target,'PeM8dtKFoC-vFjHWD').then(res => {
            console.log(res)
        }).catch(err => console.log(err))
    }
    return (
        <div className='mx-5 lg:mx-20 mt-20  py-10' >
          <h1 className='font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-slate-50 to-slate-400 '>Contact Me</h1>
        <form className='grid grid-cols-1 justify-items-center gap-5 pt-8' onSubmit={sendEmail} >
        <input
                    type='text'
                    name='user_email'
          placeholder='Email Address'
          className='input w-full max-w-md rounded-none bg-primary transform hover:scale-105 duration-200 shadow shadow-black '
        />
        <input
          type='text'
                    placeholder='Subject'
                    name='subject'
          className='input w-full max-w-md rounded-none bg-primary transform hover:scale-105 duration-200 shadow shadow-black'
        />
        <textarea
                    className='textarea w-full max-w-md rounded-none bg-primary transform hover:scale-105 duration-200 shadow shadow-black'
                    name='message'
          placeholder='Your message'
          rows={6}
        ></textarea>
        
        <input className='btn w-full max-w-md btn-outline bg-primary border-primary  text-slate-100 hover:bg-gradient-to-r from-pink-500 to-yellow-500 rounded-none transform duration-300 hover:-translate-y-1 hover:shadow-2xl hover:duration-300 hover:transform border shadow shadow-black' type="submit" value="Send" />
      </form>
        </div>
    );
};

export default Contact;