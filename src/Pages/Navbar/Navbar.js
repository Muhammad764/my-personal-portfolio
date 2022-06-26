import React from 'react';
import { FaGithub ,FaLinkedin ,FaFacebook} from 'react-icons/fa';

const Navbar = () => {
    return (
        <div class="navbar bg-primary shadow  shadow-black">
            <div class="navbar-start">
                
<div class="dropdown">
        <label tabIndex="0" class="btn btn-ghost lg:hidden">
                        
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 " fill="white" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" color='white' /></svg>
                    </label>
      <ul tabIndex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary gap-5 rounded-box w-52">
                    <a  href="https://github.com/Muhammad764">
                    <FaGithub size='1.5em' color='white'>
                    </FaGithub>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/rakibul-islam-farhad-174719241?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bs2B5vLbIScGkEr0o%2FTBhRQ%3D%3D">
                        <FaLinkedin size='1.5em' color='white'></FaLinkedin>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100072416732938">
                        <FaFacebook size='1.5em' color='white'></FaFacebook>
                    </a>
      </ul>
    </div>
     <p className='font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 ml-20'>Rakibul Islam Farhad</p>        
</div>
  <div class="navbar-end hidden lg:flex">
    <ul class="menu menu-horizontal pr-20 gap-5">
                    <div className='tooltip tooltip-bottom' data-tip="GitHub">
                        <a href="https://github.com/Muhammad764">
                        <FaGithub size='1.5em' color='white'>
                    </FaGithub>
                    </a>
                    </div>
                    
                    <div className='tooltip tooltip-bottom' data-tip="Linkedin">
                         <a href="https://www.linkedin.com/in/rakibul-islam-farhad-174719241?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bs2B5vLbIScGkEr0o%2FTBhRQ%3D%3D">
                        <FaLinkedin size='1.5em' color='white'></FaLinkedin>
                    </a>
                   </div>
                    <div className='tooltip tooltip-bottom' data-tip="Facebook">
                        <a href="https://www.facebook.com/profile.php?id=100072416732938">
                        <FaFacebook size='1.5em' color='white'></FaFacebook>
                    </a>
                    </div>
    </ul>
  </div>
</div>
    );
};

export default Navbar;