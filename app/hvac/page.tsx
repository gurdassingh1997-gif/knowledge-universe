export default function HVACPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-6xl font-bold text-cyan-400 mb-10">
        HVAC Engineering
      </h1>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
          <h2 className="text-3xl font-bold mb-4">
            Heat Load Calculation
          </h2>

          <p className="text-gray-400">
            Learn HVAC heat load calculations for comfort and cleanroom systems.
          </p>
        </div>

        <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
          <h2 className="text-3xl font-bold mb-4">
            Duct Design
          </h2>

          <p className="text-gray-400">
            Static pressure, friction loss, velocity and sizing methods.
          </p>
        </div>

      </div>

    </main>
  );
}