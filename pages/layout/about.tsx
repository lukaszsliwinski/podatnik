import Image from "next/image";

import profile from "../../public/profile.jpg";
import kibr from "../../public/kibr.jpg";
import orly from "../../public/orly.png";

import Counter from "../components/counter";


export default function About() {
  return (
    <section className="flex flex-col justify-center items-center bg-light-bg" id="about">
      <div className="grid grid-cols-2 gap-20 max-w-6xl my-24">
        <div className="my-auto">
          <h1 className="mb-4 text-3xl font-semibold">O MNIE</h1>
          <p className="text-justify font-light">
            <strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <Image
          className="w-xl"
          src={profile}
          alt="profile"
        />
      </div>
      <div className="flex justify-around h-64 w-screen bg-dark-bg">
        <div className="w-full flex justify-around items-center px-20">
          <Image
            className="h-28 w-auto"
            src={kibr}
            alt="kibr"
          />
          <Image
            className="h-28 w-auto"
            src={orly}
            alt="orly"
          />
        </div>
        <div className="w-px bg-light-bg my-8"></div>
        <div className="w-full flex justify-around items-center px-20 text-light-text">
          <Counter number={35} text={'lat doświadczenia'} animationTime={1500} />
          <Counter number={120} text={'zadowolonych klientów'} animationTime={1500} />
        </div>
      </div>
    </section>
  );
}