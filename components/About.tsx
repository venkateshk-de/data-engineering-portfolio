const capabilities = [
  {
    title: "Data Platform Engineering",
    description:
      "Designing scalable data platforms, ingestion frameworks, and distributed processing solutions.",
  },
  {
    title: "Cloud Data Architecture",
    description:
      "Building cloud-native data warehouses and lakehouse architectures using modern data technologies.",
  },
  {
    title: "Engineering Excellence",
    description:
      "Implementing data quality, observability, performance optimization, and automated deployment practices.",
  },
];

export default function About() {
  return (
    <section id="about" className="px-8 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-400">
            About Me
          </p>

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Engineering Reliable Data Platforms
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-slate-400">
            I'm a Senior Data Engineer with over 13 years of experience
            designing, developing, and optimizing enterprise data
            solutions across cloud and on-premises environments.
          </p>

          <p className="mt-4 max-w-4xl leading-relaxed text-slate-400">
            My experience spans traditional data warehousing,
            enterprise ETL development, modern cloud data platforms,
            and distributed data processing.

            I specialize in building reliable, scalable, and
            maintainable data engineering solutions using
            technologies including Azure Databricks, Snowflake,
            PySpark, SQL, dbt, and Apache Airflow.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="rounded-xl border border-slate-700 bg-slate-900 p-6"
            >
              <h3 className="text-xl font-semibold text-white">
                {capability.title}
              </h3>

              <p className="mt-4 leading-relaxed text-slate-400">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}