type Course = {
  id: string;
  title: string;
  progress: number;
};

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div  className="
    group
    rounded-3xl
    border border-white/10
    bg-white/5
    p-6
    backdrop-blur-xl
    transition-all
    duration-300
    hover:-translate-y-2
    hover:border-purple-500/50
    hover:bg-white/10
    hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]
  ">
      <h3 className="text-xl font-semibold">
        {course.title}
      </h3>

      <div className="mt-6">
        <div className="flex justify-between mb-2 text-sm">
          <span>Progress</span>
          <span>{course.progress}%</span>
        </div>

        <div className="h-3 rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
            style={{ width: `${course.progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}