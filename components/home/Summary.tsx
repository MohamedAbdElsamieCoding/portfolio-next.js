import Image from "next/image";
import { LuInfinity } from "react-icons/lu";

const Summary = () => {
  return (
    <section className="p-5 grid grid-cols-1 md:grid-cols-3 gap-8">
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
      <div className="flex flex-col items-start gap-2">
        <h1>Beyond the Code</h1>
        <p>
          I am Mohamed Amr, a Full-Stack Engineer based on the intersection of
          design and logic. My journey in tech is driven by a relentless
          curiosity for how systems work and a passion for creating tools that
          empower users.
        </p>
        <p>
          When I'm not architecting servers or refining UI components, I'm
          exploring the latest in WebGL, mentoring junior developers, or
          contributing to open-source projects. I believe the best code is not
          just functional, but an expression of clarity and purpose.
        </p>
        <div className="flex items-center gap-10">
          <div>
            <p>+1</p>
            <p>Years Exp.</p>
          </div>
          <div>
            <p>40+</p>
            <p>Projects Done</p>
          </div>
          <div>
            <p>12</p>
            <p>Tech Stack</p>
          </div>
          <div>
            <LuInfinity />
            <p>Coffee Cups</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
