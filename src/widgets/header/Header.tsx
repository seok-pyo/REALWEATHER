import { Search } from "@/features";
import { Logo } from "@/shared/ui";

export function Header() {
  return (
    <header className="mx-auto h-24 bg-zinc-900 flex items-center justify-between p-8 md:rounded-2xl">
      <Logo />
      <Search />
    </header>
  );
}
