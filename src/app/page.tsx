import Education from "@/components/Education/page";
import Experience from "@/components/Experience/page";
import Links from "@/components/Links/page";
import { ModeToggle } from "@/components/ModeToggle/page";
import RecentProjects from "@/components/RecentProjects/page";
import TechStack from "@/components/TechStacks/page";
import Top from "@/components/Top/page";

export default function Home() {
  return (
    <div className="flex h-500 bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-2xl flex-col mx-auto py-18 px-16 bg-zinc-50 dark:bg-black sm:items-start gap-5">
        <ModeToggle />
        <Top />
        <Links />
        <TechStack />
        <RecentProjects />
        <Experience />
        <Education />
      </main>
    </div>
  );
}
