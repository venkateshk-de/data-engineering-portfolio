export type Project = {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  status: "Planned" | "In Progress" | "Completed";
};

export const projects: Project[] = [
  {
    slug: "enterprise-data-lakehouse",
    title: "Enterprise Data Lakehouse",
    description:
      "A metadata-driven data engineering platform designed for scalable ingestion, distributed processing, data quality, and analytics.",
    technologies: [
      "Azure Databricks",
      "PySpark",
      "Delta Lake",
      "Azure Data Factory",
    ],
    status: "Planned",
  },
  {
    slug: "modern-cloud-data-warehouse",
    title: "Modern Cloud Data Warehouse",
    description:
      "A cloud-native analytical platform demonstrating incremental ELT, dimensional modeling, orchestration, and automated data quality testing.",
    technologies: [
      "Snowflake",
      "dbt",
      "Apache Airflow",
      "AWS",
    ],
    status: "Planned",
  },
  {
    slug: "intelligent-data-lineage-explorer",
    title: "Intelligent Data Lineage Explorer",
    description:
      "A metadata-driven application for exploring upstream and downstream dependencies across tables, transformations, jobs, and orchestration pipelines.",
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "Databricks",
    ],
    status: "Planned",
  },
];