import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import acticle1 from "../../public/images/articles/create loading screen in react js.jpg";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);
const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        width={2500}
        height={2000}
        style={{ x: x, y: y }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1 ,zIndex: 10}}
      transition={{ duration: 0.2 }}
      className="relative w-full p-4 py-6 my-6 rounded-xl flex items-center justify-between
    bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
    sm:flex-col   dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
    >
      <MovingImg title={title} img={img} link={link} />
      <motion.span
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
      className="text-primary dark:text-primaryDark font-semibold pl-4 sm:self-star sm:pl-0 xs:text-sm">{date}</motion.span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className=" relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light
    
    ">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl
        dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]
       dark:bg-light
      " />
      <Link
        href={link}
        target="_bank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          width={2500}
          height={2000}
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary dark:text-primaryDark font-semibold">{time}</span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Khánh Linh Hotel | Aticles Page</title>
        <meta name="description atic" content="any description actic" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Words Can Change The World! " className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title=" Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch.
            Follow this step-by-step guide to integrate Pagination component in your ReactJS project. "
              time="9 min read"
              link="/"
              img="https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/344177101_925233218781565_1912645878743609505_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_ohc=ibZblj6VbsMAX9I1xFz&_nc_ht=scontent.fdad1-4.fna&oh=00_AfAn1oBvPiNVsBVx7fj0HE1gLkp6mAWmyM6KVK8bC47D1A&oe=65A17160"
            />
            <FeaturedArticle
              title=" Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch.
            Follow this step-by-step guide to integrate Pagination component in your ReactJS project. "
              time="9 min read"
              link="/"
              img="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/337545815_755859696005843_2546285535997364211_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_ohc=cPmZKv9KaO4AX9Kgh4U&_nc_ht=scontent.fdad1-3.fna&oh=00_AfC9HoOZ1R1LFgy0hWE2eYJ9Rau1udD3mHy_6fAPAg359A&oe=65A1239C"
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16">
            All Aticles
          </h2>
          <ul className="mb-24 flex flex-col">
            <Article
              title="
            Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling
          "
              date="Martch 22,2023"
              link="/"
              img="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/337545815_755859696005843_2546285535997364211_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_ohc=cPmZKv9KaO4AX9Kgh4U&_nc_ht=scontent.fdad1-3.fna&oh=00_AfC9HoOZ1R1LFgy0hWE2eYJ9Rau1udD3mHy_6fAPAg359A&oe=65A1239C"
            />
            <Article
              title="
            Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling
          "
              date="Martch 22,2023"
              link="/"
              img="https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/345895670_139433469114229_459528674174069214_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_ohc=V_kfFgz6x5QAX9Wy9mo&_nc_oc=AQkFnlkqABAmNKs4sbow2oWsYzpExjnsrlASv-0GlczE4p9Fj0yICdiu10yvSK4-rvs&_nc_ht=scontent.fdad1-2.fna&oh=00_AfCpv68EneaCwWpUhiEwiLcMRJjUt1zioGVWVcfA1fNN9g&oe=65A1F42C"
            />
            <Article
              title="
            Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling
          "
              date="Martch 22,2023"
              link="/"
              img="https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/344234583_3498371087087207_7785198091239440363_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_ohc=adRf2muSl2wAX8BS1hP&_nc_ht=scontent.fdad1-2.fna&oh=00_AfAa2W51vI0TAveQRyDEeiSAOnAMWys0yTjo-uqwAvudxA&oe=65A28093"
            />

            <Article
              title="
            Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling
          "
              date="Martch 22,2023"
              link="/"
              img="https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/344804355_7040136889333022_7253423703053979189_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=yWB6zMxn5JQAX8TSjZ3&_nc_oc=AQmMF5Q-RWT6qBxk_TOc2d7eFqJTi5hTmWTBAtG3GUqg94RaJKvCoUhGl1RH2bJ7rlw&_nc_ht=scontent.fdad1-4.fna&oh=00_AfB01lRi4PyHR53vcH3MvKrwOVFNRgnkgyYzZAHmW3oJxA&oe=65A2CD7B"
            />

            <Article
              title="
            Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling
          "
              date="Martch 22,2023"
              link="/"
              img="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/341470088_267261895635700_3921364081661104699_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=piDgFHPdpeAAX_4vJdF&_nc_ht=scontent.fdad2-1.fna&oh=00_AfD4_gQrL5VA2PDWZJ2xE3iCno9fqhgMfU52K7NghmgauQ&oe=65A1A850"
            />
            <Article
              title="
            Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling
          "
              date="Martch 22,2023"
              link="/"
              img="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/340635530_3699890680247026_1514844132086568214_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_ohc=9t5l5JkN2bsAX-GZX5G&_nc_ht=scontent.fdad1-3.fna&oh=00_AfBDEyAzQdMILLlp0bl0RtKkQbdUc3YF0eqwgY_Ipbttbw&oe=65A1A9F0"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
