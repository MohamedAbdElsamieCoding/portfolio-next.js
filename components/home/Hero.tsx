import Image from "next/image";
import { LuQuote } from "react-icons/lu";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="col-span-3 md:col-span-2 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#DAE2FD] dark:bg-[#201F1F] w-fit border border-border">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <p className="text-[10px] md:text-xs font-bold tracking-wider text-secondary dark:text-primary">
              Available for junior frontend / Next.js opportunities
            </p>
          </div>
          <div className="flex items-center gap-2 text-secondary/30 dark:text-foreground/40">
            <LuQuote className="text-[7px] md:text-[10px]" />
            <p className="text-[10px] md:text-sm font-semibold">
              Simplicity is the soul of efficiency
            </p>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl tracking-tighter font-bold">
          Building modern web applications with
          <span className="text-primary"> Next.js</span>.
        </h1>
        <h2 className="text-sm md:text-lg font-normal md:w-2/3">
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
      </div>
      <div className="hidden relative col-span-1 md:flex items-center justify-center">
        <Image
          alt="profile"
          src="/profile.png"
          fill
          className="aspect-square object-cover rounded-2xl border border-secondary dark:border-primary shadow-2xl/50 shadow-secondary dark:shadow-lg/40 dark:shadow-primary"
        />
      </div>
    </section>
  );
};

export default Hero;
