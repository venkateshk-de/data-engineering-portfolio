const navigation = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5 lg:px-12">

        {/* Logo */}
        <a
          href="/"
          className="text-xl font-bold tracking-tight text-blue-400"
        >
          VK.
        </a>

        {/* Navigation Links */}
        <div className="flex flex-wrap items-center gap-5 text-sm text-slate-300 sm:gap-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="transition-colors hover:text-blue-400"
            >
              {item.name}
            </a>
          ))}
        </div>

      </nav>
    </header>
  );
}