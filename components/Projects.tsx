import Link from "next/link";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="px-8 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-400">
            Engineering Portfolio
          </p>

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Featured Projects
          </h2>

          <p className="mt-4 max-w-2xl text-slate-400">
            Exploring practical approaches to building scalable,
            reliable, and maintainable data platforms.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="flex flex-col rounded-xl border border-slate-700 bg-slate-900 p-6 transition hover:border-blue-500/50"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-wider text-blue-400">
                  Engineering Project
                </span>

                <span className="rounded-full border border-amber-800 bg-amber-950 px-3 py-1 text-xs text-amber-400">
                  {project.status}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-4 flex-grow leading-relaxed text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-slate-700 bg-slate-950 px-3 py-1 text-xs text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <Link
                href={`/projects/${project.slug}`}
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300"
              >
                Explore Project <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}