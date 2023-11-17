type Props = {
  id: string;
  icon: JSX.Element;
  text: string;
  title: string;
};
const TechStackCard = ({ icon, text, title }: Props) => {
  return (
    <article className="">
      <div className="mb-4 md:mb-6">{icon}</div>
      <h4 className="text-base font-medium">{title}</h4>
      <div className="h-[1px] w-4 bg-gray-500 mb-2"></div>
      <p className="text-sky-950">{text}</p>
    </article>
  );
};

export { TechStackCard };
