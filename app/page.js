"use client"
import React from 'react';
import Image from "next/image";
import Navbar from "./components/Navbar";



const page = () => {


  
  
  return (
    <div className="relative w-[100%] mt-25 pm-5">
      {/* Rotated background behind navbar */}
      <img
        src="/images/Background image 1.png"
        alt="Background"
        className="absolute -top-[180px] left-[px] w-[1600px] h-[1200px] object-cover -z-10 mt-10"
      />

      {/* Navbar */}
      <Navbar className="relative z-10 " />

      {/* Section content */}
      <section className="relative h-[700px] flex flex-col justify-center items-center text-white text-center z-10 mt-[px] ">
      <div className="flex flex-col justify-center items-center  w-[70%] pt-65">
        <div className="mb-4 flex gap-2 z-10 border-1 rounded-[500px] border-[#196264] bg-[#FFFFFF33]" >
          <div className="flex justify-center items-center gap-2 px-4 py-1 " >
          <button className="bg-[#196264] px-4 py-2 rounded-full text-sm w-40 " >AI & Software</button>
          <p className="flex justify-center items-center gap-2 "  >Solutions Built for the GCC <span>
          <Image
              src="/images/icon aero.png"
              width={15}
              height={15}
              alt="icon"
              
              />
            </span></p>
          </div>
        </div>
        
        <div className=" flex flex-col justify-center items-center gap-8 pb-10 pt-5" >
         <h1 className="text-[60px] pt-8 font-[500] leading-tight z-10 font-Helvetica " >
          Custom Software & AI Solutions <br /> for GCC Digital Era
         </h1>

         <p className="max-w-2xl mt-4 text-gray-300 z-10 pb- " >
          We design future-ready platforms,<span className="font-bold"> AI-powered tools,</span> and <span className="font-bold" >scalable backend systems </span>
          that help enterprises and startups thrive in the GCC.
         </p>
         </div>
         <div className = "flex justify-center items-center gap-1 bg-[#196264] w-[230px] h-[40px] rounded-[500px] mt-5">
            <div>
            <Image
              src="/images/Icon.png"
              width={20}
              height={20}
              alt="logo"
              />
            </div>
            <div className="">
             <button className="text-[14px]">Get a Free Consultation</button>
             </div>
          </div>
      </div>
        <div className=" w-[70%] mt-10 -z-10">
          <h2 className="pb-5 text-[#FFFFFFB2]">Trusted by 4,000+ companies</h2>
          <ul className="flex justify-center items-center gap-5">
            <li className="flex justify-center items-center gap-1"><span>
            <Image
              src="/images/Shape-bol-1.png"
              width={20}
              height={20}
              alt="logo"
              />
              </span> Boltshift</li>

              <li className="flex justify-center items-center gap-1"><span>
            <Image
              src="/images/Shape-sq-2.png"
              width={20}
              height={20}
              alt="logo"
              />
              </span> Lightbox</li>

              <li className="flex justify-center items-center gap-1"><span>
            <Image
              src="/images/logo.png"
              width={20}
              height={20}
              alt="logo"
              />
              </span> FeatherDev</li>

              <li className="flex justify-center items-center gap-1"><span>
            <Image
              src="/images/Shape-glo-4.png"
              width={20}
              height={20}
              alt="logo"
              />
              </span> GlobalBank</li>
          </ul>
        </div>

        

      </section>
        {/* section 2 */}
      <section className="mt-20 pb-13">
        <div>
          <img 
            src="/images/pattern-bg.png"
            alt="Background"
            className="absolute left-110 w-[800px] h-[600px] -z-10"
          />
        </div>
      <div className="">
        <img
        src="/images/bg-side-img.png"
        alt="Background"
        className="absolute top-[650px] left-[750.5px] w-[600px] h-[1200px] object-cover rotate-[5] -z-10 mt-10"
      />

      <div className="ml-20 pt-20 ">
        <div className="w-[55%] text-xl">
          <p className="text-3xl pb-10"><span className="text-[#FFFFFF33]">We Design</span>Enterprise-Grade Software <span className="text-[#FFFFFF33]">And</span> AI Alatforms <span className="text-[#FFFFFF33]">That Enable Efficiency,</span> <span className="text-[#FFFFFF33]"> <span className="text-[#FFFFFFB2]">Sustainability, And Long-Term Success</span></span></p>
        </div>

        <div className=" w-[70%] h-[90%] grid grid-cols-3 gap-10 mb-25">
          <div className=" w-[100%] h-[100%] flex flex-col gap-25">
            <div><p className="text-[#FFFFFFB2]">01</p></div>
            <div>
              <h1 className="text-2xl font-bold pb-5">Custom CRM/ERP Development</h1>
              <p className="text-[#FFFFFFB2]">Custom-built web, mobile, and enterprise platforms designed for performance and growth.</p>
            </div>
          </div>

          <div className=" w-[100%] h-[100%] flex flex-col gap-25">
            <div><p className="text-[#FFFFFFB2]">02</p></div>
            <div>
              <h1 className="text-2xl font-bold pb-5">Artificial Intelligence</h1>
              <p className="text-[#FFFFFFB2]">AI-powered solutions that enhance decision-making, automate processes, and drive business growth.</p>
            </div>
          </div>

          <div className=" w-[100%] h-[100%] flex flex-col gap-25">
            <div><p className="text-[#FFFFFFB2]">03</p></div>
            <div>
              <h1 className="text-2xl font-bold pb-5">Backend Infrastructure</h1>
              <p className="text-[#FFFFFFB2]">Robust, scalable, and secure infrastructure to support enterprise systems and digital platforms.</p>
            </div>
          </div>

          <div className=" w-[100%] h-[100%] flex flex-col gap-25">
            <div><p className="text-[#FFFFFFB2]">04</p></div>
            <div>
              <h1 className="text-2xl font-bold pb-5">Systems Integration</h1>
              <p className="text-[#FFFFFFB2]">Seamless integration of legacy systems with modern platforms for efficiency and performance.</p>
            </div>
          </div>
          
          <div className="flex items-end">
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
      </div>

        </div>
      </section>

      <section className="bg-white text-black rounded-[50px] w-[1,728px] h-[1,264px] p-10 flex justify-center items-center relative -mt-13">
        <div className=" w-[70%] h-[100%] flex justify-center items-center flex-col gap-5 relative mt-10">
          <div className=" text-center w-[90%] ">
            <h1 className="text-5xl font-[8px]  pb-10">Your Digital Transformation Partner in Saudi Arabia & Dubai</h1>
            <p className="text-xl pb-10">We deliver AI solutions in Saudi Arabia and custom software in Dubai, driving secure and scalable digital transformation across the GCC.</p>
          </div>
            {/* cards start */}
          <div className=" w-full h-[100%] flex flex-wrap  gap-4 object-fit">
            {/* 1 card start */}
           <div className= "bg-black text-white w-[38%] h-[100%] rounded-[25] overflow-hidden "> 

                <div className="">
                
                <img
                  src="images/card-bg-1.png"
                  alt="Background"
                  className="w-[150px] h-[200px] " 
                />
                </div>

                <div className="-mt-22 -pb-9 p-5 ">
                  <h1 className="text-2xl font-bold -mt-9">Local Expertise, Global Standards</h1>
                  <p className="text-[#FFFFFFB2]">Deep knowledge of GCC business needs.</p>
                </div>
              </div>

                {/* 2 card start */}
              <div className= "bg-black text-white w-[60%] h-[100%] rounded-[25] flex justify-center items-center overflow-hidden "> 

                <div className="pl-8 pt-11">
                  <h1 className="text-2xl font-bold ">AI-Powered Growth</h1>
                  <p className="text-[#FFFFFFB2]">Deliver real-time insights, enabling smarter decisions and measurable business outcomes</p>
                </div>

                <div className=" ">
                
                <img
                  src="images/card-1.png"
                  alt="Background"
                  className="h-[204] w-[400]" 
                />
                </div>
              </div>

                {/* 3 card start */}
              <div className= "bg-black text-white w-[60%] h-[100%] rounded-[25] flex justify-center items-center overflow-hidden"> 
                <div className=" ">
                 <img
                   src="images/card-bg-3.png"
                   alt="Background"
                   className="h-[204] w-[500]" 
                 />
                </div>
                  
               <div className="pr-3 -ml-35 mt-5 overflow-hidden">
                <h1 className="text-2xl font-bold ">Scalable & Secure</h1>
                <p className="text-[#FFFFFFB2]">design infrastructure that grows with your business while ensuring enterprise-grade security and compliance</p>
               </div>
              </div>

                {/* 4 card start */}
                <div className= "bg-black text-white w-[38%] h-[100%] rounded-[25] overflow-hidden"> 
                
                  
               <div className="mt-24 pl-5 pb-7">
                <h1 className="text-2xl font-bold ">Proven Track Record</h1>
                <p className="text-[#FFFFFFB2]">Trusted by enterprises & fast-growing startups</p>
               </div>
              </div>

          </div>
        </div>
      </section>
      
      <section className="pt-10 h-[1000px] relative ">
        <div className="slide-container  gap-5">
          
        <h1 className="slide-text text-9xl pl-17  font-[500] ">Start Your Digital Transformation in GCC</h1>
      
        <h1 className="slide-text text-9xl pl-17  font-[500] ">Start Your Digital Transformation in GCC</h1>
        </div>
        <p className="text-[120px] font-[500] pl-17 text-[#196264]">78%</p>
        <p className="text-[32px] font-[500] pl-17 -mt-5 tracking-tighter">Growth Rate</p>

        <div className="relative">
         <img
            src="images/Rectangle-33-bg.png"
            alt="Background"
            className="w-full h-[700] " 
          />
        <div class="absolute bottom- left-0 w-full h-5 bg-gradient-to-b from-gray-50/10 to-transparent pt-"></div>
        </div>
        
      </section>

      <section className="relative w-full h-[600px] ">

        <div className=" absolute top-0 left-0 w-[65%] h-full px-8">
          <h1 className=" text-[45px] font-medium text-white pl-10"> <span className="text-[#FFFFFFB2]">Let’s</span> Turn Your Idea Into Reality <span className="text-[#FFFFFFB2]">With Custom </span>AI Solutions And Enterprise-Grade Software <span className="text-[#FFFFFFB2]">Designed For The Saudi & Dubai Markets.</span></h1>
          <div className="absolute pl-10 mt-25">
          <p className="text-[25px] font-[500] pb-10">Ready to Build Smarter?</p>
          <div className = "flex justify-center items-center gap-1 bg-[#196264] w-[230px] h-[40px] rounded-[500px]">
            <div>
            <Image
              src="/images/Icon.png"
              width={20}
              height={20}
              alt="logo"
              />
            </div>
            <div className="">
             <button className="text-[14px]">Get a Free Consultation</button>
             </div>
          </div>
          
       
         <h1 className="text-[35px] font-[500] pt-15 text-[#FFFFFFB2]">Explore Some Of The<br/>Transformative Journeys In GCC</h1>
       
        </div>
        </div>
         
        <div className="mt-35 reletave">
        <img
           src="images/pattern-bg.png"
           alt="Background"
           className="absolute top-0 left-0 w-full h-full object-cover " 
         />
        </div>
      </section>

      <section className="flex justify-center items-center w-full h-full mt-40 relative ">
        {/* cards starts 1*/}
        <div className=" w-[90%] h-[710px] relative flex flex-cols flex-wrap  gap-2">
          {/* 1 card */}
          <div className="rounded-[30px] w-[48%] h-[410px] bg-white text-black relative">
           <img
           src="images/bg-side.png"
           alt="Background"
           className="absolute top-0 left-0 w-[300px] h-[300px] object-cover " 
           />

           <div className="pt-70 pl-12 w-[440px]">
             <h1 className="text-[30px] font-[500]">Sapling (Kallidus)</h1>
             <p className="font-[500] text-[#181815B2]">US HR Tech Platform's Engineering Scale-Up Drives $10M PE Acquisition</p>
           </div>
         </div>
          
          {/* cards section 2 */}

          <div className=" w-[50.3%] h-[425px] bg-black text-white relative flex flex-col gap-2 ">
              {/* card 1 */}
              <div className="rounded-[30px] h-[200px] bg-[#252525] pt-20 pl-5">
                <h1 className="text-[30px] font-[500]">Intellirent</h1>
                <p className=" font-[400] text-[#FFFFFFB2]">US PropTech Startup's AI Revolution Cuts Manual Work 98%</p>
              </div>
              
              {/* section 3 */}
              <div className="flex gap-2"> 
                {/* card 1 */}
              <div className="rounded-[30px] h-[200px] w-[400px] bg-[#252525] pl-5 pt-17">
                <h1 className="text-[30px] font-[500]">HoneyBricks</h1>
                <p className="w-[250px] font-[400] text-[#FFFFFFB2] leading-tight- tracking-tighter">Blockchain Real Estate Platform Manages $5M+ Investments Before Acquisition them.</p>
              </div>
              
              {/* card 2 */}
              <div className="rounded-[30px] bg-white text-black h-[200px] relative overflow-hidden">
                <div className="relative">
                <img
                 src="images/left-side-bg.png"
                 alt="Background"
                 className="absolute top- left-47  h-[225]  object-cover " 
                />
                </div>
                 <div className="w-[400] pt-15 pl-5">
                  <h1  className="text-[30px] font-[500]">X-QUIC</h1>
                  <p className=" font-[500] w-[200] text-[#181815B2] leading-tight- tracking-tighter">Hospitality AI Platform Reconciles $300M+ in OTA Commissions Automatically</p>
                  </div>
              </div>
              
              </div>
            </div>

            {/* last card */}
            <div className="rounded-[30px] bg-white text-black w-[100%] h-[246px] relative ">
            <div className="">
                <img
                 src="images/right-bg.png"
                 alt="Background"
                 className="absolute -left-0  object-cover " 
                />
                </div>
                <div className="absolute left-160 pt-10 ">
                  <h1  className="text-[40px] font-[500]">Recurate</h1>
                  <p  className=" font-[500] text-[#181815B2] leading-tight- tracking-tighter">US Fashion Resale Platform Scales to 100K Monthly Transactions</p>
                </div>
            </div>
          
        </div>
      </section>

                {/* last section */}

      <section className="bg-white text-black relative w-full h-[750px] mt-25 rounded-[30px]">
        <div className="relative w-full h-full">
        <img
           src="images/last-bg.png"
           alt="Background"
           className="absolute -top-90 left-112.5 w-[900px] h-[1110px] " 
           />

        

           <div className="flex justify-around items-center relative gap-20 pt-20 pr-10">
           <div>
            <h1 className="text-[32px] font-[500]">What's your biggest<br/>
            challenge right now?</h1>
             <p className="text-[#181815B2]">Let's talk and find out why the person who referred us rates
            us so highly.</p>
          </div>
          <div className="text-[22px]">
             <h1 className="text-[#181815B2]">Call Us</h1>
             <p className="font-[500]">+966 XXX XXX XXX</p>
             <h1 className="text-[#181815B2]">Email</h1>
             <p className="font-[500]">Info@Duremere.Ai</p>
           </div>
         </div>

            <h1 className="pl-20 text-[#196264] text-[190px] font-[700] underline decoration-7">Let’s Talk!</h1>
            <div className="w-[600px] pl-20">
            <div className="flex justify-between items-center gap-1 relative ">
              <Image
              src="/images/logo.png"
              width={25}
              height={25}
              alt="logo"
              />
              <h1 className="absolute text-blue text-[27px] pl-7">Duremere.<span className = "text-[#196264]">Ai</span></h1>
              
           </div>
           <p className="text-[#181815B2] pt-8">Empowering GCC enterprises with secure, future-ready software and AI solutions.</p>
            </div>
            <p className="pl-20 pt-20">©<span className="font-[500]">2025 Duremere AI Solutions</span>. <span className="text-[#181815B2]">All Rights Reserved.</span> | <span className="text-[#196264]">Privacy Policy</span> | <span className="text-[#196264]">Terms of Service</span></p>
        </div>
      </section>

      
    </div>
  )
}

export default page
