import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import Lilcon from "./Lilcon";
const Details = ({ type, time,place, info}) => {
  

  const ref = useRef(null)

  const { scrollYProgress  } = useScroll({
    
    target: ref,
    offset: ["center end", "center center"]
  }
  );

  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
    <Lilcon scrollYProgress={scrollYProgress}/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration: 0.5, type:'spring'}}
      whileHover={{ scale: 1.1 }}
      >
        <h3 className="capitalize font-bold text-2xl text-primary dark:text-primaryDark sm:text-xl xs:text-lg  dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
          {type}
       
        </h3>

        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} |{place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">education</h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]
          dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]
          "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 ">
          <Details
            type=" Bachelor Of Science In Computer Science"
            time=" 2016-2020"
            place="Massachusetts Institute Of Technology (MIT)"
            info='
            Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
            Intelligence.'
          />
          <Details
            type=" Bachelor Of Science In Computer Science"
            time=" 2016-2020"
            place="Massachusetts Institute Of Technology (MIT)"
            info='
            Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
            Intelligence.'
          />
           <Details
            type=" Bachelor Of Science In Computer Science"
            time=" 2016-2020"
            place="Massachusetts Institute Of Technology (MIT)"
            info='
            Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
            Intelligence.'
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
