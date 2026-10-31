const pipeline = [
  { stage: "Sources", tech: "APIs · Databases · Events" },
  { stage: "Ingestion", tech: "Azure Data Factory · Airflow" },
  { stage: "Processing", tech: "Databricks · PySpark" },
  { stage: "Storage", tech: "Delta Lake · Snowflake" },
  { stage: "Analytics", tech: "SQL · Data Products" },
];

export default function ArchitectureVisual() {
  return (
    <div className="w-full max-w-lg rounded-2xl border border-slate-700 bg-slate-900/80 p-6 shadow-2xl">

      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-blue-400">
            Engineering Workspace
          </p>

          <h3 className="mt-2 text-lg font-semibold text-white">
            Modern Data Platform
          </h3>
        </div>

        <span className="rounded-full border border-emerald-800 bg-emerald-950 px-3 py-1 text-xs text-emerald-400">
          Architecture
        </span>
      </div>

      <div className="space-y-2">
        {pipeline.map((item, index) => (
          <div key={item.stage}>
            <div className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-semibold text-white">
                  {item.stage}
                </span>

                <span className="text-right text-xs text-slate-400">
                  {item.tech}
                </span>
              </div>
            </div>

            {index < pipeline.length - 1 && (
              <div className="py-1 text-center text-blue-400">
                ↓
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-lg border border-slate-700 bg-slate-950 p-4 font-mono text-xs">
        <p className="text-slate-500">$ platform status</p>
        <p className="mt-2 text-emerald-400">
          ✓ Architecture: Lakehouse
        </p>
        <p className="mt-1 text-emerald-400">
          ✓ Processing: Distributed
        </p>
        <p className="mt-1 text-blue-400">
          → Focus: Scalability · Reliability · Quality
        </p>
      </div>
    </div>
  );
}