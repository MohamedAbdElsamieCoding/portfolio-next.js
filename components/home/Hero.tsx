import { LuQuote } from "react-icons/lu";

const Hero = () => {
  return (
    <section className="flex flex-col gap-6 w-2/3">
      <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#DAE2FD] dark:bg-[#201F1F] w-fit border border-border">
        <div className="w-2 h-2 rounded-full bg-primary" />
        <p className="text-xs font-bold tracking-wider text-secondary dark:text-primary">
          Available for junior frontend / Next.js opportunities
        </p>
      </div>
      <div className="flex items-center gap-2 text-secondary/30">
        <LuQuote className="text-[10px]" />
        <p className="text-sm font-semibold">
          Simplicity is the soul of efficiency
        </p>
      </div>
      <h1 className="text-7xl tracking-tighter font-bold">
        Building modern web applications with
        <span className="text-primary"> Next.js</span>.
      </h1>
      <h2 className="text-lg font-normal w-2/3">
        Frontend developer focused on React, Next.js, TypeScript, and clean
        responsive interfaces. I turn designs into performant web applications
        with reusable components and modern UX.
      </h2>
      <div className="flex items-center gap-6">
        <button className="p-6 border border-border text-background bg-foreground tracking-wider text-xs font-bold">
          VIEW PROJECTS
        </button>
        <button className="p-6 border border-primary text-primary tracking-wider text-xs font-bold">
          CONTACT ME
        </button>
      </div>
    </section>
  );
};

export default Hero;
