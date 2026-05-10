export default function SciencePage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">

      {/* TITLE */}
      <h1 className="text-6xl font-bold mb-10 text-cyan-400">
        Science
      </h1>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* CARD 1 */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-cyan-400 transition">

          <h2 className="text-4xl font-bold mb-4">
            Scientific Method
          </h2>

          <p className="text-gray-400 text-xl">
            Observation → Hypothesis → Experiment → Evidence
          </p>

        </div>

        {/* CARD 2 */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-purple-400 transition">

          <h2 className="text-4xl font-bold mb-4">
            Physics
          </h2>

          <p className="text-gray-400 text-xl">
            Matter, energy, force, space and time
          </p>

        </div>

        {/* CARD 3 */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-pink-400 transition">

          <h2 className="text-4xl font-bold mb-4">
            Chemistry
          </h2>

          <p className="text-gray-400 text-xl">
            Atoms, molecules, reactions and materials
          </p>

        </div>

        {/* CARD 4 */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-green-400 transition">

          <h2 className="text-4xl font-bold mb-4">
            Biology
          </h2>

          <p className="text-gray-400 text-xl">
            Life, cells, DNA, evolution and ecosystems
          </p>

        </div>

      </div>

    </main>
  );
}