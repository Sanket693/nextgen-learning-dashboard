export default function HeroCard() {
  return (
    <article className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 backdrop-blur-xl">
      <p className="text-white/60">
        Welcome Back
      </p>

      <h1 className="mt-2 text-5xl font-bold">
        Sanket 👋
      </h1>

      <p className="mt-4 text-white/70 max-w-lg">
        Continue your learning journey and track your progress
        across all courses.
      </p>

      <div className="mt-8 flex gap-4">
        <div className="rounded-2xl bg-white/10 px-4 py-3">
          <p className="text-white/60 text-sm">
            Active Courses
          </p>

          <h3 className="text-2xl font-bold">
            4
          </h3>
        </div>

        <div className="rounded-2xl bg-white/10 px-4 py-3">
          <p className="text-white/60 text-sm">
            Completion
          </p>

          <h3 className="text-2xl font-bold">
            68%
          </h3>
        </div>
      </div>
    </article>
  );
}