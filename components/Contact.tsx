import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-slate-800 px-8 py-24"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-400">
          Get In Touch
        </p>

        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Let's Connect
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-slate-400">
          Interested in discussing data engineering, cloud data
          platforms, or opportunities to build scalable data systems?
          I'd be glad to connect.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-500"
            >
              LinkedIn
            </a>
          )}

          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-700 px-6 py-3 font-medium text-white hover:border-blue-400"
            >
              GitHub
            </a>
          )}

          {profile.email && (
            <a
              href={`mailto:${profile.email}`}
              className="rounded-lg border border-slate-700 px-6 py-3 font-medium text-white hover:border-blue-400"
            >
              Email Me
            </a>
          )}

          <a
            href={profile.resume}
            download
            className="rounded-lg border border-slate-700 px-6 py-3 font-medium text-white hover:border-blue-400"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}