import { FiLayers, FiZap, FiStar } from "react-icons/fi";
const TechCards = () => {
  const badges = [
    {
      icon: FiLayers,
      title: "Scalable Architecture",
      bg: "bg-blue-500/10 dark:bg-blue-400/10",
      iconColor: "text-blue-600 dark:text-blue-400",
      description: `Designing robust backend systems and frontend infrastructures that grow seamlessly with your user base.`,
    },
    {
      icon: FiZap,
      title: "Performance First",
      bg: "bg-amber-500/10 dark:bg-amber-400/10",
      iconColor: "text-amber-600 dark:text-amber-400",
      description: `Optimization at every layer—from SQL queries to React rendering cycles—for lightning-fast delivery.`,
    },
    {
      icon: FiStar,
      title: "Refined UI/UX",
      bg: "bg-violet-500/10 dark:bg-violet-400/10",
      iconColor: "text-violet-600 dark:text-violet-400",
      description: `Crafting pixel-perfect, accessible interfaces that combine aesthetic beauty with functional clarity.`,
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {badges.map(({ icon: Icon, title, bg, iconColor, description }) => (
        <div
          key={title}
          className="flex flex-col items-start gap-3 rounded-xl border border-border p-4"
        >
          <div className={`rounded-lg p-2 ${bg}`}>
            <Icon className={`size-5 ${iconColor}`} />
          </div>

          <p className="font-semibold text-xl md:text-2xl ">{title}</p>
          <p className="text-base text-secondary">{description}</p>
        </div>
      ))}
    </div>
  );
};

export default TechCards;
