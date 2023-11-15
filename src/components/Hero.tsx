import heroImg from "../assets/images/hero.svg";
// import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="mt-[113px] sm:mt-[68px] bg-sky-100 py-24">
      <div className="mx-auto">
        <h1 className="text-4xl font-bold text-center">
          Welcome to <span className="text-primary">My Portfolio</span>
        </h1>
        <p className="text-center text-gray-500 mt-4">
          I'm a front-end web developer with a passion for creating visually appealing and
          functional websites.
        </p>

        <img src={heroImg} alt="" />
      </div>
    </section>
  );
};
export default Hero;
