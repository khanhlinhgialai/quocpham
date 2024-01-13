import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import Lilcon from "./Lilcon";



const Details = ({ position, company, companyLink, time, address, work }) => {

  const ref = useRef(null)

  const { scrollYProgress  } = useScroll({
    
    target: ref,
    offset: ["center end", "center center"]
  }
  );


  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] 
    mx-auto flex flex-col items-center justify-between md:w-[80%]">
    <Lilcon  scrollYProgress={scrollYProgress}/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration: 0.5, type:'spring'}}
      whileHover={{ scale: 1.1 }}
      
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize
            ml-1 rounded-lg  p-1
              hover:bg-light  
              hover:text-primary border-2 border-solid border-transparent hover:border-dark
              dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]
            "
           
          >
            @{company}
          </a>
        </h3>

        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} |{address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">ex</h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top 
          md:w-[2px] md:left-[30px] xs:left-[20px]
          dark:bg-primaryDark dark:shadow-3xl

 dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]

          "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            time="2022-present"
            address="motion view"
            work="
          Worked on a team responsible for developing new features for Google 
          search engine, including improving the accuracy and relevance of search results and 
          developing new tools for data analysis and visualization."
          />
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            time="2022-present"
            address="motion view"
            work="
          Worked on a team responsible for developing new features for Google 
          search engine, including improving the accuracy and relevance of search results and 
          developing new tools for data analysis and visualization."
          />
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            time="2022-present"
            address="motion view"
            work="
          Worked on a team responsible for developing new features for Google 
          search engine, including improving the accuracy and relevance of search results and 
          developing new tools for data analysis and visualization."
          />
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            time="2022-present"
            address="motion view"
            work="
          Worked on a team responsible for developing new features for Google 
          search engine, including improving the accuracy and relevance of search results and 
          developing new tools for data analysis and visualization."
          /><Details
          position="Software Engineer"
          company="Google"
          companyLink="www.google.com"
          time="2022-present"
          address="motion view"
          work="
        Worked on a team responsible for developing new features for Google 
        search engine, including improving the accuracy and relevance of search results and 
        developing new tools for data analysis and visualization."
        />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
