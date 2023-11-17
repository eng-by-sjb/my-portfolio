import { useEffect, useState } from "react";
import heroImg from "../../assets/images/hero.svg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Hero = () => {
  const [isAnim, setIsAnim] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setIsAnim(true);
    }, 1000);

    return () => clearTimeout(id);
  }, []);

  return (
    <section
      id="home"
      className="bg-sky-100 h-[calc(100vh-(114px_*_2))] mt-[114px] flex items-center justify-center sm:h-[calc(100vh-(69px_*_2))] sm:mt-[69px]">
      <article className="align-elements grid md:grid-cols-2 items-center gap-8">
        <div>
          <h1 className="text-4xl font-bold text-center">
            <span className="inline-block mb-2 text-sky-900/90 font-medium text-3xl/10">
              <span className="animate-[pulse_13s_ease-out_infinite_reverse]">Welcome!</span> I am
            </span>
            <br />
            <span
              className={`transition ease-linear duration-[800ms] delay-[1000ms] ${
                isAnim ? "opacity-100" : "opacity-0 scale-75 translate-y-4"
              }`}>
              Stephen{" "}
            </span>
            <span
              className={`transition ease-linear duration-[800ms] delay-[1900ms] ${
                isAnim ? "opacity-100" : "opacity-0 scale-75 translate-y-4"
              }`}>
              {" "}
              Jersuit
            </span>
            <span
              className={`transition ease-linear duration-[4000ms] delay-[2850ms] ${
                isAnim ? "opacity-100" : "opacity-0 scale-75 translate-y-full"
              }`}>
              {" "}
              Benyah
            </span>
            <span
              className={`transition ease-linear duration-[100ms] delay-[6000ms]${
                isAnim ? "opacity-100 animate-pulse" : "opacity-0 translate-y-full"
              }`}>
              .
            </span>
          </h1>
          <p
            className={`text-center text-gray-500 mt-4 transition duration-[650ms] ease-linear ${
              isAnim ? "opacity-100" : "opacity-0 scale-95"
            }`}>
            A full-stack developer with a passion for creating visually appealing interactive and
            functional web applications.
          </p>
          {/* shows on large screen */}
          <div
            className={`transition ease-out duration-[4000ms] ${
              isAnim ? "opacity-100" : "opacity-0"
            }`}>
            <div className="flex justify-center content-center gap-x-4 mt-8 animate-[pulse_5s_linear_infinite]">
              <a href="">
                <FaGithubSquare className="hero-icons" />
              </a>
              <a href="">
                <FaLinkedin className="hero-icons" />
              </a>
              <a href="">
                <FaTwitterSquare className="hero-icons" />
              </a>
            </div>
          </div>
          {/* shows on large screen */}
        </div>

        <img src={heroImg} alt="" className="hidden sm:block" />

        {/* shows on small screen */}
        {/* <div
          className={`transition ease-out duration-[4000ms] md:hidden ${
            isAnim ? "opacity-100" : "opacity-0"
          }`}>
          <div
            className={
              "flex justify-center content-center gap-x-4 mt-8 animate-[pulse_5s_linear_infinite]"
            }>
            <a href="">
              <FaGithubSquare className="hero-icons" />
            </a>
            <a href="">
              <FaLinkedin className="hero-icons" />
            </a>
            <a href="">
              <FaTwitterSquare className="hero-icons" />
            </a>
          </div>
        </div> */}
        {/* shows on small screen */}
      </article>
    </section>
  );
};
export { Hero };
