import { Home, BookOpen, BarChart3 } from "lucide-react";
export default function Sidebar() {
  return (
    <aside className="hidden md:flex w-20 min-h-screen border-r border-white/10 bg-black/20 backdrop-blur-xl flex-col items-center py-8">
      <div className="text-2xl font-bold">N</div>

     <nav className="mt-10 flex flex-col gap-6">
  <button className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
    <Home size={20} />
  </button>

  <button className="w-12 h-12 rounded-xl hover:bg-white/10 flex items-center justify-center">
    <BookOpen size={20} />
  </button>

  <button className="w-12 h-12 rounded-xl hover:bg-white/10 flex items-center justify-center">
    <BarChart3 size={20} />
  </button>
</nav>
    </aside>
  );
}