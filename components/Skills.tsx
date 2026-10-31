import { skillCategories } from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-slate-800 bg-slate-900/40 px-8 py-24"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-400">
            Technical Expertise
          </p>

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Technologies & Engineering Skills
          </h2>

          <p className="mt-4 max-w-2xl text-slate-400">
            Technologies and engineering practices I use to build
            scalable, reliable, and maintainable data platforms.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-slate-700 bg-slate-950 p-6 transition-colors hover:border-blue-500/50"
            >
              <h3 className="mb-6 text-lg font-semibold text-white">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}