import { SectionTitle } from "../reusable_components";
import { techStacks } from "../../data";
import { useScroll } from "../reusable_custom_hooks";
import { TechStackCard } from "./TechStackCard";
import { ToEndTechStackFloatBtn } from "./ToEndOfTechStackFloatBtn";

const TechStack = () => {
  const { isShowTechStack } = useScroll();

  const sectionAnimeStyles = isShowTechStack
    ? "duration-[1000ms] ease-out opacity-100"
    : "duration-[500ms] ease-out opacity-0 scale-90";

  return (
    <section id="tech-stack" className=" bg-sky-100">
      <div className="bg-gradient-to-t from-sky-400/50 to-sky-100/50">
        <div className="align-elements backdrop-blur-lg">
          <SectionTitle title="Tech Stack" animeStyles={sectionAnimeStyles}></SectionTitle>
          <div
            className={`py-16 grid gap-12 md:grid-cols-3 delay-100 md:delay-0 ${sectionAnimeStyles}`}>
            {techStacks.map((techStack) => {
              return <TechStackCard key={techStack.id} {...techStack} />;
            })}
          </div>
        </div>
      </div>
      <ToEndTechStackFloatBtn />
    </section>
  );
};
export { TechStack };
