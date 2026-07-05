import Hero from "@/components/home/Hero";
import SelectedWorks from "@/components/home/SelectedWorks";
import TechStack from "@/components/home/TechStack";

export default function Home() {
  return (
    <div className="flex flex-col gap-32">
      <Hero />
      <TechStack />
      <SelectedWorks />
    </div>
  );
}
