import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Knowledge Universe",
  description: "Ultimate Learning Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">

        <div className="flex min-h-screen">

          {/* SIDEBAR */}
          <aside className="w-72 bg-zinc-950 border-r border-zinc-800 p-6 hidden md:block">

            <h1 className="text-3xl font-bold mb-10 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
              Knowledge Universe
            </h1>

            <nav className="space-y-4">

              <Link
                href="/"
                className="block p-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition"
              >
                Home
              </Link>

              <Link
                href="/science"
                className="block p-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition"
              >
                Science
              </Link>

              <Link
                href="/hvac"
                className="block p-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition"
              >
                HVAC
              </Link>

              <Link
                href="/meditation"
                className="block p-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition"
              >
                Meditation
              </Link>

              <Link
                href="/universe"
                className="block p-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition"
              >
                Universe
              </Link>

            </nav>

          </aside>

{/* PAGE CONTENT */}
<div className="flex-1">

  {/* TOP NAVBAR */}
  <header className="h-20 border-b border-zinc-800 bg-zinc-950 flex items-center justify-between px-8 sticky top-0 z-50">

    <div>
      <h2 className="text-2xl font-bold text-cyan-400">
        Knowledge Universe
      </h2>
    </div>

    {/* SEARCH */}
    <div className="w-[400px] hidden md:block">

      <input
        type="text"
        placeholder="Search topics..."
        className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-5 py-3 text-white outline-none focus:border-cyan-400 transition"
      />

    </div>

  </header>

  {/* CONTENT */}
  <main>
    {children}
  </main>

</div>

        </div>

      </body>
    </html>
  );
}