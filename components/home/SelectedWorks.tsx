import Image from "next/image";
import Link from "next/link";

const SelectedWorks = () => {
  const projects = [
    {
      number: "01",
      category: "ADMIN DASHBOARD",
      title: "Business Management Dashboard",
      description:
        "A multi-page admin dashboard for managing products, orders, and analytics. Built with reusable data-fetching hooks, URL-based filters, and performance-focused KPI calculations.",
      image: "/dashboard.png",
      alt: "Admin dashboard analytics overview",
      technologies: [
        "React 19",
        "TypeScript",
        "TanStack Query",
        "ECharts",
        "Tailwind CSS",
      ],
      href: "/projects/admin-dashboard",
    },
    {
      number: "02",
      category: "E-COMMERCE",
      title: "Stellar Store",
      description:
        "A production-ready e-commerce experience with product discovery, advanced filtering, cart management, checkout flow, shipping management, and dynamic product images through Supabase.",
      image: "/stellar-store.jpg",
      alt: "Stellar Store e-commerce website",
      technologies: [
        "React 19",
        "TypeScript",
        "Zustand",
        "Supabase",
        "Tailwind CSS",
      ],
      href: "/projects/stellar-store",
    },
    {
      number: "03",
      category: "MOVIE DISCOVERY",
      title: "Movies Search Website",
      description:
        "A movie discovery platform that helps users explore trending films, search titles, view cast and trailer details, and save favorites with secure Firebase authentication.",
      image: "/auteur-cinema.jpg",
      alt: "Movies search website",
      technologies: ["React 19", "TypeScript", "TMDB API", "Firebase", "Vite"],
      href: "/projects/movies-search",
    },
  ];

  return (
    <section className="flex flex-col gap-8">
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-2 items-start">
          <h1 className="tracking-tighter text-3xl md:text-5xl text-secondary font-bold">
            Selected Works
          </h1>
          <p className="text-secondary/80 text-sm md:text-lg font-medium">
            Engineering excellence across diverse industries.
          </p>
        </div>
        <Link
          className="tracking-widest text-sm font-medium text-primary underline"
          href={"/projects"}
        >
          Browse all projects
        </Link>
      </div>
      <div className="flex flex-col gap-16">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="grid items-center gap-8 md:grid-cols-2"
          >
            <div
              className={`relative min-h-72 overflow-hidden rounded-2xl border border-secondary shadow-2xl/50 shadow-secondary/50 dark:border-primary dark:shadow-lg dark:shadow-primary/40 ${
                index % 2 !== 0 ? "md:order-2" : ""
              }`}
            >
              <Image
                fill
                src={project.image}
                alt={project.alt}
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="flex flex-col items-start gap-5">
              <span className="text-sm font-semibold tracking-widest text-primary">
                {project.number} / {project.category}
              </span>

              <h3 className="text-3xl font-bold tracking-tight text-secondary">
                {project.title}
              </h3>

              <p className="max-w-xl leading-relaxed text-secondary/75">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border bg-border border-border px-3 py-1 text-xs font-medium text-secondary dark:border-primary/30"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <Link
                href={project.href}
                className="mt-2 text-sm font-semibold tracking-wider text-primary underline"
              >
                View case study
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SelectedWorks;
