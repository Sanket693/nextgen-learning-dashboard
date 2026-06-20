import { supabase } from "@/lib/supabase";
import Sidebar from "@/components/layout/Sidebar";
import HeroCard from "@/components/dashboard/HeroCard";
import ActivityCard from "@/components/dashboard/ActivityCard";
import CourseCard from "@/components/dashboard/CourseCard";
import StatsCard from "@/components/dashboard/StatsCard";
import FadeIn from "@/components/ui/FadeIn";

export default async function Home() {
  const { data: courses } = await supabase
    .from("courses")
    .select("*");

  const totalCourses = courses?.length || 0;

 const safeCourses = courses ?? [];

const avgProgress =
  safeCourses.length > 0
    ? Math.round(
        safeCourses.reduce((sum, c) => sum + c.progress, 0) /
        safeCourses.length
      )
    : 0;

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#070B14] via-[#0D1324] to-[#151B32] text-white">
      <div className="flex">
        <Sidebar />

        <section className="flex-1 p-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
  <FadeIn>
    <HeroCard />
  </FadeIn>
</div>

            <FadeIn>
  <ActivityCard />
</FadeIn>
            <div className="grid gap-6 mt-6 md:grid-cols-3">
  <FadeIn>
  <StatsCard
  title="Courses"
  value={totalCourses.toString()}
/>
</FadeIn>

 <FadeIn>
 <StatsCard
  title="Average Progress"
  value={`${avgProgress}%`}
/>
</FadeIn>

 <FadeIn>
  <StatsCard title="Learning Streak" value="12 Days" />
</FadeIn>
</div>
          </div>

          <h2 className="mt-10 mb-6 text-2xl font-bold">
            Continue Learning
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
  {courses?.map((course) => (
    <div key={course.id}>
      <FadeIn>
        <CourseCard course={course} />
      </FadeIn>
    </div>
  ))}
</div>
        </section>
      </div>
      <footer className="mt-12 text-center text-white/50 text-sm">
  Built with Next.js, Supabase, Framer Motion & Recharts
</footer>
    </main>

  );
}