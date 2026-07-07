import Image from "next/image";
import { LuInfinity } from "react-icons/lu";

const Summary = () => {
  const info = [
    {
      value: "+1",
      label: "Years Exp.",
    },
    {
      value: "40+",
      label: "Projects Done",
    },
    {
      value: "12",
      label: "Tech Stack",
    },
    {
      icon: LuInfinity,
      label: "Coffee Cups",
    },
  ];
  return (
    <section className="p-5 grid grid-cols-1 md:grid-cols-3 gap-8 mb-3 md:mb-10">
      <div className="relative col-span-1 h-72 w-72 rounded-full bg-secondary p-2">
        <div className="h-full w-full rounded-full bg-background p-1">
          <Image
            width={256}
            height={256}
            src="/profile.png"
            alt="Avatar image"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-4 md:col-span-2">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-center md:text-start">
          Beyond the Code
        </h1>
        <p className="w-full text-bse font-normal text-secondary">
          I am Mohamed Amr, a Full-Stack Engineer based on the intersection of
          design and logic. My journey in tech is driven by a relentless
          curiosity for how systems work and a passion for creating tools that
          empower users.
        </p>
        <p className="w-full text-bse font-normal text-secondary">
          When I&apos;m not architecting servers or refining UI components,
          I&apos;m exploring the latest in WebGL, mentoring junior developers,
          or contributing to open-source projects. I believe the best code is
          not just functional, but an expression of clarity and purpose.
        </p>
        <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-4">
          {info.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.label} className="flex flex-col gap-1">
                {Icon ? (
                  <Icon className="size-7 text-primary" />
                ) : (
                  <p className="text-2xl font-bold text-primary">
                    {item.value}
                  </p>
                )}

                <p className="text-sm text-muted">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Summary;
