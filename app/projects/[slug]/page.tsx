import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { projects } from "../../../data/projects";

// Generate project routes at build time
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

// Main page component
export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <Suspense fallback={<ProjectLoading />}>
      <ProjectDetails params={params} />
    </Suspense>
  );
}

// Loading UI
function ProjectLoading() {
  return (
    <main className="min-h-screen bg-slate-950 px-8 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <p className="text-slate-400">
          Loading project details...
        </p>
      </div>
    </main>
  );
}

// Async component responsible for resolving the route
async function ProjectDetails({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 px-8 py-20 text-white">
      <div className="mx-auto max-w-4xl">

        <Link
          href="/#projects"
          className="text-sm text-blue-400 hover:text-blue-300"
        >
          ← Back to Projects
        </Link>

        <div className="mt-12">
          <p className="mb-4 text-sm uppercase tracking-widest text-blue-400">
            Engineering Project
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            {project.title}
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-slate-700 bg-slate-900 p-8">
            <h2 className="text-2xl font-semibold">
              Project Overview
            </h2>

            <p className="mt-4 text-slate-400">
              This project is currently in the planning stage.
              Architecture diagrams, implementation details,
              engineering decisions, and source code will be
              published as development progresses.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}