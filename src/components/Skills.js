import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Skill = ({ name, x, y,href }) => {
  return (
    <motion.a
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
       py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
       lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
       xs:text-dark xs:dark:text-light xs:font-bold
       dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]
       "
       whileHover={{ 
        scale: 1.2,
        // backgroundColor: ["#121212", "rgba(131,58,180,1)","rgba(30,139,195,1)", "#121212"],
        transition: {duration:1, repeat: Infinity}
       }}
       initial={{x:0,y:0}}
       whileInView={{ x:x, y:y,transition: {duration: 1.5}}}
       transition={{duration: 1.7}}
       viewport={{once: true}}
       href={href}
       
    >
      {name}
    </motion.a>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">Enterprise</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
      lg:bg-circularLightLg lg:dark:bg-circularDarklg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm
        dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]
    
      ">
        <motion.a
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer
          dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2   dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]
          "
          href="https://www.facebook.com/hotelkhanhlinhvn/photos_by?locale=vi_VN"
          whileHover={{ 
            scale: 1.2,
            
            // backgroundColor: ["#121212", "rgba(131,58,180,1)","rgba(30,139,195,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
            transition: {duration:1, repeat: Infinity}
           }}
        >
          Hotel
        </motion.a>
        <Skill name="Receptionist" x="-22vw" y="2vw"
        
      
        href="https://www.facebook.com/hotelkhanhlinhvn/photos_by?locale=vi_VN"/>
        <Skill name="Service" x="-5vw" y="-10vw" />
        <Skill name="Housekeeper" x="20vw" y="6vw" />
        <Skill name="Bell man" x="0vw" y="12vw" />
        <Skill name="Chef" x="-20vw" y="-15vw" />
        <Skill name="Protect" x="15vw" y="-12vw" />
        <Skill name="Technical" x="32vw" y="-5vw" />
        <Skill name="Marketing" x="0vw" y="-20vw" />
        <Skill name="Sale man" x="-25vw" y="18vw" />
        <Skill name="Dev" x="18vw" y="18vw" />

      </div>
    </>
  );
};

export default Skills;
