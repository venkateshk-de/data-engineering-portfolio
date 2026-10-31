import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-8 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">

        <div>
          <h3 className="text-lg font-bold text-white">
            Venkatesh Kondam
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            Senior Data Engineer | Cloud Data Platforms
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-slate-400">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            LinkedIn
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            GitHub
          </a>
        </div>

        <p className="text-sm text-slate-500">
            © 2026 Venkatesh Kondam. All rights reserved.
        </p>

      </div>
    </footer>
  );
}