import Links from "@/components/Links/page";
import { ModeToggle } from "@/components/ModeToggle/page";
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
        {/* <div className="flex flex-col text-base font-medium sm:flex-row">
          <h3>Hellooo</h3>
        </div> */}
      </main>
    </div>
  );
}
