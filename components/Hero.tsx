import ArchitectureVisual from "./ArchitectureVisual";

export default function Hero() {
  return (
    <section className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-12 px-8 py-20 lg:grid-cols-2 lg:px-12">

      {/* Left: Professional Introduction */}
      <div>
        <p className="mb-4 font-medium text-blue-400">
          Hello, I'm
        </p>

        <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl">
          Venkatesh Kondam
        </h1>

        <h2 className="mt-6 text-2xl font-medium text-slate-300">
          Senior Data Engineer
        </h2>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
          I design and build scalable cloud data platforms,
          reliable data pipelines, and high-performance
          analytical systems using modern data engineering
          technologies.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {[
            "Azure Databricks",
            "Snowflake",
            "PySpark",
            "dbt",
            "Airflow",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-slate-700 px-6 py-3 font-medium text-white transition hover:border-blue-400"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Right: Engineering Dashboard */}
      <div className="flex justify-center lg:justify-end">
        <ArchitectureVisual />
      </div>

    </section>
  );
}