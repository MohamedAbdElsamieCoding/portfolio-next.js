import Link from "next/link";

const Footer = () => {
  const footerLinks = [
    { title: "Github", link: "/" },
    { title: "Linkedin", link: "/about" },
    { title: "Documentation", link: "/projects" },
  ];
  return (
    <footer className="border-t border-border bg-surface">
      <div className="relative flex flex-col md:flex-row justify-between px-4 md:px-10 py-4">
        <Link href="/" className="text-lg md:text-xl font-bold text-primary">
          Mohamed Amr
        </Link>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-10 text-secondary text-sm font-semibold">
            {footerLinks.map((item) => (
              <li key={item.title} className="uppercase">
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-xs md:text-sm font-semibold text-secondary/50 uppercase">
          © 2026 Frontend_Developer . ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
