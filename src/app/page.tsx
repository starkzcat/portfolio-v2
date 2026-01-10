import Education from "@/components/Education/page";
import Experience from "@/components/Experience/page";
import Links from "@/components/Links/page";
import { ModeToggle } from "@/components/ModeToggle/page";
import RecentProjects from "@/components/RecentProjects/page";
import TechStack from "@/components/TechStacks/page";
import Top from "@/components/Top/page";

export default function Home() {
  return (
    <div className="flex flex-col bg-white font-sans dark:bg-[#0a0a0a]">
      <main className="flex min-h-screen w-full max-w-2xl flex-col mx-auto pt-18 pb-12 px-16 bg-white dark:bg-[#0a0a0a] sm:items-start gap-5">
        <ModeToggle />
        <Top />
        <Links />
        <TechStack />
        <RecentProjects />
        <Experience />
        <Education />
      </main>
      <footer className="text-center text-sm mb-10 text-zinc-300">&copy; 2026 Andy Firmansyah</footer>
    </div>
  );
}
