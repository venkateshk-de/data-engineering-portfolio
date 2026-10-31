import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="px-8 py-20 md:px-24">
        <h2 className="mb-6 text-3xl font-bold">
          About Me
        </h2>

        <p className="max-w-3xl leading-relaxed text-slate-400">
          I'm a Senior Data Engineer with 13+ years of experience
          designing, developing, and optimizing enterprise data
          solutions across cloud and on-premises environments.

          My expertise includes modern data platforms,
          distributed data processing, data warehousing,
          orchestration, and cloud-native architectures.
        </p>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <section
        id="contact"
        className="border-t border-slate-800 px-8 py-20 text-center"
      >
        <h2 className="mb-6 text-3xl font-bold">
          Let's Connect
        </h2>

        <p className="mb-8 text-slate-400">
          Interested in discussing data engineering,
          cloud platforms, or engineering opportunities?
        </p>

        <p className="text-blue-400">
          LinkedIn and GitHub links coming soon.
        </p>
      </section>

    </main>
  );
}