export default function Loading() {
  return (
    <main className="min-h-screen bg-[#070B14] p-8">
      <div className="animate-pulse">
        <div className="h-16 w-96 rounded-2xl bg-white/10 mb-8" />

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="h-64 rounded-3xl bg-white/10 lg:col-span-2" />
          <div className="h-64 rounded-3xl bg-white/10" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 mt-8">
          <div className="h-44 rounded-3xl bg-white/10" />
          <div className="h-44 rounded-3xl bg-white/10" />
          <div className="h-44 rounded-3xl bg-white/10" />
          <div className="h-44 rounded-3xl bg-white/10" />
        </div>
      </div>
    </main>
  );
}