import { Search } from "@/features";
import { Logo } from "@/shared/ui";

export function Header() {
  return (
    <header className="mx-auto h-24 bg-zinc-900 flex items-center justify-between p-8 md:rounded-2xl">
      <Logo />
      <div className="flex items-center gap-4">
        <button className="text-zinc-100 md:hidden">MY</button>
        <Search />
      </div>
    </header>
  );
}
