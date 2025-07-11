import { useEffect, useRef } from "react";
import { motion, useAnimation, easeOut } from "framer-motion";
import Image from "next/image";

import profile from "../../public/profile.jpg";
import kibr from "../../public/kibr.jpg";
import orly from "../../public/orly.png";

import Counter from "../components/counter";

export default function About() {
  const ref = useRef(null);

  // animation controls
  const textControls = useAnimation();
  const imageControls = useAnimation();

  // motion variants
  const textVariants = {
    hidden: { opacity: 0, x: -150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          textControls.start("visible");
          imageControls.start("visible");
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [textControls, imageControls]);

  return (
    <section className="flex flex-col justify-center items-center" id="about">
      <div ref={ref} className="grid lg:grid-cols-2 sm:gap-y-8 lg:gap-20 mt-12 sm:my-16 md:my-24 lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
        <motion.div
          className="my-auto"
          initial="hidden"
          animate={textControls}
          variants={textVariants}
        >
          <h2 className="mb-4 text-3xl font-semibold">O MNIE</h2>
          <p className="text-justify font-light"><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&rsquo;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={imageControls}
          variants={imageVariants}
        >
          <Image
            className="rounded-xl shadow-xl mx-auto scale-80 lg:scale-100"
            src={profile}
            alt="profile"
          />
        </motion.div>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-around h-56 md:h-48 lg:h-64 w-[95vw] max-w-7xl bg-main-bg rounded-xl shadow-xl">
        <div className="mx-auto md:w-full flex justify-around items-center px-4 xl:px-20">
          <a className="mx-2" href="https://www.kibr.pl/" target="_blank" rel="noopener noreferrer">
            <Image className="h-16 md:h-24 lg:h-28 w-auto" src={kibr} alt="kibr" />
          </a>
          <a className="mx-2" href="https://orlyrachunkowosci.pl/" target="_blank" rel="noopener noreferrer">
            <Image className="h-16 md:h-24 lg:h-28 w-auto" src={orly} alt="orly" />
          </a>
        </div>
        <div className="hidden md:block w-px bg-light-bg my-8"></div>
        <div className="xs:w-sm sm:w-xl mx-auto md:w-full flex justify-around items-center px-4 xl:px-20 text-light-text">
          <Counter number={35} text={"lat doświadczenia"} animationTime={1500} />
          <Counter number={120} text={"zadowolonych klientów"} animationTime={1500} />
        </div>
      </div>
    </section>
  );
}