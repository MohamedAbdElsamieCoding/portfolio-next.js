import TechCards from "./TechCards";

const TechStack = () => {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-center tracking-tight font-bold text-foreground text-3xl md:text-5xl">
          Technical Mastery
        </h1>
        <div className="h-1 bg-primary rounded-full w-32" />
      </div>
      <TechCards />
    </section>
  );
};

export default TechStack;
