type Prop = {
  title: string;
  animeStyles: string;
};

const SectionTitle = ({ title, animeStyles }: Prop) => {
  return (
    <div className={`flex flex-col justify-center items-center mt-4 transition ${animeStyles}`}>
      <h2 className="text-2xl font-medium tracking-wide">{title}</h2>
      <div className="w-16 h-[1px] bg-gray-600 animate-[pulse_2s_linear_infinite]"></div>
    </div>
  );
};
export { SectionTitle };
