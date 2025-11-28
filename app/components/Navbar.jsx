
"use client";
import React from 'react';
import Image from "next/image";




const Navbar = () => {
     return (
      <div className="w-[70%] mx-auto fixed top-6 left-50 z-50 "> 
        <div className="flex justify-between items-center text-xl mb-10   w-[100%] rounded-[500px] border-1 border-white mt-[60px]  rounded-2xl  px-2 py-2    
      rounded-full 
      backdrop-blur-[5px]
      bg-[#17191C33] 
    
      shadow-[0_0_20px_rgba(0,255,255,0.15)]
      ring-1 ring-white/30
      flex items-center gap-6  " >
           <div className="flex justify-between items-center gap-1 ">
              <Image
              src="/images/logo.png"
              width={25}
              height={25}
              alt="logo"
              />
              <h1 className="text-white text-[27px]">Duremere.<span className = "text-[#196264]">Ai</span></h1>
           </div>
           <div>
               <ul className={`flex gap-9 text-xs mix-blend-difference `}>
                   <li>
                       <a href="#">What We Do</a>
                   </li>
                   <li>
                       <a href="#">Why Us?</a>
                   </li>  
                   <li>
                       <a href="#">Case Studies</a>
                   </li>
               </ul>
           </div>
           <div className = "flex justify-center items-center gap-1 bg-[#196264] w-[200px] h-[40px] rounded-[500px] ">
            <div>
            <Image
              src="/images/Icon.png"
              width={20}
              height={20}
              alt="logo"
              />
            </div>
             <button className="text-[14px]">Get a Free Consultation</button>
           </div>
        </div>
      </div>
    )
}

export default Navbar

