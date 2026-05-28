import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-zinc-800 text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6">
        {/* Navbar */}
        <nav className="absolute top-0 flex w-full max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <Image
              src="/next.svg"
              alt="Next.js Logo"
              width={100}
              height={24}
              className="invert"
            />
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
            <a href="#" className="hover:text-white transition">
              Features
            </a>
            <a href="#" className="hover:text-white transition">
              Pricing
            </a>
            <a href="#" className="hover:text-white transition">
              Docs
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="flex max-w-5xl flex-col items-center text-center">
          <div className="mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur">
            ✨ Built with Next.js + Tailwind CSS V1.0.0 DEMO 5
          </div>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-7xl">
            Build modern websites
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {" "}
              faster than ever
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            Create stunning, responsive, and lightning-fast web applications
            using Next.js, Tailwind CSS, and modern UI design principles.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://vercel.com/new"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center rounded-full bg-white px-8 py-4 font-medium text-black transition hover:scale-105 hover:bg-zinc-200"
            >
              Get Started
              <span className="ml-2 transition group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur transition hover:bg-white/10"
            >
              Documentation
            </a>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="mt-24 grid w-full max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Fast Performance",
              desc: "Optimized for speed and seamless user experiences.",
            },
            {
              title: "Modern UI",
              desc: "Beautiful responsive layouts with Tailwind CSS.",
            },
            {
              title: "Developer Friendly",
              desc: "Built with scalability and productivity in mind.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white/10"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-zinc-400">{item.desc}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}