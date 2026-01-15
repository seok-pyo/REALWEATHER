import { CurrentBoard, Header } from "@/widgets";
import { FavoriteList } from "@/widgets";

export function MainPage() {
  return (
    <>
      <Header />
      <FavoriteList />
      <CurrentBoard />
    </>
  );
}
